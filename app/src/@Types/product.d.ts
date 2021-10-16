interface IPrice {
  listPrice: number
  salePrice: number
}

interface IProductImageItem {
  pathname: string
  resolution: string
}

interface IProductImagesList {
  list: IProductImageItem[]
}

interface IProduct {
  id: string
  images: IProductImagesList[]
  name: string
  price: number
  promotions: string[]
  rating: number
  review_count: number
  stock_status: string
}

export { IPrice, IProduct, IProductImagesList, IProductImageItem }
