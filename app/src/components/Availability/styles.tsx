import { StyleSheet } from 'react-native'
import { colours } from '../../config/themes'

const styles = StyleSheet.create({
  availability: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  stockicon: {
    height: 20,
    width: 20,
    borderRadius: 50,
    marginRight: 4,
  },
  instock: {
    backgroundColor: colours.darkGreenPrimary,
  },
  oos: {
    backgroundColor: colours.pomegranatePrimaryDark,
  },
})

export default styles
