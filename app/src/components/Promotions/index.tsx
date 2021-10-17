import React, { FC } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

interface IPromotionsProps {
  promotions: string[]
}

type IProps = IPromotionsProps

const Promotions: FC<IProps> = ({ promotions }) => (
  <View style={styles.promotions}>
    {promotions.map((promotion, index) => (
      <Text style={styles.promotion} key={`${promotion}-${index}`}>
        {promotion}
      </Text>
    ))}
  </View>
)

export default Promotions
