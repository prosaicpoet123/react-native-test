import express from 'express'
import products from '../db/data/products.json'
import { parseParameter } from '../util/parseParameter'

const router = express.Router()

const PAGE_SIZE = parseInt(parseParameter(process.env.PAGE_SIZE)) || 25;

router.get('/all', (req, res) => {
  const page = parseInt(
    parseParameter(req.query.page as string | string[] | undefined),
  )
  let data = products
  if (page) {
    data = products.slice(page * PAGE_SIZE - PAGE_SIZE, page * PAGE_SIZE)
  }
  if (!data || !data.length) {
    return res.status(400).send({ message: 'No data' })
  }
  res.json({ products: data })
})

router.get('/:id', (req, res) => {
  const data = products.find((product) => product.id === req.params.id)
  if (!data) {
    return res.status(400).send({ message: 'No data' })
  }
  res.json({ product: data })
})

export default router
