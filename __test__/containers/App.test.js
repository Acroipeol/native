import renderer from 'react-test-renderer'

jest.mock('@/redux')

import Provider from '@/containers/Provider'
import App from '@/containers/App'

describe('containers/App', () => {
  it('renders without crashing', () => {
    const node = renderer.create(
      <Provider>
        <App />
      </Provider>
    )
    expect(node.getInstance()).toBeTruthy()
  })
})
