"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var grocerySchema = new _mongoose.default.Schema({
  name: String,
  amount: String
});

var GroceryModel = _mongoose.default.model('Grocery', grocerySchema);

var Grocery = function Grocery() {
  (0, _classCallCheck2.default)(this, Grocery);
};

exports.default = Grocery;

Grocery.add =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(groceryData) {
    var grocery, newGrocery;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            grocery = new GroceryModel(groceryData);
            _context.next = 3;
            return grocery.save();

          case 3:
            newGrocery = _context.sent;
            return _context.abrupt("return", newGrocery);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

Grocery.update =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(_id, groceryData) {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            GroceryModel.find({
              _id: _id
            });

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

Grocery.allItems =
/*#__PURE__*/
(0, _asyncToGenerator2.default)(
/*#__PURE__*/
_regenerator.default.mark(function _callee3() {
  var allGrocery;
  return _regenerator.default.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return GroceryModel.find();

        case 2:
          allGrocery = _context3.sent;
          return _context3.abrupt("return", allGrocery);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3, this);
}));