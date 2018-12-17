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
  amount: String,
  purchased: Boolean
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

Grocery.allItems =
/*#__PURE__*/
(0, _asyncToGenerator2.default)(
/*#__PURE__*/
_regenerator.default.mark(function _callee2() {
  var allGrocery;
  return _regenerator.default.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return GroceryModel.find();

        case 2:
          allGrocery = _context2.sent;
          return _context2.abrupt("return", allGrocery);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2, this);
}));

Grocery.delete =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3(id) {
    var grocery;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return GroceryModel.findById({
              _id: id
            });

          case 2:
            grocery = _context3.sent;

            if (grocery) {
              _context3.next = 5;
              break;
            }

            throw Error('Item not found');

          case 5:
            _context3.next = 7;
            return GroceryModel.findByIdAndDelete({
              _id: id
            });

          case 7:
            return _context3.abrupt("return", grocery);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function (_x2) {
    return _ref3.apply(this, arguments);
  };
}();

Grocery.edit =
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4(id, body) {
    var grocery;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return GroceryModel.findById({
              _id: id
            });

          case 2:
            grocery = _context4.sent;

            if (grocery) {
              _context4.next = 5;
              break;
            }

            throw Error('Item not found');

          case 5:
            _context4.next = 7;
            return GroceryModel.updateOne({
              _id: id
            }, body);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function (_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}();