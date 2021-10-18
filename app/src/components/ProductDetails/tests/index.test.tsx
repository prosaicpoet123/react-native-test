import React from 'react'
import renderer from 'react-test-renderer'
import ProductDetails from '../'

describe('<ProductDetails />', () => {
  it('renders correctly', () => {
    const route = {
      name: 'Product Details',
      key: 'Product Details',
      params: {
        product: {
          id: '000001',
          name: 'Product Name',
          images: [],
        },
      },
    }
    const tree = renderer.create(<ProductDetails route={route} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
