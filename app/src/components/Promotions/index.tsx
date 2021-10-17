import React, { FC } from 'react'
import { FlatList, Text, View } from 'react-native'
import styles from './styles'

interface IPromotionsProps {
  promotions: string[]
}

type IProps = IPromotionsProps

const Promotions: FC<IProps> = ({ promotions }) => (
  <View style={styles.promotions}>
    <FlatList
      data={promotions}
      renderItem={({ item }) => <Text style={styles.promotion}>{item}</Text>}
      keyExtractor={(item, index) => `${item}-${index}`}
    />
  </View>
)

export default Promotions
