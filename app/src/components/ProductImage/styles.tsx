import { StyleSheet } from 'react-native'
import { colours } from '../../config/themes'

const styles = StyleSheet.create({
  productImage: {
    width: '100%',
    height: 180,
  },
  thumbnails: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginVertical: 8,
  },
  thumbnail: {
    height: 70,
    width: 70,
  },
  selectedThumbnail: {
    borderColor: colours.darkGreenPrimary,
    borderWidth: 1,
  },
  imageWrapper: {
    position: 'relative',
  },
  promotionsWrapper: {
    position: 'absolute',
    top: 4,
    left: 4,
    zIndex: 1,
  },
})

export default styles
