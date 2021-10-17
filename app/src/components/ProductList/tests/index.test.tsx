import React from 'react'
import renderer, { act } from 'react-test-renderer'
import ProductList from '..'

describe('<ProductList />', () => {
  it('renders correctly', async () => {
    const fakeProducts = {
      products: [
        {
          id: '1',
          name: 'Fake Product 1',
        },
        {
          id: '2',
          name: 'Fake Product 2',
        },
        {
          id: '3',
          name: 'Fake Product 3',
        },
      ],
    }

    global.fetch = jest.fn().mockImplementationOnce(() => {
      return new Promise((resolve) => {
        resolve({
          ok: true,
          json: () => fakeProducts,
        })
      })
    })

    let tree

    await act(async () => {
      tree = renderer.create(<ProductList />).toJSON()
    })

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(tree).toMatchSnapshot()
  })
})
