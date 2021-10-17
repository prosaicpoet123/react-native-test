import { StyleSheet } from 'react-native'
import { colours } from '../../config/themes'

const styles = StyleSheet.create({
  promotions: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  promotion: {
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 5,
    overflow: 'hidden',
    color: colours.white,
    backgroundColor: colours.pomegranatePrimary,
  },
})

export default styles
