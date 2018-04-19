import StyleSheet from '@/assets/StyleSheet'
import * as colors from '@/assets/colors'
import {elevation} from '@/assets/styles'

const SIZE = 30

export default StyleSheet({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZE / 2,
    width: SIZE,
    height: SIZE,
    backgroundColor: colors.blue.medium,
    ...elevation(2)
  },
  text: {
    color: 'white',
    fontWeight: '600'
  }
})
