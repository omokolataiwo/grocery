"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validate = _interopRequireDefault(require("validate.js"));

var _validationConstraint = require("./validationConstraint");

var _default = function _default(req, res, next) {
  var _req$body = req.body,
      name = _req$body.name,
      amount = _req$body.amount,
      purchased = _req$body.purchased;
  var hasValidationError = (0, _validate.default)({
    name: name,
    amount: amount,
    purchased: purchased
  }, _validationConstraint.itemValidation);

  if (hasValidationError) {
    return res.status(401).json({
      error: hasValidationError
    });
  }

  req.body = {
    name: name,
    amount: amount,
    purchased: !!purchased
  };
  return next();
};

exports.default = _default;