"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.number = exports.email = void 0;
var email = new RegExp('^[a-zA-Z][a-zA-Z0-9_\\-\\.]{0,}@[a-zA-Z0-9\\-]{1,}(\\.[a-z0-9]{1,4}){1,3}$');
exports.email = email;
var number = new RegExp('^[0-9]+$');
exports.number = number;