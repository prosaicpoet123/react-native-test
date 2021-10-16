import { StyleSheet } from 'react-native'
import { colours, fontSizes } from '../../config/themes'

const styles = StyleSheet.create({
  productCard: {
    borderWidth: 1,
    borderColor: colours.grey4,
    padding: 4,
    minHeight: 300,
    backgroundColor: colours.white,
  },
  productCardLarge: {
    height: '100%',
  },
  productImage: {
    width: '100%',
    height: 180,
  },
  productImageLarge: {
    height: 370,
  },
  productInfo: {
    padding: 4,
  },
  productInfoItem: {
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
  },
  titleLarge: {
    fontSize: fontSizes.large,
  },
  titleSmall: {
    fontSize: fontSizes.small,
  },
})

export default styles
