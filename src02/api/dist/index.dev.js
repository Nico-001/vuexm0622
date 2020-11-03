"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reqCategoryList = void 0;

var _Ajax = _interopRequireDefault(require("@/api/node_modules/@/api/node_modules/@/ajax/Ajax"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reqCategoryList = function reqCategoryList() {
  return (0, _Ajax["default"])({
    url: '/product/getBaseCategoryList',
    method: 'get'
  });
};

exports.reqCategoryList = reqCategoryList;
reqCategoryList();