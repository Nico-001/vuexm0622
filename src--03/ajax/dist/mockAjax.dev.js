"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _nprogress = _interopRequireDefault(require("nprogress"));

require("nprogress/nprogress.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//导入axios
//导入Nprogress
//
var instance = _axios["default"].create({
  baseURL: '/mock',
  timeout: 20000
});

instance.interceptors.request.use(function (config) {
  _nprogress["default"].start();

  return config;
});
instance.interceptors.response.use(function (response) {
  _nprogress["default"].done();

  return response.data;
}, function (error) {
  _nprogress["default"].done();

  alert('请求失败' + error.message || '未知错误');
  return new Promise(function () {});
});
var _default = instance;
exports["default"] = _default;