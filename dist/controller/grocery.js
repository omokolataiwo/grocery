"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _grocery = _interopRequireDefault(require("../model/grocery"));

var _default = function _default() {
  (0, _classCallCheck2.default)(this, _default);
};

exports.default = _default;

_default.all =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(req, res) {
    var allGroceries;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _grocery.default.allItems();

          case 3:
            allGroceries = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              data: allGroceries
            }));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.state(500).json({
              data: 'Error'
            }));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 7]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

_default.add =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(req, res) {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _grocery.default.add(req.body);

          case 3:
            return _context2.abrupt("return", res.status(201).json({
              data: {
                message: 'Item Added'
              }
            }));

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.state(500).json({
              data: 'Error!'
            }));

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 6]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();