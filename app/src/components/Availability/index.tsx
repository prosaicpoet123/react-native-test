import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { IProduct } from '../../@Types/product'
import styles from './styles'

interface IAvailabilityProps {
  stock: IProduct['stock_status']
}

type IProps = IAvailabilityProps

const Availability: FC<IProps> = ({ stock }) => (
  <View style={styles.availability}>
    <View
      style={[
        styles.stockicon,
        stock === 'INSTOCK' ? styles.instock : styles.oos,
      ]}
    />
    <Text>{stock.toLowerCase()}</Text>
  </View>
)

export default Availability
