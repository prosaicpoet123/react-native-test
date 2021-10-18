import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { IProduct } from '../../@Types/product'
import { parseStockStatus } from '../../utils/parseStockStatus'
import styles from './styles'

interface IAvailabilityProps {
  stock: IProduct['stock_status']
}

type IProps = IAvailabilityProps

const Availability: FC<IProps> = ({ stock }) => (
  <View style={styles.availability}>
    <Text
      style={[styles.text, stock === 'INSTOCK' ? styles.instock : styles.oos]}>
      {parseStockStatus(stock)}
    </Text>
  </View>
)

export default Availability
