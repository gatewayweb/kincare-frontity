webpackHotUpdate("kincare-frontity",{

/***/ "./packages/kincare-theme/src/components/pages/Services.js":
/*!*****************************************************************!*\
  !*** ./packages/kincare-theme/src/components/pages/Services.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nconst Services=({state,page})=>{const{title,subtitle,services}=page.acf;console.log(services);for(const service in services){console.log(services[service].image);}const Content=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"section\", false?undefined:{target:\"e12ljb2d1\",label:\"Content\"})(\"background-color:\",state.theme.colors.lightGrayBlue,\";padding:4rem 1rem;margin-top:3rem;h1{font-weight:\",state.theme.weight.black,\";font-size:3rem;}.subtitle{font-size:1.5rem;}\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbS9EZXNrdG9wL1NpdGVzL2tpbmNhcmUtZnJvbnRpdHkvcGFja2FnZXMva2luY2FyZS10aGVtZS9zcmMvY29tcG9uZW50cy9wYWdlcy9TZXJ2aWNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXa0MiLCJmaWxlIjoiL2hvbWUvc2FtL0Rlc2t0b3AvU2l0ZXMva2luY2FyZS1mcm9udGl0eS9wYWNrYWdlcy9raW5jYXJlLXRoZW1lL3NyYy9jb21wb25lbnRzL3BhZ2VzL1NlcnZpY2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSAnZnJvbnRpdHknXG5cbmNvbnN0IFNlcnZpY2VzID0gKHsgc3RhdGUsIHBhZ2UgfSkgPT4ge1xuXG4gICAgY29uc3QgeyB0aXRsZSwgc3VidGl0bGUsIHNlcnZpY2VzIH0gPSBwYWdlLmFjZlxuICAgIGNvbnNvbGUubG9nKHNlcnZpY2VzKVxuICAgIGZvcihjb25zdCBzZXJ2aWNlIGluIHNlcnZpY2VzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlcnZpY2VzW3NlcnZpY2VdLmltYWdlKVxuICAgIH1cblxuICAgIGNvbnN0IENvbnRlbnQgPSBzdHlsZWQuc2VjdGlvbmBcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjoke3N0YXRlLnRoZW1lLmNvbG9ycy5saWdodEdyYXlCbHVlfTtcbiAgICAgICAgcGFkZGluZzo0cmVtIDFyZW07XG4gICAgICAgIG1hcmdpbi10b3A6M3JlbTtcbiAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6JHtzdGF0ZS50aGVtZS53ZWlnaHQuYmxhY2t9O1xuICAgICAgICAgICAgZm9udC1zaXplOjNyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxLjVyZW07XG4gICAgICAgIH1cbiAgICBgXG5cbiAgICBjb25zdCBTZXJ2aWNlID0gc3R5bGVkLmFydGljbGVgXG4gICAgICAgIGNvbG9yOiR7c3RhdGUudGhlbWUuY29sb3JzLmRhcmtHcmF5fTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xuICAgICAgICBwYWRkaW5nOjJyZW07XG4gICAgICAgIG1hcmdpbi10b3A6MnJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czo4cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgICAgIHRyYW5zaXRpb246YWxsIDUwMG1zO1xuICAgICAgICBtYXgtaGVpZ2h0OjgwMHB4O1xuICAgICAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiR7c3RhdGUudGhlbWUud2VpZ2h0LmJvbGR9O1xuICAgICAgICAgICAgY29sb3I6JHtzdGF0ZS50aGVtZS5jb2xvcnMuZGFya0dyYXl9O1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6NXB4IHNvbGlkICR7c3RhdGUudGhlbWUuY29sb3JzLm9yYW5nZX07XG4gICAgICAgICAgICBmb250LXNpemU6MS42cmVtO1xuICAgICAgICAgICAgcGFkZGluZzowLjVyZW0gMDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDoxcmVtO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDoycmVtO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOjEuMjVyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDoxLjc1cmVtO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDoxLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmNvdmVyLWltYWdlIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6OHB4O1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIGhlaWdodDozMDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcbiAgICAgICAgfVxuICAgICAgICB1bCB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MDtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6bm9uZTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MDtcbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOjFweCBzb2xpZCAke3N0YXRlLnRoZW1lLmNvbG9ycy5saWdodEdyYXl9O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6MC43NXJlbSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDVweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMnB4KTtcbiAgICAgICAgfVxuICAgIGBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250ZW50PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHBiLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+e3N1YnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiB7c2VydmljZXMubWFwKHNlcnZpY2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBjb2wtMTIgY29sLW1kLTYgcGItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VydmljZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY292ZXItaW1hZ2VcIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgke3NlcnZpY2UuaW1hZ2V9KWAgfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3NlcnZpY2UubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3NlcnZpY2UuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlLmZvcm1hdHRlZEJ1bGxldHMubWFwKHBvaW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57cG9pbnR9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZXJ2aWNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KX0gKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db250ZW50PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChTZXJ2aWNlcykiXX0= */\"));const Service=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"article\", false?undefined:{target:\"e12ljb2d0\",label:\"Service\"})(\"color:\",state.theme.colors.darkGray,\";background-color:#ffffff;padding:2rem;margin-top:2rem;border-radius:8px;box-shadow:0px 15px 20px rgba(0, 0, 0, 0.05);height:100%;transition:all 500ms;max-height:800px;overflow:hidden;h3{font-weight:\",state.theme.weight.bold,\";color:\",state.theme.colors.darkGray,\";border-left:5px solid \",state.theme.colors.orange,\";font-size:1.6rem;padding:0.5rem 0;padding-left:1rem;margin-top:2rem;}p{font-size:1.25rem;line-height:1.75rem;margin-top:1.5rem;}.cover-image{border-radius:8px;width:100%;height:300px;background-size:cover;background-repeat:no-repeat;}ul{padding-left:0;list-style:none;margin-bottom:0;li{border-top:1px solid \",state.theme.colors.lightGray,\";padding:0.75rem 0;}}&:hover{box-shadow:0px 5px 20px rgba(0, 0, 0, 0.1);transform:translateY(-12px);}\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbS9EZXNrdG9wL1NpdGVzL2tpbmNhcmUtZnJvbnRpdHkvcGFja2FnZXMva2luY2FyZS10aGVtZS9zcmMvY29tcG9uZW50cy9wYWdlcy9TZXJ2aWNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QmtDIiwiZmlsZSI6Ii9ob21lL3NhbS9EZXNrdG9wL1NpdGVzL2tpbmNhcmUtZnJvbnRpdHkvcGFja2FnZXMva2luY2FyZS10aGVtZS9zcmMvY29tcG9uZW50cy9wYWdlcy9TZXJ2aWNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gJ2Zyb250aXR5J1xuXG5jb25zdCBTZXJ2aWNlcyA9ICh7IHN0YXRlLCBwYWdlIH0pID0+IHtcblxuICAgIGNvbnN0IHsgdGl0bGUsIHN1YnRpdGxlLCBzZXJ2aWNlcyB9ID0gcGFnZS5hY2ZcbiAgICBjb25zb2xlLmxvZyhzZXJ2aWNlcylcbiAgICBmb3IoY29uc3Qgc2VydmljZSBpbiBzZXJ2aWNlcykge1xuICAgICAgICBjb25zb2xlLmxvZyhzZXJ2aWNlc1tzZXJ2aWNlXS5pbWFnZSlcbiAgICB9XG5cbiAgICBjb25zdCBDb250ZW50ID0gc3R5bGVkLnNlY3Rpb25gXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6JHtzdGF0ZS50aGVtZS5jb2xvcnMubGlnaHRHcmF5Qmx1ZX07XG4gICAgICAgIHBhZGRpbmc6NHJlbSAxcmVtO1xuICAgICAgICBtYXJnaW4tdG9wOjNyZW07XG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiR7c3RhdGUudGhlbWUud2VpZ2h0LmJsYWNrfTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTozcmVtO1xuICAgICAgICB9XG4gICAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6MS41cmVtO1xuICAgICAgICB9XG4gICAgYFxuXG4gICAgY29uc3QgU2VydmljZSA9IHN0eWxlZC5hcnRpY2xlYFxuICAgICAgICBjb2xvcjoke3N0YXRlLnRoZW1lLmNvbG9ycy5kYXJrR3JheX07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcbiAgICAgICAgcGFkZGluZzoycmVtO1xuICAgICAgICBtYXJnaW4tdG9wOjJyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6OHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMTVweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgICB0cmFuc2l0aW9uOmFsbCA1MDBtcztcbiAgICAgICAgbWF4LWhlaWdodDo4MDBweDtcbiAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgICAgICBoMyB7XG4gICAgICAgICAgICBmb250LXdlaWdodDoke3N0YXRlLnRoZW1lLndlaWdodC5ib2xkfTtcbiAgICAgICAgICAgIGNvbG9yOiR7c3RhdGUudGhlbWUuY29sb3JzLmRhcmtHcmF5fTtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OjVweCBzb2xpZCAke3N0YXRlLnRoZW1lLmNvbG9ycy5vcmFuZ2V9O1xuICAgICAgICAgICAgZm9udC1zaXplOjEuNnJlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6MC41cmVtIDA7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MnJlbTtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxLjI1cmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6MS43NXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MS41cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5jb3Zlci1pbWFnZSB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjhweDtcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6MzAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XG4gICAgICAgIH1cbiAgICAgICAgdWwge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjA7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOm5vbmU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjA7XG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDoxcHggc29saWQgJHtzdGF0ZS50aGVtZS5jb2xvcnMubGlnaHRHcmF5fTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjAuNzVyZW0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTJweCk7XG4gICAgICAgIH1cbiAgICBgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGVudD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBwYi01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPntzdWJ0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICB7Lyoge3NlcnZpY2VzLm1hcChzZXJ2aWNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgY29sLTEyIGNvbC1tZC02IHBiLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlcnZpY2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdmVyLWltYWdlXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtzZXJ2aWNlLmltYWdlfSlgIH19PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntzZXJ2aWNlLm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzZXJ2aWNlLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VydmljZS5mb3JtYXR0ZWRCdWxsZXRzLm1hcChwb2ludCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+e3BvaW50fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VydmljZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSl9ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29udGVudD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoU2VydmljZXMpIl19 */\"));return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(Content,{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxs\"])(\"div\",{className:\"container\",children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"div\",{className:\"row justify-content-center pb-5\",children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxs\"])(\"div\",{className:\"col col-12\",children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"h1\",{children:title}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"div\",{className:\"subtitle\",children:subtitle})]})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"div\",{className:\"row justify-content-center\"})]})});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Services));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9raW5jYXJlLXRoZW1lL3NyYy9jb21wb25lbnRzL3BhZ2VzL1NlcnZpY2VzLmpzPzkzZDUiXSwibmFtZXMiOlsiU2VydmljZXMiLCJzdGF0ZSIsInBhZ2UiLCJ0aXRsZSIsInN1YnRpdGxlIiwic2VydmljZXMiLCJhY2YiLCJjb25zb2xlIiwibG9nIiwic2VydmljZSIsImltYWdlIiwiQ29udGVudCIsInRoZW1lIiwiY29sb3JzIiwibGlnaHRHcmF5Qmx1ZSIsIndlaWdodCIsImJsYWNrIiwiU2VydmljZSIsImRhcmtHcmF5IiwiYm9sZCIsIm9yYW5nZSIsImxpZ2h0R3JheSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBLEtBQU1BLFNBQVEsQ0FBRyxDQUFDLENBQUVDLEtBQUYsQ0FBU0MsSUFBVCxDQUFELEdBQXFCLENBRWxDLEtBQU0sQ0FBRUMsS0FBRixDQUFTQyxRQUFULENBQW1CQyxRQUFuQixFQUFnQ0gsSUFBSSxDQUFDSSxHQUEzQyxDQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsUUFBWixFQUNBLElBQUksS0FBTUksUUFBVixHQUFxQkosU0FBckIsQ0FBK0IsQ0FDM0JFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxRQUFRLENBQUNJLE9BQUQsQ0FBUixDQUFrQkMsS0FBOUIsRUFDSCxDQUVELEtBQU1DLFFBQU8sOElBQ1VWLEtBQUssQ0FBQ1csS0FBTixDQUFZQyxNQUFaLENBQW1CQyxhQUQ3QixzREFLU2IsS0FBSyxDQUFDVyxLQUFOLENBQVlHLE1BQVosQ0FBbUJDLEtBTDVCLGtsS0FBYixDQWFBLEtBQU1DLFFBQU8sbUlBQ0RoQixLQUFLLENBQUNXLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkssUUFEbEIsMk1BWVNqQixLQUFLLENBQUNXLEtBQU4sQ0FBWUcsTUFBWixDQUFtQkksSUFaNUIsV0FhR2xCLEtBQUssQ0FBQ1csS0FBTixDQUFZQyxNQUFaLENBQW1CSyxRQWJ0QiwyQkFjbUJqQixLQUFLLENBQUNXLEtBQU4sQ0FBWUMsTUFBWixDQUFtQk8sTUFkdEMseVRBcUNzQm5CLEtBQUssQ0FBQ1csS0FBTixDQUFZQyxNQUFaLENBQW1CUSxTQXJDekMsMG9LQUFiLENBK0NBLE1BQ0ksd0VBQUMsT0FBRCxXQUNJLCtFQUFLLFNBQVMsQ0FBQyxXQUFmLFdBQ0ksOEVBQUssU0FBUyxDQUFDLGlDQUFmLFVBQ0ksK0VBQUssU0FBUyxDQUFDLFlBQWYsV0FDSSxzRkFBS2xCLEtBQUwsRUFESixDQUVJLDhFQUFLLFNBQVMsQ0FBQyxVQUFmLFVBQTJCQyxRQUEzQixFQUZKLEdBREosRUFESixDQU9JLDhFQUFLLFNBQVMsQ0FBQyw0QkFBZixFQVBKLEdBREosRUFESixDQWdDSCxDQXBHRCxDQXNHZWtCLHVIQUFPLENBQUN0QixRQUFELENBQXRCIiwiZmlsZSI6Ii4vcGFja2FnZXMva2luY2FyZS10aGVtZS9zcmMvY29tcG9uZW50cy9wYWdlcy9TZXJ2aWNlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gJ2Zyb250aXR5J1xuXG5jb25zdCBTZXJ2aWNlcyA9ICh7IHN0YXRlLCBwYWdlIH0pID0+IHtcblxuICAgIGNvbnN0IHsgdGl0bGUsIHN1YnRpdGxlLCBzZXJ2aWNlcyB9ID0gcGFnZS5hY2ZcbiAgICBjb25zb2xlLmxvZyhzZXJ2aWNlcylcbiAgICBmb3IoY29uc3Qgc2VydmljZSBpbiBzZXJ2aWNlcykge1xuICAgICAgICBjb25zb2xlLmxvZyhzZXJ2aWNlc1tzZXJ2aWNlXS5pbWFnZSlcbiAgICB9XG5cbiAgICBjb25zdCBDb250ZW50ID0gc3R5bGVkLnNlY3Rpb25gXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6JHtzdGF0ZS50aGVtZS5jb2xvcnMubGlnaHRHcmF5Qmx1ZX07XG4gICAgICAgIHBhZGRpbmc6NHJlbSAxcmVtO1xuICAgICAgICBtYXJnaW4tdG9wOjNyZW07XG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiR7c3RhdGUudGhlbWUud2VpZ2h0LmJsYWNrfTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTozcmVtO1xuICAgICAgICB9XG4gICAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6MS41cmVtO1xuICAgICAgICB9XG4gICAgYFxuXG4gICAgY29uc3QgU2VydmljZSA9IHN0eWxlZC5hcnRpY2xlYFxuICAgICAgICBjb2xvcjoke3N0YXRlLnRoZW1lLmNvbG9ycy5kYXJrR3JheX07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcbiAgICAgICAgcGFkZGluZzoycmVtO1xuICAgICAgICBtYXJnaW4tdG9wOjJyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6OHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMTVweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgICB0cmFuc2l0aW9uOmFsbCA1MDBtcztcbiAgICAgICAgbWF4LWhlaWdodDo4MDBweDtcbiAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgICAgICBoMyB7XG4gICAgICAgICAgICBmb250LXdlaWdodDoke3N0YXRlLnRoZW1lLndlaWdodC5ib2xkfTtcbiAgICAgICAgICAgIGNvbG9yOiR7c3RhdGUudGhlbWUuY29sb3JzLmRhcmtHcmF5fTtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OjVweCBzb2xpZCAke3N0YXRlLnRoZW1lLmNvbG9ycy5vcmFuZ2V9O1xuICAgICAgICAgICAgZm9udC1zaXplOjEuNnJlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6MC41cmVtIDA7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MnJlbTtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxLjI1cmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6MS43NXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MS41cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5jb3Zlci1pbWFnZSB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjhweDtcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6MzAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XG4gICAgICAgIH1cbiAgICAgICAgdWwge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjA7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOm5vbmU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjA7XG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDoxcHggc29saWQgJHtzdGF0ZS50aGVtZS5jb2xvcnMubGlnaHRHcmF5fTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjAuNzVyZW0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTJweCk7XG4gICAgICAgIH1cbiAgICBgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGVudD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBwYi01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPntzdWJ0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICB7Lyoge3NlcnZpY2VzLm1hcChzZXJ2aWNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgY29sLTEyIGNvbC1tZC02IHBiLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlcnZpY2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdmVyLWltYWdlXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtzZXJ2aWNlLmltYWdlfSlgIH19PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntzZXJ2aWNlLm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzZXJ2aWNlLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VydmljZS5mb3JtYXR0ZWRCdWxsZXRzLm1hcChwb2ludCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+e3BvaW50fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VydmljZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSl9ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29udGVudD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoU2VydmljZXMpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/kincare-theme/src/components/pages/Services.js\n");

/***/ })

})