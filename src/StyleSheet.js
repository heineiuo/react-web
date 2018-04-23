import Prefixer from 'inline-style-prefixer'
import isPlainObject from 'lodash/isPlainObject'
import flatten from 'lodash/flatten'

const prefixer = new Prefixer()

/**
 * if itme has prop `_definition` then prefix it (for styles created by aphrodite)
 */
const _compatiblePrefix = (item) => {
  return item.hasOwnProperty('_definition') ? prefixer.prefix(item._definition) : item
}

const _assignFlattenStyles = (styleList) => {
  return styleList.reduce((left, right) => {
    Object.assign(left, isPlainObject(right) ? _compatiblePrefix(right) : {})
    return left
  }, {})
}

const flattenStyles = (styleList) => {
  return flatten(styleList).map(_compatiblePrefix)
}

const assignStyles = (params) => {
  return _assignFlattenStyles(flatten(params instanceof Array ? params : [params]))
}

const create = (rawStyleMap) => {
  return Object.entries(rawStyleMap).reduce((left, [key, value]) => {
    left[key] = prefixer.prefix(value)
    return left
  }, {})
}

export default {
  create,
  flatten: flattenStyles,
  assign: assignStyles
}
