import {PureComponent} from 'react'
import {
  View,
  ScrollView,
  ActivityIndicator,
  Platform,
  StyleSheet,
  Dimensions
} from 'react-native'
import KeyboardManager from 'react-native-keyboard-manager'

import * as colors from '@/assets/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 0
  },
  overlay: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff20'
  },
  statusBar: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15
  },
  body: {
    flex: 1,
    zIndex: 0
  }
})

export default class Body extends PureComponent {
  state = {
    children: undefined,
    layout: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
    }
  }

  static getDerivedStateFromProps({children, loading}) {
    if (!loading) return {children}
    return null
  }

  reloadKeyboardLayout = Platform.OS === 'ios'
    ? () => KeyboardManager.reloadLayoutIfNeeded()
    : () => null

  onLayout = ({nativeEvent: {layout}}) => {
    this.reloadKeyboardLayout()
    this.setState({
      layout: {
        width: layout.width,
        height: layout.height
      }
    })
  }

  renderOverlay() {
    const {children, layout} = this.state
    return (
      <View style={[layout, children ? styles.statusBar : styles.overlay]}>
        <ActivityIndicator
          size={children ? 'small' : 'large'}
          color={colors.blue.medium}
        />
      </View>
    )
  }

  render() {
    const {style, scroll, loading, testID} = this.props
    const {children} = this.state
    const ViewComponent = scroll ? ScrollView : View

    return (
      <ViewComponent
        testID={testID}
        style={[styles.container, style]}
        onLayout={this.onLayout}
      >
        {loading && this.renderOverlay()}
        <View style={styles.body}>{children}</View>
      </ViewComponent>
    )
  }
}