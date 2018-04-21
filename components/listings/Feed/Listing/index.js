import _ from 'lodash/fp'
import {FlatList, View} from 'react-native'

import Text from '@/components/shared/Text'
import Card from '@/components/listings/Card/Listing'
import Empty from '../Empty'
import styles from './styles'

const keyExtractor = _.flow(_.get('id'), _.toString)

const Header = () => (
  <View style={styles.container}>
    <Text style={styles.text}>
      Encontre o imóvel perfeito para você no Rio de Janeiro
    </Text>
  </View>
)

const createHandler = (fun, ...args) => fun && (() => fun(...args))

export default function ListingFeed({onSelect, loading, pagination, ...props}) {
  return (
    <FlatList
      {...props}
      pagination={pagination}
      ListEmptyComponent={loading ? null : Empty}
      ListHeaderComponent={pagination.totalCount ? Header : null}
      keyExtractor={keyExtractor}
      renderItem={({item}) => (
        <Card onPress={createHandler(onSelect, item.id)} {...item} />
      )}
    />
  )
}
