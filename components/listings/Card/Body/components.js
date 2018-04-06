import {View} from 'react-native'

import Text from '@/components/shared/Text'
import PriceComponent from '@/components/shared/Price'

export const Price = ({styles, price}) => (
  <PriceComponent styles={{text: styles.priceText}} size={24}>
    {price}
  </PriceComponent>
)

export const Street = ({styles, address}) => (
  <Text style={styles.street} numberOfLines={1} ellipsizeMode="tail">
    {address.street}
  </Text>
)

export const Neighborhood = ({styles, address}) => (
  <Text style={styles.neighborhood}>{address.neighborhood.toUpperCase()}</Text>
)

export const Header = (props) => (
  <View style={props.styles.header}>
    <Street {...props} />
    <Neighborhood {...props} />
  </View>
)
