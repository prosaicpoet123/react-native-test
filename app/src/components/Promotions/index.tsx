import React, { FC } from 'react'
import { IProduct } from '../../@Types/product'
import { Text } from 'react-native'
import styles from './styles'

interface IPromotionsProps {
  promotions: IProduct['promotions']
}

type IProps = IPromotionsProps

const Promotions: FC<IProps> = ({ promotions }) => (
  <Text style={styles.promotions}>{promotions.join(', ').trim()}</Text>
)

export default Promotions
