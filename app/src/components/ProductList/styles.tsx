import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginLeft: 8,
    marginRight: 8,
  },
  item: {
    width: '50%',
    padding: 3,
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
})

export default styles
