import _ from 'lodash'
import {PureComponent} from 'react'
import {View, Animated} from 'react-native'

import Text from '@/components/shared/Text'
import Icon from '@/components/shared/Icon'
import styles from './styles'

export default class GalleryPagination extends PureComponent {
  static defaultProps = {
    maxLength: 11
  }

  state = {
    length: undefined,
    scale: []
  }

  get cappedPosition() {
    const {currentPosition, totalPages} = this.props
    const {length} = this.state
    const {max, min, floor} = Math
    return max(
      length - (totalPages - currentPosition),
      min(currentPosition, floor(length / 2))
    )
  }

  calculateLayout() {
    const {length} = this.state
    const position = this.cappedPosition
    let layout = []
    for (let i = 0; i < length; ++i)
      layout[i] = 1 / (Math.abs(position - i) + 1)
    return layout
  }

  updateLayout(animate = true) {
    this.calculateLayout().forEach((scale, index) => {
      const value = this.state.scale[index]
      value.stopAnimation()
      if (!animate) value.setValue(scale)
      else
        Animated.timing(value, {
          toValue: scale,
          duration: 200,
          useNativeDriver: true
        }).start()
    })
  }

  static getDerivedStateFromProps({totalPages, maxLength}, state) {
    const nextState = {...state, length: Math.min(totalPages, maxLength)}
    if (state.length !== nextState.length)
      for (let i = 0; i < nextState.length; ++i)
        nextState.scale[i] = new Animated.Value(0)
    return nextState
  }

  componentDidMount() {
    this.updateLayout(false)
  }

  componentDidUpdate(prev) {
    if (prev.currentPosition !== this.props.currentPosition) this.updateLayout()
  }

  renderIcon = (index) => {
    const scale = this.state.scale[index]
    const value = scale.interpolate({
      inputRange: [0, 1],
      outputRange: [0.3, 1]
    })
    const style = {opacity: value, transform: [{scale: value}]}
    return (
      <Animated.View key={index} style={[styles.pageIcon, style]}>
        <Icon type="solid" name="circle" color="white" size={10} />
      </Animated.View>
    )
  }

  render() {
    const {displayText, currentPosition, totalPages} = this.props
    const {length} = this.state
    return (
      <View style={styles.container}>
        {displayText && (
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              {currentPosition} / {totalPages}
            </Text>
          </View>
        )}
        {_.times(length, this.renderIcon)}
      </View>
    )
  }
}
