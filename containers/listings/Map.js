import {PureComponent} from 'react'
import {connect} from 'react-redux'

import {load} from '@/redux/modules/listings/feed'
import {
  getOptions,
  getPagination
} from '@/redux/modules/listings/feed/selectors'
import {withFeed} from './Feed/FeedLoader'
import Map, {Marker, Aggregator} from '@/components/listings/Map'

@connect(
  (state, props) => ({
    options: getOptions(state, props),
    pagination: getPagination(state, props)
  }),
  {load}
)
@withFeed
export default class MapApp extends PureComponent {
  componentDidMount() {
    const {type, load, options, pagination} = this.props
    if (!pagination.remainingCount) return
    load(type, {
      ...options,
      page_size: pagination.remainingCount
    })
  }

  onSelect = (id) => () => this.props.onSelect(id)

  render() {
    const {data, active, aggregate, children, ...props} = this.props
    return (
      <Map {...props}>
        {children}
        <Aggregator enabled={aggregate} {...props}>
          {data &&
            data.map((listing) => (
              <Marker
                active={active === listing.id}
                onPress={this.onSelect(listing.id)}
                key={listing.id}
                style={{zIndex: active === listing.id ? 2 : 1}}
                zIndex={active === listing.id ? 2 : 1}
                {...listing}
              />
            ))}
        </Aggregator>
      </Map>
    )
  }
}
