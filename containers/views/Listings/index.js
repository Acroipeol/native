import Shell from '@/containers/shared/Shell'
import Search from '@/containers/listings/Search'
import Listings from '@/containers/listings/Feed'

export default function ListingsScreen(props) {
  return (
    <Shell header={<Search {...props} />}>
      <Listings type="search" params={props.navigation.state.params} />
    </Shell>
  )
}

export const screen = ListingsScreen

export const navigationOptions = () => ({
  title: 'EmCasa | Pesquisa',
  header: null
})
