import _ from 'lodash'
import {PureComponent} from 'react'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {ApolloProvider} from 'react-apollo'
import {Navigation} from 'react-native-navigation'
import {ThemeProvider} from 'styled-components'

import defaultOptions from '@/screens/options'
import theme from '@/lib/theme'
import client from '@/lib/client'
import ScreenDelegator from './ScreenDelegator'

export default class AppProvider extends PureComponent {
  state = {
    ready: false
  }

  async componentDidMount() {
    await client.ready
    this.setState({ready: true})
  }

  render() {
    const {children} = this.props
    if (!this.state.ready) return null
    return (
      <Provider store={client.store}>
        <PersistGate persistor={client.store.persistor}>
          <ThemeProvider theme={theme}>
            <ApolloProvider client={client.graphql}>{children}</ApolloProvider>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    )
  }
}

export const withProvider = (Target) =>
  class extends ScreenDelegator(Target) {
    static defaultProps = {params: {}}

    static displayName = `withProvider(${Target.displayName || Target.name})`

    static options = _.defaultsDeep(Target.options || {}, defaultOptions)

    constructor(props) {
      super(props)
      Navigation.events().bindComponent(this)
    }

    render() {
      return (
        <AppProvider>
          <Target ref={this.screen} {...this.props} />
        </AppProvider>
      )
    }
  }
