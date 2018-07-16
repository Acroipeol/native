import {HttpLink} from 'apollo-link-http'

import {APOLLO_ENGINE_URL} from '@/lib/config'

export default () =>
  new HttpLink({
    uri: APOLLO_ENGINE_URL,
    credentials: 'same-origin'
  })
