# wrap-scuttlebutt-stream

**Transition utility to create JSONStream-wrapped scuttlebutt streams.** Because scuttlebutt's `stream-serializer` doesn't play nice with JSONStream, and I'm using JSONStream elsewhere, this disables stream-serializer on scuttlebutt streams and wrap them with JSONStream.

[![npm status](http://img.shields.io/npm/v/wrap-scuttlebutt-stream.svg?style=flat-square)](https://www.npmjs.org/package/wrap-scuttlebutt-stream) [![Dependency status](https://img.shields.io/david/vweevers/wrap-scuttlebutt-stream.svg?style=flat-square)](https://david-dm.org/vweevers/wrap-scuttlebutt-stream)

## example

```js
const create = require('wrap-scuttlebutt-stream')
const model = require('scuttlebutt/model')()
const stream = create(model, { tail: false })
```

Alternatively:

```js
const wrap = require('wrap-scuttlebutt-stream')
const model = require('scuttlebutt/model')()
const stream = wrap(model.createStream({ tail: false, wrapper: 'raw' }))
```

## `wrap(model||stream, [opts])`

Options are passed to `model.createStream(opts)`.

## install

With [npm](https://npmjs.org) do:

```
npm install wrap-scuttlebutt-stream
```

## license

[MIT](http://opensource.org/licenses/MIT) © Vincent Weevers
