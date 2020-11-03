"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Home = _interopRequireDefault(require("@/views/Home"));

var _Register = _interopRequireDefault(require("@/views/Register"));

var _Search = _interopRequireDefault(require("@/views/Search"));

var _Login = _interopRequireDefault(require("@/views/Login"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = [{
  path: '/home',
  component: _Home["default"]
}, {
  path: '/register',
  component: _Register["default"],
  //解决登录页和注册页底部不显示
  meta: {
    isHidden: true
  }
}, {
  path: '/search/:keyword?',
  component: _Search["default"],
  name: 'search',
  props: function props(route) {
    return {
      keyword: route.params.keyword,
      keyword1: route.query.keyword1
    };
  }
}, {
  path: '/login',
  component: _Login["default"],
  meta: {
    isHidden: true
  }
}, {
  path: '/',
  redirect: '/home'
}];
exports["default"] = _default;