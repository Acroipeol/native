import _ from 'lodash'
import {PureComponent} from 'react'
import {Navigation} from 'react-native-navigation'
import {connect} from 'react-redux'

import composeWithRef from '@/lib/composeWithRef'
import * as format from '@/assets/format'
import {load as loadListing} from '@/redux/modules/listings/data'
import {getData, isLoading} from '@/redux/modules/listings/data/selectors'
import {load as loadRelatedListings} from '@/redux/modules/listings/relations'
import {getRelatedListings} from '@/redux/modules/listings/relations/selectors'
import {Shell, Body, Footer, Section} from '@/components/layout'
import Button from '@/components/shared/Button'
import Feed from '@/components/listings/Feed/Related'
import GalleryScreen from '@/screens/listing/Gallery'
import TourScreen from '@/screens/listing/Tour'
import Listing from './Listing'

class ListingScreen extends PureComponent {
  static screenName = 'listing.Listing'

  static options = {
    topBar: {
      backButtonTitle: ''
    }
  }

  updateNavigation() {
    const {data, componentId} = this.props
    Navigation.mergeOptions(componentId, {
      topBar: {
        title: {text: `R$${format.number(data.price)}`}
      }
    })
  }

  componentDidMount() {
    const {
      data,
      loadListing,
      relatedListings,
      loadRelatedListings,
      params: {id}
    } = this.props
    if (_.isEmpty(relatedListings)) loadRelatedListings(id)
    if (_.isEmpty(data)) loadListing(id)
    else this.updateNavigation()
  }

  componentDidUpdate(prev) {
    const {data} = this.props
    if (data && !_.isEqual(data, prev.data)) this.updateNavigation()
  }

  navigateTo = (component) => () => {
    const {componentId, params} = this.props
    Navigation.push(componentId, {
      component: {
        ...component,
        passProps: {params}
      }
    })
  }

  openModal = (idSuffix, component) => {
    const {params, componentId} = this.props
    const id = `${componentId}_${idSuffix}`
    Navigation.showModal({
      component: {
        ...component,
        id,
        passProps: {
          params,
          onDismiss: () => Navigation.dismissModal(id)
        }
      }
    })
  }

  onOpenGallery = () =>
    this.openModal('gallery', {
      name: GalleryScreen.screenName
    })

  onOpenTour = () =>
    this.openModal('tour', {
      name: TourScreen.screenName
    })

  onSelectListing = (id) =>
    Navigation.push(this.props.componentId, {
      component: {
        name: ListingScreen.screenName,
        passProps: {params: {id}}
      }
    })

  renderRelatedListings() {
    const {relatedListings} = this.props
    return <Feed data={relatedListings} onSelect={this.onSelectListing} />
  }

  renderFooter() {
    const {loading, params} = this.props
    if (loading) return null
    return (
      <Button
        color="green"
        onPress={this.navigateTo({
          name: null
        })}
      >
        {params.editing ? 'Editar' : 'Marcar visita'}
      </Button>
    )
  }

  render() {
    const {loading, data} = this.props

    return (
      <Shell>
        <Body scroll style={{flex: 1}}>
          {!loading && (
            <Listing
              {...data}
              onOpenGallery={this.onOpenGallery}
              onOpenTour={this.onOpenTour}
            />
          )}
          {!loading && (
            <Section title="Veja Também">
              {this.renderRelatedListings()}
            </Section>
          )}
        </Body>
        <Footer>{this.renderFooter()}</Footer>
      </Shell>
    )
  }
}

export default composeWithRef(
  connect(
    (state, {params}) => ({
      data: getData(state, params) || {},
      loading: isLoading(state, params),
      relatedListings: getRelatedListings(state, params)
    }),
    {loadListing, loadRelatedListings}
  )
)(ListingScreen)
