(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.PraiseButton = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var PraiseButton = function () {
    function PraiseButton(o) {
      _classCallCheck(this, PraiseButton);

      this.o = o;
      this.count = this.o.find('.count');
      this.x = 0;
      this.reset();
      this.timer;
    }

    _createClass(PraiseButton, [{
      key: 'reset',
      value: function reset() {
        var _this = this;

        axios.get('/api/getHandCount').then(function (res) {
          var d = res.data;
          if (d.status == 1) {
            _this.x = d.total;
            _this.appendHtml();
          } else {
            console.log('getHandCount is error');
          }
        });
      }
    }, {
      key: 'appendHtml',
      value: function appendHtml() {
        this.count.html(this.x);
      }
    }, {
      key: 'add',
      value: function add() {
        this.dilute(this.addDo, 5000)();
      }
    }, {
      key: 'addDo',
      value: function addDo() {
        var _this2 = this;

        axios.post('/api/changeHandCount').then(function (res) {
          var d = res.data;
          if (d.status == 1) {
            _this2.x++;
            _this2.appendHtml();
          } else {
            console.log('changeHandCount is error');
          }
        });
      }
    }, {
      key: 'dilute',
      value: function dilute(fn, wait) {
        var _this3 = this;

        return function () {
          if (!_this3.timer) {
            _this3.timer = setTimeout(function () {
              _this3.timer = null;
            }, wait);
            fn.apply(_this3);
          } else {
            console.log('防抖了');
          }
        };
      }
    }]);

    return PraiseButton;
  }();

  exports.default = PraiseButton;
});