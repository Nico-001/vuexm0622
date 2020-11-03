"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("@/router"));

var _store = _interopRequireDefault(require("@/store"));

require("@/mock/mockServer");

var _TypeNav = _interopRequireDefault(require("@/components/TypeNav"));

var _SliderLoop = _interopRequireDefault(require("@/components/SliderLoop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//引入mock接口文件，引入完成，本地就已经模拟好接口了
// import '@/api' //这里直接引入api文件，那么api文件就会运行
// import {reqCategoryList} from '@/api'
// reqCategoryList()
_vue["default"].config.productionTip = false; //这里是全局注册的组件

_vue["default"].component('TypeNav', _TypeNav["default"]);

_vue["default"].component('SliderLoop', _SliderLoop["default"]);

new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  },
  router: _router["default"],
  store: _store["default"]
}).$mount('#app');