import {Platform} from 'react-native'

import StyleSheet from '@/assets/StyleSheet'
import * as colors from '@/assets/colors'
import {padding} from '@/assets/styles'

export default StyleSheet({
  container: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.gray.light,
    ...padding(Platform.OS === 'ios' ? 14 : 3, 14),
    ':value': {
      borderColor: colors.blue.pastel
    },
    ':invalid': {
      borderColor: colors.red.medium
    },
    ':multiline': {
      paddingTop: 10
    }
  },
  input: {
    fontSize: 18,
    color: colors.gray.dark
  }
})
