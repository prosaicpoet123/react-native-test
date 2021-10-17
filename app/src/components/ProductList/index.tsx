import React, { FC, useEffect, useState, memo } from 'react'
import { IProduct } from '../../@Types/product'
import { RootStackParamList } from '../../@Types/navigation'
import { ActivityIndicator, FlatList, Platform, Text, View } from 'react-native'
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'
import ProductCard from '../ProductCard'
import styles from './styles'

interface IProductListItem {
  product: IProduct
  navigation?: NativeStackNavigationProp<RootStackParamList, 'Product List'>
}

type IProductListItemProps = IProductListItem

const ProductListItem: FC<IProductListItemProps> = ({
  product,
  navigation,
}) => (
  <View style={styles.item}>
    <ProductCard product={product} navigation={navigation} />
  </View>
)

const MemoizedItem = memo(ProductListItem)
interface IProductListUI {
  products: IProduct[]
  isError?: boolean
  isLoading?: boolean
  onEndReached?: () => void
  navigation?: NativeStackNavigationProp<RootStackParamList, 'Product List'>
}

type IProductListUIProps = IProductListUI

const ProductListUI: FC<IProductListUIProps> = ({
  products,
  navigation,
  isError,
  isLoading,
  onEndReached,
}) => {
  if (isError) return <Text>Oops! Something Went Wrong...</Text>

  const renderItem = ({ item }: { item: IProduct }) => (
    <MemoizedItem product={item} navigation={navigation} />
  )

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
            data={products}
            renderItem={renderItem}
            initialNumToRender={25}
            maxToRenderPerBatch={25}
            onEndReachedThreshold={2}
            onEndReached={onEndReached}
          />
        </View>
      )}
    </View>
  )
}

type IProductListProps = NativeStackScreenProps<
  RootStackParamList,
  'Product List'
>

const ProductList: FC<IProductListProps> = ({ navigation }) => {
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

  return (
    <ProductListUI
      navigation={navigation}
      products={data}
      isError={isError}
      isLoading={isLoading}
      onEndReached={() => setOffset(offset + 1)}
    />
  )
}

export { ProductList as default, ProductListUI }
