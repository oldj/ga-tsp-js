/**
 * Life.js
 */

'use strict'

import shuffle from '../libs/shuffle'

export default class Life {
  constructor (gene = 100) {
    this.gene = Array.isArray(gene) ? gene.slice(0) : this.rndGene(gene)
    this.score = 0
  }

  rndGene (n) {
    return shuffle((new Array(n)).fill(0).map((_, idx) => idx))
  }

  setScore (v) {
    this.score = v
  }

  toString () {
    return this.gene.join('-')
  }
}
