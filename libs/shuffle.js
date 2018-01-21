/**
 * shuffle.js
 */

'use strict'

export default function (arr) {
  let i = arr.length
  while (i) {
    let j = Math.floor(Math.random() * i--);
    [arr[j], arr[i]] = [arr[i], arr[j]]
  }

  return arr
}
