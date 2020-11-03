"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reqFloorList = exports.reqBannerList = exports.reqCategoryList = void 0;

var _Ajax = _interopRequireDefault(require("@/ajax/Ajax"));

var _mockAjax = _interopRequireDefault(require("@/ajax/mockAjax"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reqCategoryList = function reqCategoryList() {
  return (0, _Ajax["default"])({
    url: '/product/getBaseCategoryList',
    mothod: 'get'
  });
}; // reqCategoryList()


exports.reqCategoryList = reqCategoryList;

var reqBannerList = function reqBannerList() {
  return (0, _mockAjax["default"])({
    url: '/banner',
    mothod: 'get'
  });
};

exports.reqBannerList = reqBannerList;

var reqFloorList = function reqFloorList() {
  return (0, _mockAjax["default"])({
    url: '/floor',
    mothod: 'get'
  });
};

exports.reqFloorList = reqFloorList;