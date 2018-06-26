import {PureComponent} from 'react'
import {connect} from 'react-redux'

import {getData} from '@/redux/modules/listings/data/selectors'
import {Modal, Body} from '@/components/layout'
import Gallery from '@/components/listings/Gallery'
// import RelatedListings from '@/containers/listings/Feed/Related'

@connect(
  (state, {params}) => ({
    data: getData(state, params) || {}
  }),
  null,
  null,
  {withRef: true}
)
export default class ListingGalleryScreen extends PureComponent {
  static screenName = 'listing.Gallery'

  static options = {
    layout: {
      orientation: ['portrait', 'landscape']
    }
  }

  render() {
    const {data, onDismiss} = this.props

    return (
      <Modal testID="@listing.Gallery">
        <Body>
          <Modal.Header iconColor="white" onDismiss={onDismiss} />
          <Gallery>{data.images}</Gallery>
        </Body>
      </Modal>
    )
  }
}
