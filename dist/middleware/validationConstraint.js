"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itemValidation = void 0;
var itemValidation = {
  name: {
    presence: {
      allowEmpty: false,
      message: 'is required.'
    }
  },
  amount: {
    presence: {
      allowEmpty: false,
      message: 'is required.'
    },
    numericality: {
      strict: true,
      greaterThan: 0
    }
  },
  purchased: {
    presence: {
      allowEmpty: false,
      message: 'is required.'
    }
  }
};
exports.itemValidation = itemValidation;