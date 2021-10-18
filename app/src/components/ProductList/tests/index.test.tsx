import React from 'react'
import renderer from 'react-test-renderer'
import { ProductListUI as ProductList } from '..'

describe('<ProductList />', () => {
  it('renders correctly', async () => {
    const products = [
      {
        id: '1',
        name: 'Fake Product 1',
        images: [],
        price: 20,
        promotions: [],
        rating: 1,
        review_count: 30,
        stock_status: 'INSTOCK',
      },
      {
        id: '2',
        name: 'Fake Product 2',
        images: [],
        price: 20,
        promotions: [],
        rating: 1,
        review_count: 30,
        stock_status: 'OUTOFSTOCK',
      },
      {
        id: '3',
        name: 'Fake Product 3',
        images: [],
        price: 20,
        promotions: [],
        rating: 1,
        review_count: 30,
        stock_status: 'LOWSTOCK',
      },
    ]

    const tree = renderer.create(<ProductList products={products} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
