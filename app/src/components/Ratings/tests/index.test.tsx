import React from 'react'
import renderer from 'react-test-renderer'
import Ratings from '../'

describe('<Ratings />', () => {
  it('renders correctly', () => {
    const ratings = { rating: 3.5, count: 20 }
    const tree = renderer.create(<Ratings {...ratings} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
