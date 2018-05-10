import {StyleSheet} from 'react-native'

import * as colors from '@/assets/colors'

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    paddingLeft: 20
  },
  title: {
    flex: 1,
    display: 'flex',
    paddingLeft: 20,
    fontSize: 20,
    color: colors.gray.dark
  },
  resetButton: {
    fontSize: 14,
    color: colors.blue.medium,
    fontWeight: '500',
    marginRight: 15
  },
  button: {
    marginLeft: 10
  }
})

export const iconColor = colors.gray.mediumDark
