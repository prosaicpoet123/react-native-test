import React from 'react'
import renderer from 'react-test-renderer'
import ProductCard from '../'

describe('ProductCard', () => {
  it('renders correctly', () => {
    const product = {
      id: '000001',
      name: 'Example Product',
      price: 20,
    }
    const tree = renderer.create(<ProductCard product={product} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly as details', () => {
    const product = {
      id: '000001',
      name: 'Example Product',
      price: 20,
    }
    const tree = renderer
      .create(<ProductCard product={product} isDetails />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
