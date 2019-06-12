"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mysql = _interopRequireDefault(require("../helpers/mysql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Database = function Database(name, props) {
  var _this = this;

  _classCallCheck(this, Database);

  _defineProperty(this, "creating",
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var fields, queryStr;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fields = Object.keys(_this.props).map(function (field) {
              return "".concat(field, " ").concat(fields[field].type, " ").concat(fields[field].required, " default ").concat(fields[field]["default"]);
            });
            queryStr = "create table if not exists ".concat(_this.name, "(\n      id int primary key auto_increment,\n      ").concat(fields.join(', '), "\n    )");

            _mysql["default"].connect(function (err) {
              if (err) {
                console.error('error: ' + err.message);
                return err;
              }

              _mysql["default"].query(queryStr, function (err, results, fields) {
                if (err) {
                  console.log(err.message);
                  return err;
                }

                return results;
              });
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));

  _defineProperty(this, "inserting",
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(entity) {
      var fields, values, queryStr;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              fields = Object.keys(_this.props).sort();
              values = fields.map(function (field) {
                return entity[field] || _this.props[field]["default"];
              });
              queryStr = "\n      INSERT INTO ".concat(_this.name, "(").concat(fields.join(','), ") \n      VALUES(").concat(values.join(','), ")\n    ");

              _mysql["default"].query(queryStr, function (err, results, fields) {
                if (err) {
                  console.log(err.message);
                  return err;
                }

                return results;
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());

  _defineProperty(this, "queryall",
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    var queryStr;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            queryStr = "SELECT * FROM todos";

            _mysql["default"].query(queryStr, function (error, results, fields) {
              if (error) {
                return console.error(error.message);
              }

              console.log(results);
            });

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));

  _defineProperty(this, "updating",
  /*#__PURE__*/
  function () {
    var _ref4 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee4(id, valObj) {
      var newVal, queryStr;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              newVal = Object.keys(valObj).map(function (field) {
                return "".concat(field, " = ").concat(valObj[field]);
              });
              queryStr = "UPDATE ".concat(_this.name, " \n      SET ").concat(newVal.join(', '), "\n      WHERE id = ").concat(id, "\n    ");

              _mysql["default"].query(queryStr, data, function (error, results, fields) {
                if (error) {
                  return console.error(error.message);
                }

                console.log('Rows affected:', results.affectedRows, fields);
              });

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x2, _x3) {
      return _ref4.apply(this, arguments);
    };
  }());

  _defineProperty(this, "deleting", function (id) {
    var queryStr = "DELETE FROM todos WHERE id = ".concat(id);

    _mysql["default"].query(queryStr, 1, function (error, results, fields) {
      if (error) return console.error(error.message);
      console.log('Deleted Row(s):', results.affectedRows);
    });
  });

  this.props = props;
  this.name = name;
  this.creating();
};

var _default = Database;
exports["default"] = _default;