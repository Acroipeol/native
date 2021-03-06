import {View, TouchableOpacity} from 'react-native'
import {compose} from 'recompose'

import {withFavoriteMutation} from '@/graphql/containers'
import Text from '@/components/shared/Text'
import Price from '@/components/shared/Price'
import Image from '@/components/listings/Image'
import LikeIcon from '@/components/listings/LikeIcon'
import {touchable} from '@/components/shared/Touchable'
import $styles from './styles'

function MapListingCard({
  styles,
  style,
  width,
  images,
  price,
  address,
  favorite,
  onFavorite,
  ...props
}) {
  const image = images[0] || {}
  const padding = 15
  const imageSize = {
    width: width - padding * 2,
    height: width * 0.64 - padding * 2
  }
  return (
    <View style={styles.container.concat(style, {width})} {...props}>
      <View style={styles.thumbnail}>
        <TouchableOpacity
          accessible
          accessibilityLabel={
            favorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'
          }
          testID="favorite_button"
          style={styles.iconButton}
          onPress={onFavorite}
          hitSlop={{
            top: 15,
            bottom: 15,
            left: 15,
            right: 15
          }}
        >
          <LikeIcon contrast active={favorite} />
        </TouchableOpacity>
        <Image thumbnail style={styles.image} {...image} {...imageSize} />
      </View>
      <View style={styles.body}>
        <View style={styles.row}>
          <Text style={styles.street} numberOfLines={1} ellipsizeMode="tail">
            {address.street}
          </Text>
          <Price styles={{text: styles.priceText}}>{price}</Price>
        </View>
      </View>
    </View>
  )
}

export default compose(withFavoriteMutation, touchable, $styles.inject())(
  MapListingCard
)
