import {StackNavigator} from 'react-navigation'

import * as results from './Results'
import * as search from './Search'
import * as map from './Map'

export const screen = StackNavigator(
  {results, search, map},
  {
    initialRouteName: 'results',
    headerMode: 'none'
  }
)
