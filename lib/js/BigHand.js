(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './hand.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./hand.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.hand);
    global.BigHand = mod.exports;
  }
})(this, function (exports, _hand) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _hand2 = _interopRequireDefault(_hand);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _hand2.default;
});