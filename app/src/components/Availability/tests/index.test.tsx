import React from 'react'
import renderer from 'react-test-renderer'
import Availability from '../'

describe('<Availability />', () => {
  it('renders correctly', () => {
    const stock_status = 'INSTOCK'
    const tree = renderer.create(<Availability stock={stock_status} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
