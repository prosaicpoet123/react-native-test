const parseStockStatus = (status: string): string => {
  switch (status) {
    case 'OUTOFSTOCK':
      return 'Out Of Stock'
    case 'LOWINSTOCK':
      return 'Low In Stock'
    case 'NOTAVAILABLE':
      return 'Not Available'
    default:
      return 'In Stock'
  }
}

export { parseStockStatus }
