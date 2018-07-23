import {View} from 'react-native'

import * as colors from '@/assets/colors'
import Button, {ButtonLabel} from '../FormButton'

const green = {backgroundColor: colors.green.medium}

export default function AccountMenu({
  listingsCount,
  unreadMessages,
  onEditProfile,
  onViewListings,
  onViewMessenger,
  onSignOut
}) {
  return (
    <View>
      <Button onPress={onEditProfile} icon="chevron-right">
        Editar perfil
      </Button>
      <Button
        onPress={onViewListings}
        icon="chevron-right"
        label={listingsCount && <ButtonLabel>{listingsCount}</ButtonLabel>}
      >
        Meus imóveis
      </Button>
      <Button
        onPress={onViewMessenger}
        icon="chevron-right"
        label={
          unreadMessages && (
            <ButtonLabel style={green}>{unreadMessages}</ButtonLabel>
          )
        }
      >
        Mensagens
      </Button>
      <Button onPress={onSignOut} icon="sign-out">
        Sair
      </Button>
    </View>
  )
}
