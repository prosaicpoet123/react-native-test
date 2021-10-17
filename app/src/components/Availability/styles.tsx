import { StyleSheet } from 'react-native'
import { colours } from '../../config/themes'

const styles = StyleSheet.create({
  availability: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    color: colours.white,
  },
  instock: {
    backgroundColor: colours.darkGreenPrimary,
  },
  oos: {
    backgroundColor: colours.pomegranatePrimaryDark,
  },
  text: {
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 5,
    overflow: 'hidden',
    color: colours.white,
  },
})

export default styles
