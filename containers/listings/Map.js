import {PureComponent} from 'react'

import {withFeed} from './Feed/Loader'
import Map, {Marker, Aggregator} from '@/components/listings/Map'

class MapApp extends PureComponent {
  onSelect = (id) => () => this.props.onSelect(id)

  render() {
    const {data, active, ...props} = this.props
    const zIndex = active ? 2 : 1
    return (
      <Map {...props}>
        <Aggregator {...props}>
          {data &&
            data.map((listing) => (
              <Marker
                active={active === listing.id}
                onPress={this.onSelect(listing.id)}
                key={listing.id}
                style={{zIndex}}
                zIndex={zIndex}
                {...listing}
              />
            ))}
        </Aggregator>
      </Map>
    )
  }
}

export default withFeed(MapApp)
