import React from 'react'
import renderer from 'react-test-renderer'
import ProductImage from '../'

const images = [
  {
    list: [
      {
        path: '//images.hollandandbarrettimages.co.uk/productimages/HB/120/048774_A.jpg',
        resolution: 120,
      },
      {
        path: '//images.hollandandbarrettimages.co.uk/productimages/HB/180/048774_A.jpg',
        resolution: 180,
      },
      {
        path: '//images.hollandandbarrettimages.co.uk/productimages/HB/252/048774_A.jpg',
        resolution: 252,
      },
    ],
    group: '1',
  },
  {
    list: [
      {
        path: '//images.hollandandbarrettimages.co.uk/productimages/HB/370/048774_A.jpg',
        resolution: 370,
      },
      {
        path: '//images.hollandandbarrettimages.co.uk/productimages/HB/70/048774_A.jpg',
        resolution: 70,
      },
      {
        path: '//images.hollandandbarrettimages.co.uk/productimages/HB/724/048774_A.jpg',
        resolution: 724,
      },
    ],
    group: '2',
  },
  {
    list: [
      {
        path: '//images.hollandandbarrettimages.co.uk/productimages/HB/370/048774_B.jpg',
        resolution: 370,
      },
      {
        path: '//images.hollandandbarrettimages.co.uk/productimages/HB/70/048774_B.jpg',
        resolution: 70,
      },
      {
        path: '//images.hollandandbarrettimages.co.uk/productimages/HB/724/048774_B.jpg',
        resolution: 724,
      },
    ],
    group: '3',
  },
]

describe('<ProductImage />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ProductImage id="048774" images={images} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly with thumbnails', () => {
    const tree = renderer
      .create(<ProductImage id="048774" images={images} showThumbnails />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
