"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _validation = _interopRequireDefault(require("../validation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * The abtract class to define the Model.
 * Which whose the common behavior of 1 model entity 
 */
var Model = function Model(props) {
  var _this = this;

  _classCallCheck(this, Model);

  _defineProperty(this, "init", function (data) {
    Object.keys(_this.props).forEach(function (key) {
      _this.props[key].val = data[key] || _this.props[key].defVal;
    });
    return _this.props;
  });

  _defineProperty(this, "validate", function () {
    var objKeys = Object.keys(_this.props);
    var results = [];
    objKeys.forEach(function (field) {
      var _validateField = validateField(field),
          isValid = _validateField.isValid,
          errors = _validateField.errors;

      !isValid && results.push({
        field: field,
        errors: errors
      });
    });
    return {
      isValid: !results.length,
      errors: results,
      data: _this.props
    };
  });

  _defineProperty(this, "validateField", function (field) {
    var _this$props$field = _this.props[field],
        validations = _this$props$field.validations,
        val = _this$props$field.val;
    var validateTypes = Object.keys(validations);
    var errors = [];
    validateTypes.forEach(function (type) {
      var _validate = (0, _validation["default"])(type)(val, email, validations[type]),
          isValid = _validate.isValid,
          res = _validate.res;

      !isValid && errors.push(res);
    });
    return {
      isValid: !errors.length,
      errors: errors
    };
  });

  this.props = props;
}
/**
 * initialize data for model. The data was recieve from client
 */
;

exports["default"] = Model;