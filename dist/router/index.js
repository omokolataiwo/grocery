"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _grocery = _interopRequireDefault(require("./grocery"));

var app = _express.default.Router();

(0, _grocery.default)(app);
var _default = app;
exports.default = _default;