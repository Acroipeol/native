import {Component} from 'react'
import {View} from 'react-native'

import Modal from '@/components/shared/Modal'
import Gallery from '../Gallery'
import Matterport from '../Matterport'
import Description from './Description'
import Properties from './Properties'
import Thumbnail from './Thumbnail'
import Map from './Map'
import styles from './styles'

export default class ListingView extends Component {
  state = {
    view: undefined
  }

  onOpen = (view) => () => this.setState({view})

  onClose = () => this.setState({view: undefined})

  renderGallery() {}
  renderModal() {
    const {images} = this.props
    const {view} = this.state

    switch (view) {
      case 'gallery':
        return <Gallery>{images}</Gallery>
      case 'matterport':
        return <Matterport code={this.props.matterport_code} />
      default:
        return undefined
    }
  }

  render() {
    const {view} = this.state
    return (
      <View style={styles.container}>
        <Thumbnail onOpen={this.onOpen} {...this.props} />
        <Properties {...this.props} />
        <Description {...this.props} />
        <Map {...this.props.address} />
        <Modal overlay visible={Boolean(view)} onDismiss={this.onClose}>
          {this.renderModal()}
        </Modal>
      </View>
    )
  }
}
