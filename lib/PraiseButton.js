'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PraiseButton = function () {
  function PraiseButton(o) {
    _classCallCheck(this, PraiseButton);

    this.o = o;
    this.count = this.o.find('.count');
    this.x = parseInt(this.count.html());
  }

  _createClass(PraiseButton, [{
    key: 'add',
    value: function add() {
      this.x++;
      this.count.html(this.x);
    }
  }]);

  return PraiseButton;
}();

exports.default = PraiseButton;