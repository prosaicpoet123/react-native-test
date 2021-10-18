import React, { FC } from 'react'
import { RootStackParamList } from '../../@Types/navigation'
import { ScrollView } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import ProductCard from '../ProductCard'
import styles from './styles'

type IProps = NativeStackScreenProps<RootStackParamList, 'Product Details'>

const ProductDetails: FC<IProps> = ({ route }) => {
  const { product } = route.params

  return (
    <ScrollView style={styles.container}>
      <ProductCard product={product} resolution={370} isDetails />
    </ScrollView>
  )
}

export default ProductDetails
