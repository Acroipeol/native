import {Component} from 'react'

import Shell from '@/containers/shared/Shell'
import SignUp from '@/containers/auth/SignUp'

export default class SignUpScreen extends Component {
  onSuccess = ({name}) => {
    const {navigation} = this.props
    const firstName = name.split(' ')[0]
    navigation.replace('success', {
      title: 'Cadastro concluído',
      message: `${firstName}, enviamos um e-mail para você confirmar seu cadastro.`
    })
  }

  render() {
    return (
      <Shell scroll title="Cadastre-se">
        <SignUp onSuccess={this.onSuccess} />
      </Shell>
    )
  }
}

export const screen = SignUpScreen
