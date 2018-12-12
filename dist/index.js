"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _cors = _interopRequireDefault(require("cors"));

var _router = _interopRequireDefault(require("./router"));

_mongoose.default.connect('mongodb://localhost/grocery-store', {
  useNewUrlParser: true
});

var app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.use((0, _cors.default)());
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.use('/api/v1', _router.default);
app.listen('7000', function () {
  return console.log('Server started on port: 7000');
});
var _default = app;
exports.default = _default;