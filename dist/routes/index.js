"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mapping = _interopRequireDefault(require("./mapping"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootRoute = function rootRoute(router) {
  Object.keys(_mapping["default"]).forEach(function (routeName) {
    _mapping["default"][routeName](router);
  });
};

var _default = rootRoute;
exports["default"] = _default;