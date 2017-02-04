# tcomb-update-path [![Build Status](https://travis-ci.org/ajoslin/tcomb-update-path.svg?branch=master)](https://travis-ci.org/ajoslin/tcomb-update-path)

> Update a tcomb object at a path

For updating bigger objects, it's more convenient to provide a path and an update payload.

The normal `tcomb.update` signature forces you to provide a deep update object.

This module takes a `path` array and an `update` payload and combines them into a tcomb-compatible update.

## Install

```
$ npm install --save tcomb-update-path
```


## Usage

```js
var updatePath = require('tcomb-update-path')
var tcomb = require('tcomb')

var Struct = tcomb.struct({
  foo: tcomb.struct({
    bar: tcomb.String
  })
})

var struct = Struct({
  foo: {bar: 'str'}
})

updatePath(struct, ['foo', 'bar'], {
  $set: 'new str'
})
//=> {foo: {bar: 'new str'}}
```

## API

#### `tcombUpdatePath(tcombInstance, path, action)` -> `updatedInstance`

##### tcombInstance

An instantiated tcomb type (usually a struct or list).

##### path

The path to the object being updated. Can be an array or a string dot-path.

###### action

A valid [tcomb update action](https://github.com/gcanti/tcomb/blob/master/docs/API.md#the-update-function), which will be done at the given `path`.

## License

MIT © [Andrew Joslin](http://ajoslin.com)
