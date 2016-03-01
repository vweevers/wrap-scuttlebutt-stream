'use strict';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var json = require('wrap-json-stream'),
    isStream = require('is-stream');

var inherit = ['name', 'meta', 'id'];

var fwd = ['syncReceived', 'syncRecieved' // spelling error in scuttlebutt
, 'sync', 'syncSent', 'synced', 'header', 'commit'];

function createStream(model, opts) {
  var _ref = opts || {};

  var wrapper = _ref.wrapper;
  var wrap = _ref.wrap;

  var rest = _objectWithoutProperties(_ref, ['wrapper', 'wrap']);

  wrapper = wrapper || wrap;

  rest.wrapper = 'raw';
  var raw = isStream(model) ? model : model.createStream(rest);

  if (wrapper === 'json') {
    return json(raw, { fwd: fwd, inherit: inherit });
  } else {
    return raw;
  }
}

module.exports = createStream;