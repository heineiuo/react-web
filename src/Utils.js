import warning from 'warning'
import attrAccept from './attr-accept'
import omit from 'lodash/omit'
import isPlainObject from 'lodash/isPlainObject'
import flatten from 'lodash/flatten'
import throttle from 'lodash/throttle'

const dataURLToBlob = (dataURL) => {
  const BASE64_MARKER = ';base64,'

  if (dataURL.indexOf(BASE64_MARKER) == -1) {
    const parts = dataURL.split(',')
    const contentType = parts[0].split(':')[1]
    const raw = decodeURIComponent(parts[1])
    return new Blob([raw], { type: contentType })
  }

  const parts = dataURL.split(BASE64_MARKER)
  const contentType = parts[0].split(':')[1]
  const raw = window.atob(parts[1])
  const rawLength = raw.length

  let uInt8Array = new Uint8Array(rawLength)

  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i)
  }
  return new Blob([uInt8Array], { type: contentType })
}


export {
  dataURLToBlob,
  warning,
  attrAccept,
  omit,
  isPlainObject,
  flatten,
  throttle,
}