import {View} from 'react-native'

import Text from '@/components/shared/Price'
import Price from '@/components/shared/Text'
import Image from '@/components/listings/Image'
import touchable from '../touchable'
import $styles from './styles'

function MapListingCard({
  styles,
  style,
  width,
  images,
  price,
  address,
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

export default touchable($styles.inject()(MapListingCard))
