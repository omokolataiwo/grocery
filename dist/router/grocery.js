"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _grocery = _interopRequireDefault(require("../controller/grocery"));

var _validateItem = _interopRequireDefault(require("../middleware/validateItem"));

var BASE_ROUTE = '/grocery';

var _default = function _default(app) {
  app.get("".concat(BASE_ROUTE), _grocery.default.all);
  app.post("".concat(BASE_ROUTE), _validateItem.default, _grocery.default.add);
  app.put("".concat(BASE_ROUTE, "/:id"), _grocery.default.edit);
  app.delete("".concat(BASE_ROUTE, "/:id"), _grocery.default.delete);
};

exports.default = _default;