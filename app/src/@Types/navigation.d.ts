import { IProduct } from './product'

type RootStackParamList = {
  ['Product List']: undefined
  ['Product Details']: { product: IProduct }
}

export { RootStackParamList }
