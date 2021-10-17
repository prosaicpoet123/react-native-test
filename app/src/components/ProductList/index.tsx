import React, { FC, useEffect, useState } from 'react'
import { IProduct } from '../../@Types/product'
import { RootStackParamList } from '../../@Types/navigation'
import { ActivityIndicator, FlatList, Platform, Text, View } from 'react-native'
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
        // hit an issue with data fetching on Android emulator, this issue: https://stackoverflow.com/questions/33704130/react-native-android-fetch-failing-on-connection-to-local-api
        // localhost works fine on IOS, but for Android development I had to switch localhost to 10.0.2.2, for the purposes of local development this was okay
        // almost certain there is a better fix
        const response = await fetch(
          `http://${
            Platform.OS === 'ios' ? 'localhost' : '10.0.2.2'
          }:4000/products/all?page=${offset}`,
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
            keyExtractor={(item, index) => `${item.id}-${index}`}
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
            onEndReachedThreshold={20}
            onEndReached={() => setOffset(offset + 1)}
          />
        </View>
      )}
    </View>
  )
}

export default ProductList
