import _ from 'lodash/fp'
import {isEqualWith} from 'lodash'
import {createSelector} from 'reselect'

import {initialState} from './index'

const omitEmpty = _.omitBy(_.isEmpty)

const compareFilter = (a, b) => {
  if (_.isArray(a) && _.isArray(b))
    return _.isEqual(a.slice().sort(), b.slice().sort())
}

export const getSearchScreen = (state) => state.search

export const getSearchCity = (state) => getSearchScreen(state).city

export const getSearchFilters = (state) =>
  omitEmpty(getSearchScreen(state).filters || {})

export const hasSearchFilters = (state) =>
  !isEqualWith(
    getSearchFilters(state),
    getSearchFilters({search: initialState}),
    compareFilter
  )

const parseRange = (name, {min, max}) => ({
  [`min${_.upperFirst(name)}`]: min,
  [`max${_.upperFirst(name)}`]: max
})

export const getSearchFiltersQuery = createSelector(
  getSearchFilters,
  _.flow(
    ({price, area, rooms, garageSpots, ...filters}) =>
      Object.assign(
        {},
        filters,
        price && parseRange('price', price),
        area && parseRange('area', area),
        rooms && parseRange('rooms', rooms),
        garageSpots && parseRange('garageSpots', garageSpots)
      ),
    _.pickBy(_.identity)
  )
)
