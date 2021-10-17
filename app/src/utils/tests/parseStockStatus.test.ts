import { parseStockStatus } from '../parseStockStatus'

describe('parseStockStatus()', () => {
  it('returns the correctly formatted stock status', () => {
    const status1 = 'OUTOFSTOCK'
    const status2 = 'NOTAVAILABLE'
    const status3 = 'LOWINSTOCK'
    const status4 = 'INSTOCK'

    expect(parseStockStatus(status1)).toEqual('Out Of Stock')
    expect(parseStockStatus(status2)).toEqual('Not Available')
    expect(parseStockStatus(status3)).toEqual('Low In Stock')
    expect(parseStockStatus(status4)).toEqual('In Stock')
  })
})
