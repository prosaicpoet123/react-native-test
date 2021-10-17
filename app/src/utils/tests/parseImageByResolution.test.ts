import { parseImagesByResolution } from '../parseImageByResolution'

describe('parseImagesByResolution()', () => {
  it('returns the correct array of images', () => {
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

    const parsedImages = parseImagesByResolution(images, 180)
    expect(parsedImages).toEqual([
      {
        path: '//images.hollandandbarrettimages.co.uk/productimages/HB/180/048774_A.jpg',
        resolution: 180,
      },
    ])
  })
})
