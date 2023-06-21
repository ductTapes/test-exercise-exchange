const clsx: ClsxType = (...classNames) => {
  if (!classNames) return classNames

  return classNames
    .filter(item => !!item)
    .map(className => {
      if (typeof className === 'string' || typeof className === 'number')
        return String(className).trim()

      if (Array.isArray(className)) return className.filter(item => !!item).join(' ')

      if (typeof className === 'object')
        return Object.keys(className).reduce((acc, key) => {
          return `${acc} ${className[key] ? key : ''}`.trim()
        }, '')
    })
    .join(' ')
}

type ClsxType = (
  ...classNames: (string | number | (string | number)[] | Record<string, boolean>)[]
) => string

export default clsx
