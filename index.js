import 'moment/locale/pt-br'
import moment from 'moment'
import {YellowBox} from 'react-native'
import AccountKit from 'react-native-facebook-account-kit'

import initNavigation from '@/screens'

AccountKit.configure({
  responseType: 'token',
  // defaultCountry: 'BR',
  receiveSMS: true
})

// Temporary fix for
// https://github.com/facebook/react-native/issues/17504
YellowBox.ignoreWarnings([
  'Class RCTCxxModule was not exported',
  'Module RCTImageLoader requires main queue setup',
  'Module ReactNativeKeyboardManager requires main queue setup',
  'Warning: isMounted(...) is deprecated',
  'Remote debugger'
])

moment.locale('pt-br')

initNavigation()
