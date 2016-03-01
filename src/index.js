const json = require('wrap-json-stream')
    , isStream = require('is-stream')

const inherit =
  [ 'name'
  , 'meta'
  , 'id' ]

const fwd =
  [ 'syncReceived'
  , 'syncRecieved' // spelling error in scuttlebutt
  , 'sync'
  , 'syncSent'
  , 'synced'
  , 'header'
  , 'commit' ]

function createStream(model, opts) {
  let { wrapper, wrap, ...rest } = opts || {}
  wrapper = wrapper || wrap

  rest.wrapper = 'raw'
  const raw = isStream(model) ? model : model.createStream(rest)

  if (wrapper === 'json') {
    return json(raw, { fwd, inherit })
  } else {
    return raw
  }
}

module.exports = createStream
