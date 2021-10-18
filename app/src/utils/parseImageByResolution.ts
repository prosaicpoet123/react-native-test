import { IProductImageItem, IProductImagesList } from '../@Types/product'

const parseImagesByResolution = (
  images: IProductImagesList[],
  resolution: number,
): (IProductImageItem | undefined)[] =>
  images
    .map((image) => image.list.find((item) => item.resolution === resolution))
    .filter((item) => !!item)

export { parseImagesByResolution }
