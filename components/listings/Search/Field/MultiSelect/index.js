import {Component} from 'react'
import {TouchableOpacity, View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Text from '@/components/shared/Text'
import Options from './Options'
import Button from './Button'
import styles from './styles'

export default class MultiSelectField extends Component {
  static Options = Options

  static defaultProps = {
    value: []
  }

  onSelect = (option) => {
    const {onChange, value} = this.props
    const newValue = Array.from(value)
    const index = this.props.value.findIndex((val) => val === option)
    newValue.splice(index, 1)
    onChange(newValue)
  }

  renderOption = (value) => {
    return <Button label={value} onPress={() => this.onSelect(value)} />
  }

  render() {
    const {title, value, onPress} = this.props

    return (
      <View>
        {value.length && (
          <View style={styles.options}>{value.map(this.renderOption)}</View>
        )}
        <TouchableOpacity onPress={onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
            <Icon style={styles.buttonIcon} name="chevron-right" />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
