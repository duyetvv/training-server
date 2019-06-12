"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _main = _interopRequireDefault(require("../modules/main"));

var _user = _interopRequireDefault(require("../modules/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import authen from '../modules/authen';
var _default = {
  main: _main["default"],
  user: _user["default"]
};
exports["default"] = _default;