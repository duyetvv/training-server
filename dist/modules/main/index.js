"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var main = function main(router) {
  router.route('/').get(function (req, res) {
    return res.send('API Shopping App!');
  });
};

var _default = main;
exports["default"] = _default;