import React, { FC, useState } from 'react'
import { FlatList, Image, TouchableOpacity, View } from 'react-native'
import { IProduct, IProductImagesList } from '../../@Types/product'
import Promotions from '../Promotions'
import { parseImagesByResolution } from '../../utils/parseImageByResolution'
import styles from './styles'

interface IProductImage {
  id: string
  images: IProductImagesList[]
  resolution?: number
  showThumbnails?: boolean
  promotions?: IProduct['promotions']
}

type IProps = IProductImage

const ProductImage: FC<IProps> = ({
  id,
  images,
  showThumbnails,
  promotions,
  resolution = 180,
}) => {
  const [currentImage, setCurrentImage] = useState('A')
  const imagePositions = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
  const imageSrc = `https://images.hollandandbarrettimages.co.uk/productimages/HB/${resolution}/${id}_${currentImage}.jpg`

  const thumbnails = showThumbnails ? parseImagesByResolution(images, 70) : []

  return (
    <View>
      <View style={styles.imageWrapper}>
        {!!promotions?.length && (
          <View style={styles.promotionsWrapper}>
            <Promotions
              promotions={promotions.map((promotion) => promotion.text)}
            />
          </View>
        )}
        <Image
          style={[styles.productImage, { height: resolution }]}
          source={{
            uri: imageSrc,
          }}
        />
      </View>
      {!!showThumbnails && (
        <View style={styles.thumbnails}>
          <FlatList
            horizontal
            data={thumbnails}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={[
                  currentImage === imagePositions[index] &&
                    styles.selectedThumbnail,
                ]}
                onPress={() => setCurrentImage(imagePositions[index])}
                disabled={currentImage === imagePositions[index]}>
                <Image
                  style={styles.thumbnail}
                  source={{
                    uri: `https:${item?.path}`,
                  }}
                />
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => imagePositions[index]}
          />
        </View>
      )}
    </View>
  )
}

export default ProductImage
