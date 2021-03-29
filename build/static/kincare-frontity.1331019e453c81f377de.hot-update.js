webpackHotUpdate("kincare-frontity",{

/***/ "./packages/kincare-theme/src/components/layout/Header.js":
/*!****************************************************************!*\
  !*** ./packages/kincare-theme/src/components/layout/Header.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/logo.png */ \"./packages/kincare-theme/src/img/logo.png\");\n/* harmony import */ var _parts_Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../parts/Navigation */ \"./packages/kincare-theme/src/components/parts/Navigation.js\");\n/* harmony import */ var _parts_Hero__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../parts/Hero */ \"./packages/kincare-theme/src/components/parts/Hero.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nconst Header=({data,state})=>{const[page,setPage]=Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({});const[hasHero,setHasHero]=Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false);Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(()=>{if(!data.isFetching){setPage(state.source[data.type][data.id]);}},[data.isFetching,data.id]);Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(()=>{if(page&&page.acf&&page.acf.hero){setHasHero(true);}},[page.acf]);return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsx\"])(\"header\",{className:`kc-header ${hasHero?'kc-hero':''}`,style:{backgroundImage:hasHero?`url(${page.acf.hero.background_image})`:''},children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsxs\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Row\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsx\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"],{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsx\"])(\"img\",{src:_img_logo_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"]})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsx\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"],{className:\"d-flex align-items-center justify-content-end\",children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsx\"])(_parts_Navigation__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{})}),hasHero?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsx\"])(_parts_Hero__WEBPACK_IMPORTED_MODULE_7__[\"default\"],{hero:page.acf.hero}):Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsx\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__[\"Fragment\"],{})]})});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_4__[\"connect\"])(Header));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9raW5jYXJlLXRoZW1lL3NyYy9jb21wb25lbnRzL2xheW91dC9IZWFkZXIuanM/MWEyYSJdLCJuYW1lcyI6WyJIZWFkZXIiLCJkYXRhIiwic3RhdGUiLCJwYWdlIiwic2V0UGFnZSIsInVzZVN0YXRlIiwiaGFzSGVybyIsInNldEhhc0hlcm8iLCJ1c2VFZmZlY3QiLCJpc0ZldGNoaW5nIiwic291cmNlIiwidHlwZSIsImlkIiwiYWNmIiwiaGVybyIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRfaW1hZ2UiLCJsb2dvIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFRQSxLQUFNQSxPQUFNLENBQUcsQ0FBQyxDQUFFQyxJQUFGLENBQVFDLEtBQVIsQ0FBRCxHQUFxQixDQUVoQyxLQUFNLENBQUNDLElBQUQsQ0FBT0MsT0FBUCxFQUFrQkMsc0RBQVEsQ0FBQyxFQUFELENBQWhDLENBQ0EsS0FBTSxDQUFDQyxPQUFELENBQVVDLFVBQVYsRUFBd0JGLHNEQUFRLENBQUMsS0FBRCxDQUF0QyxDQUVBRyx1REFBUyxDQUFDLElBQU0sQ0FDWixHQUFHLENBQUNQLElBQUksQ0FBQ1EsVUFBVCxDQUFxQixDQUNqQkwsT0FBTyxDQUFDRixLQUFLLENBQUNRLE1BQU4sQ0FBYVQsSUFBSSxDQUFDVSxJQUFsQixFQUF3QlYsSUFBSSxDQUFDVyxFQUE3QixDQUFELENBQVAsQ0FDSCxDQUNKLENBSlEsQ0FJTixDQUFFWCxJQUFJLENBQUNRLFVBQVAsQ0FBbUJSLElBQUksQ0FBQ1csRUFBeEIsQ0FKTSxDQUFULENBTUFKLHVEQUFTLENBQUMsSUFBTSxDQUNaLEdBQUdMLElBQUksRUFBSUEsSUFBSSxDQUFDVSxHQUFiLEVBQW9CVixJQUFJLENBQUNVLEdBQUwsQ0FBU0MsSUFBaEMsQ0FBc0MsQ0FDbENQLFVBQVUsQ0FBQyxJQUFELENBQVYsQ0FDSCxDQUNKLENBSlEsQ0FJTixDQUFDSixJQUFJLENBQUNVLEdBQU4sQ0FKTSxDQUFULENBT0EsTUFDSSxrRkFDSSxTQUFTLENBQUcsYUFBWVAsT0FBTyxDQUFHLFNBQUgsQ0FBZSxFQUFHLEVBRHJELENBRUksS0FBSyxDQUFFLENBQUVTLGVBQWUsQ0FBQ1QsT0FBTyxDQUFJLE9BQU1ILElBQUksQ0FBQ1UsR0FBTCxDQUFTQyxJQUFULENBQWNFLGdCQUFpQixHQUF6QyxDQUE4QyxFQUF2RSxDQUZYLFVBSUksd0VBQUMsbURBQUQsWUFDSSx1RUFBQyxtREFBRCxXQUNJLDhFQUFLLEdBQUcsQ0FBRUMscURBQVYsRUFESixFQURKLENBSUksdUVBQUMsbURBQUQsRUFBSyxTQUFTLENBQUMsK0NBQWYsVUFDSSx1RUFBQyx5REFBRCxJQURKLEVBSkosQ0FPS1gsT0FBTyxDQUFHLHVFQUFDLG1EQUFELEVBQU0sSUFBSSxDQUFFSCxJQUFJLENBQUNVLEdBQUwsQ0FBU0MsSUFBckIsRUFBSCxDQUFtQyw4SUFQL0MsR0FKSixFQURKLENBZ0JILENBbENELENBb0NlSSx1SEFBTyxDQUFDbEIsTUFBRCxDQUF0QiIsImZpbGUiOiIuL3BhY2thZ2VzL2tpbmNhcmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gJ2Zyb250aXR5J1xuXG5pbXBvcnQgbG9nbyBmcm9tICcuLi8uLi9pbWcvbG9nby5wbmcnXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9wYXJ0cy9OYXZpZ2F0aW9uJ1xuaW1wb3J0IEhlcm8gZnJvbSAnLi4vcGFydHMvSGVybydcblxuY29uc3QgSGVhZGVyID0gKHsgZGF0YSwgc3RhdGUgfSkgPT4ge1xuXG4gICAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoe30pXG4gICAgY29uc3QgW2hhc0hlcm8sIHNldEhhc0hlcm9dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZighZGF0YS5pc0ZldGNoaW5nKSB7XG4gICAgICAgICAgICBzZXRQYWdlKHN0YXRlLnNvdXJjZVtkYXRhLnR5cGVdW2RhdGEuaWRdKVxuICAgICAgICB9XG4gICAgfSwgWyBkYXRhLmlzRmV0Y2hpbmcsIGRhdGEuaWQgXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmKHBhZ2UgJiYgcGFnZS5hY2YgJiYgcGFnZS5hY2YuaGVybykge1xuICAgICAgICAgICAgc2V0SGFzSGVybyh0cnVlKVxuICAgICAgICB9XG4gICAgfSwgW3BhZ2UuYWNmXSlcbiAgICBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGtjLWhlYWRlciAke2hhc0hlcm8gPyAna2MtaGVybycgOiAnJ31gfVxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOmhhc0hlcm8gPyBgdXJsKCR7cGFnZS5hY2YuaGVyby5iYWNrZ3JvdW5kX2ltYWdlfSlgIDogJyd9fVxuICAgICAgICA+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSAvPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAge2hhc0hlcm8gPyA8SGVybyBoZXJvPXtwYWdlLmFjZi5oZXJvfSAvPiA6IDw+PC8+fVxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChIZWFkZXIpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/kincare-theme/src/components/layout/Header.js\n");

/***/ })

})