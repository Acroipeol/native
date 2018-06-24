import _ from 'lodash/fp'
import {
  put,
  all,
  call,
  select,
  takeLatest,
  getContext
} from 'redux-saga/effects'

import * as api from '@/lib/services/listings'
import {EDIT_PROFILE} from '@/graphql/modules/user/mutations'
import {GET_USER_LISTINGS} from '@/graphql/modules/user/queries'
import {getData as getListingData} from '@/redux/modules/listings/data/selectors'
import {getToken} from '@/redux/modules/auth/selectors'
import * as actions from './reducer'
import {getValue, getListing} from './selectors'

const listingValue = _.flow(
  _.mapKeys(_.snakeCase),
  _.pick([
    'complement',
    'rooms',
    'bathrooms',
    'garage_spots',
    'maintenance_fee',
    'tax_property'
  ]),
  _.map(String)
)

const addressValue = _.flow(
  ({address}) => ({
    details: address,
    text: {
      street: address.street,
      street_number: String(address.streetNumber),
      value: `${address.street}, ${address.streetNumber} - ${address.city} - ${
        address.state
      }`
    }
  }),
  _.mapKeys(_.snakeCase)
)

const formValue = (listing) => ({
  ...listingValue(listing),
  address: addressValue(listing)
})

function* fetchListing({listing: {id}}) {
  let listing = yield select(getListingData, {id})

  yield put(actions.setValue(formValue(listing)))
}

function* createListing() {
  const {address, phone, ...listing} = yield select(getValue)
  const jwt = yield select(getToken)
  const graphql = yield getContext('graphql')
  yield put(actions.request())
  try {
    if (phone)
      yield call(graphql.mutate, {
        mutation: EDIT_PROFILE,
        variables: {phone}
      })
    const response = yield call(
      api.create,
      {listing, address: address.details},
      {jwt}
    )
    yield call(graphql.query, {
      query: GET_USER_LISTINGS,
      fetchPolicy: 'network-only'
    })
    yield put(actions.success(response.listing))
  } catch (error) {
    yield put(actions.failure(error))
  }
}

function* updateListing() {
  const {address, phone, ...listing} = yield select(getValue)
  const {id} = yield select(getListing)
  const jwt = yield select(getToken)
  try {
    const response = yield call(
      api.update,
      id,
      {listing, address: address.details},
      {jwt}
    )
    console.log(response)
    yield put(actions.success({id}))
  } catch (error) {
    yield put(actions.failure(error))
  }
}

function* submit() {
  const listing = yield select(getListing)
  yield call(listing && listing.id ? updateListing : createListing)
}

export default function* listingFormScreenSaga() {
  yield all([
    takeLatest(actions.SET_LISTING, fetchListing),
    takeLatest(actions.SUBMIT, submit)
  ])
}
