"use strict";

var _chalk = _interopRequireDefault(require("chalk"));

var _fs = _interopRequireDefault(require("fs"));

var _prompts = _interopRequireDefault(require("prompts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var main = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return multipleChoice();

          case 2:
            response = _context.sent;
            console.log("Final response", response);
            return _context.abrupt("return");

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function main() {
    return _ref.apply(this, arguments);
  };
}();

var multipleChoice = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _prompts["default"])([{
              type: "text",
              name: "name",
              message: "Name"
            }, {
              type: "select",
              name: "color",
              message: function message(prev) {
                return prev === "" ? "Pick colors" : "sroloc kciP";
              },
              choices: function choices(p, v) {
                return p == "Joe" ? [{
                  title: "color test",
                  value: "eoJ"
                }] : [{
                  title: "Red",
                  value: "#ff0000"
                }, {
                  title: "Green",
                  value: "#00ff00"
                }, {
                  title: "Blue",
                  value: "#0000ff"
                }];
              }
            }]);

          case 2:
            response = _context2.sent;
            return _context2.abrupt("return", response);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function multipleChoice() {
    return _ref2.apply(this, arguments);
  };
}();

main();