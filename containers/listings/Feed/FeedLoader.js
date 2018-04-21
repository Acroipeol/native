import _ from 'lodash'
import {PureComponent} from 'react'
import withNavigation from 'react-navigation/src/views/withNavigation'
import {connect} from 'react-redux'

import {load} from '@/redux/modules/listings/feed'
import {
  getListings,
  getPagination,
  isLoading
} from '@/redux/modules/listings/feed/selectors'
import Loader from '@/containers/shared/Loader'

@withNavigation
export class FeedLoader extends PureComponent {
  static defaultProps = {
    length: 15
  }

  onInitialLoad = () => {
    const {load, type, data} = this.props
    if (_.isEmpty(data)) load(type, this.params)
    this.onLoad = this.onRequestLoad
  }

  onRequestLoad = () => {
    const {load, loading, type} = this.props
    if (!loading) load(type, this.params)
  }

  onSelect = (id) => {
    const {navigation} = this.props
    navigation.navigate('listing', {id})
  }

  onLoad = this.onInitialLoad

  get params() {
    const {length, params} = this.props
    return {...params, pageSize: length}
  }

  render() {
    return (
      <Loader
        {...this.props}
        params={this.params}
        onLoad={this.onLoad}
        props={{onSelect: this.onSelect}}
      />
    )
  }
}

const props = (...args) => ({
  data: getListings(...args),
  pagination: getPagination(...args),
  loading: isLoading(...args)
})

const actions = {
  load
}

export const withFeed = connect(props, actions)

export default withFeed(FeedLoader)
