'use strict'

var test = require('tape')
var updatePath = require('./')
var tcomb = require('tcomb')

test(function (t) {
  var Struct = tcomb.struct({
    foo: tcomb.struct({
      bar: tcomb.struct({
        baz: tcomb.String
      })
    })
  })

  var struct = Struct({
    foo: {bar: {baz: 'str'}}
  })

  var updated = updatePath(struct, ['foo', 'bar', 'baz'], {
    $set: 'str2'
  })

  t.deepEqual(updated, {foo: {bar: {baz: 'str2'}}})
  t.end()
})
