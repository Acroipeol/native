import {AsyncStorage} from 'react-native'
import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'

import auth from './auth'
import listings from './listings'
import interest from './interest'
import neighborhoods from './neighborhoods'

const persistent = (reducer, options = {}) =>
  persistReducer(
    {
      key: reducer.name,
      storage: AsyncStorage,
      ...options
    },
    reducer
  )

export default combineReducers({
  auth: persistent(auth, {whitelist: ['user']}),
  listings,
  interest,
  neighborhoods
})
