interface IPrice {
  listPrice: number
  salePrice: number
}

interface IProductImageItem {
  path: string
  resolution: number
}

interface IProductImagesList {
  list: IProductImageItem[]
}

interface IPromotion {
  text: string
}

interface IProduct {
  id: string
  images: IProductImagesList[]
  name: string
  price: number
  promotions: IPromotion[]
  rating: number
  review_count: number
  stock_status: string
}

export { IPrice, IProduct, IProductImagesList, IProductImageItem }
