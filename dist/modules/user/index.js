"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _model = _interopRequireDefault(require("./model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userData = {
  username: 'duyetvv',
  password: '123456',
  email: 'duytevovan.99@gmail.com',
  phone: '038765538',
  address: 'Cao Phong, Xuan Lam, Song Cau, Phu Yen',
  numberOrders: '1111111'
};

var userRoutes = function userRoutes(router) {
  router.route('/user').get(function (req, res) {
    var user = new _model["default"](userData);
    var validRes = user.validate();
    console.log('validRes ', validRes);
    res.json(validRes);
  });
};

var _default = userRoutes;
exports["default"] = _default;