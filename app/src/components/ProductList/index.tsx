import React, { FC, useEffect, useState } from 'react'
import { IProduct } from '../../@Types/product'
import { RootStackParamList } from '../../@Types/navigation'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import ProductCard from '../ProductCard'
import styles from './styles'

type IProps = NativeStackScreenProps<RootStackParamList, 'Product List'>

const ProductList: FC<IProps> = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)
  const [data, setData] = useState([] as IProduct[])
  const [offset, setOffset] = useState(1)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/products/all?page=${offset}`,
        )
        const json = await response.json()
        setData((d) => [...d, ...json.products])
      } catch (error) {
        console.error(error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    getProducts()
  }, [offset])

  if (isError) return <Text>Oops! Something Went Wrong...</Text>

  return (
    <View>
      {isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View style={styles.container}>
          <FlatList
            numColumns={2}
            horizontal={false}
            keyExtractor={(item) => item.id}
            data={data}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <ProductCard
                  product={item}
                  onPress={(product: IProduct) =>
                    navigation.navigate('Product Details', { product })
                  }
                />
              </View>
            )}
            onEndReachedThreshold={2}
            onEndReached={() => setOffset(offset + 1)}
          />
        </View>
      )}
    </View>
  )
}

export default ProductList
