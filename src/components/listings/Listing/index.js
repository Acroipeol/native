import {Component} from 'react'
import {View, Icon} from '@emcasa/ui-native'

import Map, {Marker} from '../Map'
import Description from './Description'
import Properties from './Properties'
import Header from './Header'
import styles, {markerStyles} from './styles'

export default class ListingView extends Component {
  state = {
    ready: false
  }

  get ready() {
    return this.state.ready && this.props.ready
  }

  componentDidMount() {
    requestAnimationFrame(() => this.setState({ready: true}))
  }

  render() {
    const {address} = this.props
    return (
      <View style={styles.container}>
        <Header ready={this.ready} testID="listing_header" {...this.props} />
        <Properties {...this.props} />
        <Description {...this.props} />
        {this.ready && (
          <View testID="listing_map">
            <Map zoom="close" style={styles.map} {...address}>
              <Marker styles={markerStyles} address={address}>
                <Icon name="home" color="pink" size={20} />
              </Marker>
            </Map>
          </View>
        )}
      </View>
    )
  }
}
