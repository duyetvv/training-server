"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _model = _interopRequireDefault(require("../../model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The defined of the user object
 */
var user = {
  username: {
    defVal: null,
    validations: {
      required: true
    }
  },
  password: {
    defVal: null,
    validations: {
      required: true
    }
  },
  email: {
    defVal: null,
    validations: {
      required: true,
      email: true
    }
  },
  phone: {
    defVal: null,
    validations: {
      required: true,
      phone: true
    }
  },
  address: {
    defVal: null,
    validations: {
      required: true
    }
  },
  numberOrders: {
    defVal: null,
    validations: {
      required: true,
      number: true
    }
  }
  /**
   * The User model extended from the Model class.
   * The usage: (new User()).init({ username: 'duyetvv', ... })
   */

};

var UserModel =
/*#__PURE__*/
function (_Model) {
  _inherits(UserModel, _Model);

  function UserModel(data) {
    var _this;

    _classCallCheck(this, UserModel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UserModel).call(this, user));
    console.log(_assertThisInitialized(_this));
    _this.props = user;
    Object.keys(_this.props).forEach(function (field) {
      _this.props[field].val = data[field];
    });
    return _this;
  }

  return UserModel;
}(_model["default"]);

exports["default"] = UserModel;
;