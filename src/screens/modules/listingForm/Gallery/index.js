import _ from 'lodash'
import {PureComponent} from 'react'
import {Navigation} from 'react-native-navigation'
import {connect} from 'react-redux'
import {withApollo} from 'react-apollo'
import gql from 'graphql-tag'

import composeWithRef from '@/lib/composeWithRef'
import {getImages} from '@/redux/modules/gallery/data/selectors'
import {load, remove, changeOrder} from '@/redux/modules/gallery/data'
import {
  getProgress,
  getErrors,
  isLoading
} from '@/redux/modules/gallery/upload/selectors'
import {create} from '@/redux/modules/gallery/upload'
import {Shell, Body} from '@/components/layout'
import Progress from '@/components/shared/Progress'
import Gallery from '@/components/newListing/Gallery'

import SubmitButtonScreen from '@/screens/modules/listingForm/SubmitButton'

class EditGalleryScreen extends PureComponent {
  static screenName = 'listingForm.EditGallery'

  static options = {
    topBar: {
      title: {text: 'Editar imagens'}
    }
  }

  componentDidMount() {
    const {load, params: {id}} = this.props
    load(id)
  }

  componentDidAppear() {
    const {componentId, params} = this.props
    if (params.id)
      Navigation.mergeOptions(componentId, {
        topBar: {
          rightButtons: [
            {
              id: `${componentId}_submit`,
              passProps: {params},
              component: {
                name: SubmitButtonScreen.screenName,
                passProps: {params}
              }
            }
          ]
        }
      })
  }

  componentDidUpdate(prev) {
    if (!_.isEqual(prev.images, this.props.images)) this.updateApolloCache()
  }

  onUpload = (images) => {
    const {create, params: {id}} = this.props
    create(id, images)
  }

  onDeleteImage = (imageId) => {
    const {remove, params: {id}} = this.props
    remove(id, imageId)
  }

  onChangeOrder = (order) => {
    const {changeOrder, params: {id}} = this.props
    changeOrder(id, order)
  }

  updateApolloCache() {
    const {client, images, params: {id}} = this.props
    client.writeFragment({
      id: `Listing:${id}`,
      fragment: gql`
        fragment images on Listing {
          images {
            ... on Image {
              id
              filename
              position
              description
            }
          }
        }
      `,
      data: {
        __typename: 'Listing',
        images: images.map((data) => ({
          ...data,
          __typename: 'Image'
        }))
      }
    })
  }

  render() {
    const {progress, errors, loading, images} = this.props
    return (
      <Shell testID="@listingForm.Gallery">
        <Progress progress={3 / 3} />
        <Body loading={!images}>
          <Gallery
            progress={progress}
            errors={errors}
            images={images}
            loading={loading}
            onUpload={this.onUpload}
            onDeleteImage={this.onDeleteImage}
            onChangeOrder={this.onChangeOrder}
          />
        </Body>
      </Shell>
    )
  }
}

export default composeWithRef(
  connect(
    (state, {params}) => ({
      images: getImages(state, params),
      loading: isLoading(state, params),
      progress: getProgress(state, params),
      errors: getErrors(state, params)
    }),
    {load, remove, create, changeOrder}
  ),
  withApollo
)(EditGalleryScreen)
