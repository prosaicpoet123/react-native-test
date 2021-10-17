import React, { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { IProduct } from '../../@Types/product'
import Availability from '../Availability'
import ProductImage from '../ProductImage'
import Ratings from '../Ratings'
import styles from './styles'

interface IProductCardProps {
  product: IProduct
  resolution?: number
  isDetails?: boolean
  onPress?: (x: IProduct) => void
}

type IProps = IProductCardProps

const ProductCard: FC<IProps> = ({
  product,
  resolution = 180,
  isDetails,
  onPress,
}) => {
  const {
    id,
    name,
    price,
    stock_status,
    rating,
    review_count,
    promotions,
    images,
  } = product

  return (
    <TouchableOpacity
      onPress={() => onPress && onPress(product)}
      disabled={isDetails}>
      <View style={[styles.productCard, isDetails && styles.productCardLarge]}>
        <ProductImage
          images={images}
          id={id}
          promotions={isDetails ? promotions : []}
          showThumbnails={isDetails}
          resolution={resolution}
        />
        <View style={styles.productInfo}>
          {!!name && (
            <Text
              style={[
                styles.productInfoItem,
                styles.title,
                isDetails ? styles.titleLarge : styles.titleSmall,
              ]}>
              {name}
            </Text>
          )}
          {!!isDetails && (
            <>
              {!!price && (
                <Text style={styles.productInfoItem}>{`£${price}`}</Text>
              )}
              {!!stock_status && (
                <View style={styles.productInfoItem}>
                  <Availability stock={stock_status} />
                </View>
              )}
              {!!rating && (
                <View style={styles.productInfoItem}>
                  <Ratings rating={rating} count={review_count} />
                </View>
              )}
            </>
          )}
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ProductCard
