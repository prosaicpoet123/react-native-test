import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { IProduct } from '../../@Types/product'
import { Rating } from 'react-native-ratings'
import styles from './styles'

interface IRatings {
  count: IProduct['review_count']
  rating: IProduct['rating']
}

type IProps = IRatings

const Ratings: FC<IProps> = ({ rating, count }) => (
  <View style={styles.ratings}>
    <Rating startingValue={rating} readonly imageSize={20} />
    <Text> ({count})</Text>
  </View>
)

export default Ratings
