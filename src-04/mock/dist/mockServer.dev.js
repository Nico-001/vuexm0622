"use strict";

var _mockjs = _interopRequireDefault(require("mockjs"));

var _banner = _interopRequireDefault(require("@/mock/banner"));

var _floor = _interopRequireDefault(require("@/mock/floor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mockjs["default"].mock('/mock/banner', {
  code: 200,
  data: _banner["default"]
});

_mockjs["default"].mock('/mock/floor', {
  code: 200,
  data: _floor["default"]
});