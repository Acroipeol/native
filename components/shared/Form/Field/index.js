import React from 'react'
import {PureComponent} from 'react'
import {View, KeyboardAvoidingView} from 'react-native'

import Text from '@/components/shared/Text'
import {field as baseField} from './Provider'
import styles from './styles'

@baseField
export default class FieldView extends PureComponent {
  renderInput() {
    const {children, onValidate, ...props} = this.props
    return React.cloneElement(React.Children.only(children), {
      ...props,
      onBlur: onValidate
    })
  }

  render() {
    const {valid, errors} = this.props

    return (
      <KeyboardAvoidingView>
        <View style={styles.container}>
          {this.renderInput()}
          {!valid && (
            <View style={styles.errors}>
              {errors.map((message, i) => (
                <Text key={i} style={styles.text}>
                  {message}
                </Text>
              ))}
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export const field = (options) => (Target) => (props) => (
  <FieldView {...props} {...options}>
    <Target {...props} />
  </FieldView>
)
