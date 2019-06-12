"use strict";

var _index = _interopRequireDefault(require("./routes/index"));

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _compression = _interopRequireDefault(require("compression"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import path from 'path';
var app = (0, _express["default"])();

var router = _express["default"].Router(); // app.use(express.static(path.join(__dirname, 'app')))


app.use((0, _cors["default"])());
app.use((0, _compression["default"])());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json());
(0, _index["default"])(router);
app.use('/api', router);
app.listen(process.env.PORT || 8080, function () {
  console.log('API listening on port 8080!');
});
module.exports = app;