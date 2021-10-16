import React, { FC } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { IProduct } from '../../@Types/product'
import Availability from '../Availability'
import Promotions from '../Promotions'
import Ratings from '../Ratings'
import styles from './styles'

interface IProductCardProps {
  product: IProduct
  resolution?: string
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
  const { id, name, price, stock_status, rating, review_count, promotions } =
    product
  const imageSrc = `https://images.hollandandbarrettimages.co.uk/productimages/HB/${resolution}/${id}_A.jpg`

  return (
    <View style={[styles.productCard, isDetails && styles.productCardLarge]}>
      <TouchableOpacity
        onPress={() => onPress && onPress(product)}
        disabled={isDetails}>
        <Image
          style={[styles.productImage, isDetails && styles.productImageLarge]}
          source={{
            uri: imageSrc,
          }}
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
              {!!promotions?.length && <Promotions promotions={promotions} />}
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
      </TouchableOpacity>
    </View>
  )
}

export default ProductCard
