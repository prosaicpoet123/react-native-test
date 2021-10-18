const parseParameter = (param?: string[] | string): string => {
  if (!param) return ''
  return Array.isArray(param) ? param[0] : param
}

export { parseParameter }
