import React, { FC } from 'react'
import { RootStackParamList } from '../../@Types/navigation'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import ProductCard from '../ProductCard'

type IProps = NativeStackScreenProps<RootStackParamList, 'Product Details'>

const ProductDetails: FC<IProps> = ({ route }) => {
  const { product } = route.params

  return <ProductCard product={product} resolution="370" isDetails />
}

export default ProductDetails
