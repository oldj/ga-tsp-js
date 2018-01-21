/**
 * @author oldj
 */

'use strict'

//import Promise from './promise'

export default ms => new Promise(resolve => setTimeout(resolve, ms))
