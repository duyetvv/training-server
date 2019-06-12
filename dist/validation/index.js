"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _errorcode = require("./errorcode");

var _regex = require("./regex");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * The list of the validation rules.
 * It will be define dependen on project
 */
var validateRules = {
  required: {
    test: function test(_ref) {
      var val = _ref.val;
      return val.length > 0;
    },
    res: function res(_ref2) {
      var name = _ref2.name,
          arg = _ref2.arg;
      return {
        arg: arg,
        name: name,
        code: _errorcode.ERRORCODE.required
      };
    }
  },
  dataType: {
    test: function test(_ref3) {
      var val = _ref3.val,
          arg = _ref3.arg;
      return _typeof(val.trim()) === arg;
    },
    res: function res(_ref4) {
      var name = _ref4.name,
          arg = _ref4.arg;
      return {
        arg: arg,
        name: name,
        code: _errorcode.ERRORCODE.dataType
      };
    }
  },
  maxLength: {
    test: function test(_ref5) {
      var val = _ref5.val,
          arg = _ref5.arg;
      return !val || val.length <= arg;
    },
    res: function res(_ref6) {
      var name = _ref6.name,
          arg = _ref6.arg;
      return {
        arg: arg,
        name: name,
        code: _errorcode.ERRORCODE.maxLength
      };
    }
  },
  minLength: {
    test: function test(_ref7) {
      var val = _ref7.val,
          arg = _ref7.arg;
      return !val || val.length >= arg;
    },
    res: function res(_ref8) {
      var name = _ref8.name,
          arg = _ref8.arg;
      return {
        arg: arg,
        name: name,
        code: _errorcode.ERRORCODE.minLength
      };
    }
  },
  email: {
    test: function test(_ref9) {
      var val = _ref9.val;
      return !val || _regex.email.test(val);
    },
    res: function res(_ref10) {
      var name = _ref10.name,
          arg = _ref10.arg;
      return {
        arg: arg,
        name: name,
        code: _errorcode.ERRORCODE.email
      };
    }
  },
  number: {
    test: function test(_ref11) {
      var val = _ref11.val;
      return !val || _regex.number.test(val);
    },
    res: function res(_ref12) {
      var name = _ref12.name,
          arg = _ref12.arg;
      return {
        arg: arg,
        name: name,
        code: _errorcode.ERRORCODE.number
      };
    }
  }
};
/**
 * The validate function
 */

var _default = function _default(type) {
  return function (val, name) {
    var arg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    return {
      isValid: validateRules[type].test({
        val: val,
        name: name,
        arg: arg
      }),
      res: validateRules[type].res({
        name: name,
        arg: arg
      })
    };
  };
};

exports["default"] = _default;