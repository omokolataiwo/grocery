"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _grocery = _interopRequireDefault(require("../controller/grocery"));

var _validateItem = _interopRequireDefault(require("../middleware/validateItem"));

var _default = function _default(app) {
  var BASE_ROUTE = '/grocery';
  app.get("".concat(BASE_ROUTE), _grocery.default.all);
  app.post("".concat(BASE_ROUTE), _validateItem.default, _grocery.default.add);
};

exports.default = _default;