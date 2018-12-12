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
  name: String
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
            console.log('========================> ****');
            console.log('========================> ', newGrocery);
            return _context.abrupt("return", newGrocery);

          case 7:
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