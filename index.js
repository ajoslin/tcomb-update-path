'use strict'

var t = require('tcomb')
var dotProp = require('dot-prop')

module.exports = function tcombUpdatePath (instance, path, action) {
  var update = {}
  dotProp.set(update, Array.isArray(path) ? path.join('.') : path, action)

  return t.update(instance, update)
}
