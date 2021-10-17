import React from 'react'
import renderer from 'react-test-renderer'
import Promotions from '../'

describe('<Promotions />', () => {
  it('renders correctly', () => {
    const promotions = ['promotion 1', 'promotion 2']
    const tree = renderer
      .create(<Promotions promotions={promotions} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
