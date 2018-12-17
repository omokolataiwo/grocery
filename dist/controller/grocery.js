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
              items: allGroceries
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
    var item;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _grocery.default.add(req.body);

          case 2:
            item = _context2.sent;
            _context2.prev = 3;
            return _context2.abrupt("return", res.status(201).json({
              data: {
                item: item
              }
            }));

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](3);
            return _context2.abrupt("return", res.state(500).json({
              data: 'Error!'
            }));

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[3, 7]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

_default.delete =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3(req, res) {
    var id, item;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _grocery.default.delete(id);

          case 4:
            item = _context3.sent;
            return _context3.abrupt("return", res.status(200).json({
              data: {
                item: item
              }
            }));

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            return _context3.abrupt("return", res.status(500).json({
              error: _context3.t0.message
            }));

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[1, 8]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

_default.edit =
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4(req, res) {
    var id;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return _grocery.default.edit(id, req.body);

          case 4:
            return _context4.abrupt("return", res.status(200).json({
              data: {
                id: id
              }
            }));

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](1);
            return _context4.abrupt("return", res.status(500).json({
              error: _context4.t0.message
            }));

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this, [[1, 7]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();