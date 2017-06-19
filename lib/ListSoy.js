'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListSoy = undefined;

var _metalComponent = require('metal-component');

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = require('metal-soy');

var _metalSoy2 = _interopRequireDefault(_metalSoy);

var _ListSoySoy = require('./ListSoy.soy.js');

var _ListSoySoy2 = _interopRequireDefault(_ListSoySoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListSoy = function (_Component) {
  _inherits(ListSoy, _Component);

  function ListSoy() {
    _classCallCheck(this, ListSoy);

    return _possibleConstructorReturn(this, (ListSoy.__proto__ || Object.getPrototypeOf(ListSoy)).apply(this, arguments));
  }

  return ListSoy;
}(_metalComponent2.default);

_metalSoy2.default.register(ListSoy, _ListSoySoy2.default);

exports.ListSoy = ListSoy;
exports.default = ListSoy;