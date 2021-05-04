webpackHotUpdate("kincare-frontity",{

/***/ "./packages/kincare-theme/src/styles.css":
/*!***********************************************!*\
  !*** ./packages/kincare-theme/src/styles.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,400&display=swap');\\n@import url('https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@500;800&display=swap');\\n\\n* {\\n    font-family: 'Lato', 'sans-serif';\\n}\\n\\na {\\n    color:#2A58A7;\\n    text-decoration:none;\\n    font-size:16px;\\n}\\n\\n.kc-header {\\n    padding-top:2rem;\\n    transition:all 500ms;\\n}\\n.kc-hero {\\n    min-height:500px;\\n    position:relative;\\n    background-size:cover;\\n    background-position:center center;\\n    text-align:center;\\n}\\n.kc-hero:before {\\n    content: '';\\n    height:100%;\\n    width:100%;\\n    position:absolute;\\n    top:0;\\n    left:0;\\n    background: rgb(255,255,255);\\n    background: rgba(255,255,255,0.75);\\n    z-index:0;\\n}\\n.header-svg {\\n    margin-top:3rem;\\n}\\n.header-svg-2 {\\n    position:absolute;\\n    top:-10px;\\n    opacity:0.5;\\n    width:90%;\\n    right:0;\\n}\\n.header-svg-wrap {\\n    position:relative;\\n    width:100%;\\n}\\n\\n.hero-content {\\n    z-index:1;\\n    position:relative;\\n}\\n.header-content {\\n    z-index:2;\\n    position:relative;\\n}\\n\\nh1, h2, h1 > *, h2 > * {\\n    font-family: 'Abhaya Libre', serif;\\n    font-weight:800;\\n}\\n\\n.site-logo {\\n    width:150px;\\n    max-width:100%;\\n}\\n.show-mobile-menu {\\n    position:fixed;\\n    width:100%;\\n    height:100vh;\\n}\\n\\n.gw-btn {\\noutline:none;\\nborder:none;\\nbackground-color:#2A58A7;\\nfont-size:1.3rem;\\ncolor:#ffffff;\\nborder-radius:8px;\\nfont-weight:900;\\npadding:0.75rem 1.5rem;\\ntransition:all 250ms;\\n&.orange {\\n    background-color:#F2822C;\\n}\\n&:hover {\\n    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.15);\\n}\\n\\n@media (min-width: 768px) {\\n    .kc-hero {\\n        min-height:600px;\\n        text-align:left;\\n    }\\n    .kc-hero:before {\\n        background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 100%);\\n    }\\n    .site-logo {\\n        width:auto;\\n    }\\n    .header-svg {\\n        margin-top:0;\\n    }\\n}\\n@media (min-width: 992px) {\\n    .show-mobile-menu {\\n        position:static;\\n        height:auto;\\n    }\\n}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9raW5jYXJlLXRoZW1lL3NyYy9zdHlsZXMuY3NzP2QyYjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZSwySUFBNEUsTUFBTSxNQUFNLE1BQU0scUJBQXFCLDhFQUE4RSxtQkFBbUIsT0FBTyx3Q0FBd0MsR0FBRyxPQUFPLG9CQUFvQiwyQkFBMkIscUJBQXFCLEdBQUcsZ0JBQWdCLHVCQUF1QiwyQkFBMkIsR0FBRyxZQUFZLHVCQUF1Qix3QkFBd0IsNEJBQTRCLHdDQUF3Qyx3QkFBd0IsR0FBRyxtQkFBbUIsa0JBQWtCLGtCQUFrQixpQkFBaUIsd0JBQXdCLFlBQVksYUFBYSxtQ0FBbUMseUNBQXlDLGdCQUFnQixHQUFHLGVBQWUsc0JBQXNCLEdBQUcsaUJBQWlCLHdCQUF3QixnQkFBZ0Isa0JBQWtCLGdCQUFnQixjQUFjLEdBQUcsb0JBQW9CLHdCQUF3QixpQkFBaUIsR0FBRyxtQkFBbUIsZ0JBQWdCLHdCQUF3QixHQUFHLG1CQUFtQixnQkFBZ0Isd0JBQXdCLEdBQUcsNEJBQTRCLHlDQUF5QyxzQkFBc0IsR0FBRyxnQkFBZ0Isa0JBQWtCLHFCQUFxQixHQUFHLHFCQUFxQixxQkFBcUIsaUJBQWlCLG1CQUFtQixHQUFHLGFBQWEsZUFBZSxjQUFjLDJCQUEyQixtQkFBbUIsZ0JBQWdCLG9CQUFvQixrQkFBa0IseUJBQXlCLHVCQUF1QixZQUFZLCtCQUErQixHQUFHLFdBQVcsa0VBQWtFLEdBQUcsK0JBQStCLGdCQUFnQiwyQkFBMkIsMEJBQTBCLE9BQU8sdUJBQXVCLGlHQUFpRyxPQUFPLGtCQUFrQixxQkFBcUIsT0FBTyxtQkFBbUIsdUJBQXVCLE9BQU8sR0FBRyw2QkFBNkIseUJBQXlCLDBCQUEwQixzQkFBc0IsT0FBTyxHQUFHLENBQUMiLCJmaWxlIjoiLi9wYWNrYWdlcy9raW5jYXJlLXRoZW1lL3NyYy9zdHlsZXMuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDcwMDswLDkwMDsxLDQwMCZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BYmhheWErTGlicmU6d2dodEA1MDA7ODAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCAnc2Fucy1zZXJpZic7XFxufVxcblxcbmEge1xcbiAgICBjb2xvcjojMkE1OEE3O1xcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcXG4gICAgZm9udC1zaXplOjE2cHg7XFxufVxcblxcbi5rYy1oZWFkZXIge1xcbiAgICBwYWRkaW5nLXRvcDoycmVtO1xcbiAgICB0cmFuc2l0aW9uOmFsbCA1MDBtcztcXG59XFxuLmtjLWhlcm8ge1xcbiAgICBtaW4taGVpZ2h0OjUwMHB4O1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlciBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbn1cXG4ua2MtaGVybzpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICB0b3A6MDtcXG4gICAgbGVmdDowO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LDI1NSwyNTUpO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuNzUpO1xcbiAgICB6LWluZGV4OjA7XFxufVxcbi5oZWFkZXItc3ZnIHtcXG4gICAgbWFyZ2luLXRvcDozcmVtO1xcbn1cXG4uaGVhZGVyLXN2Zy0yIHtcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIHRvcDotMTBweDtcXG4gICAgb3BhY2l0eTowLjU7XFxuICAgIHdpZHRoOjkwJTtcXG4gICAgcmlnaHQ6MDtcXG59XFxuLmhlYWRlci1zdmctd3JhcCB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICB3aWR0aDoxMDAlO1xcbn1cXG5cXG4uaGVyby1jb250ZW50IHtcXG4gICAgei1pbmRleDoxO1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG59XFxuLmhlYWRlci1jb250ZW50IHtcXG4gICAgei1pbmRleDoyO1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG59XFxuXFxuaDEsIGgyLCBoMSA+ICosIGgyID4gKiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQWJoYXlhIExpYnJlJywgc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OjgwMDtcXG59XFxuXFxuLnNpdGUtbG9nbyB7XFxuICAgIHdpZHRoOjE1MHB4O1xcbiAgICBtYXgtd2lkdGg6MTAwJTtcXG59XFxuLnNob3ctbW9iaWxlLW1lbnUge1xcbiAgICBwb3NpdGlvbjpmaXhlZDtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgaGVpZ2h0OjEwMHZoO1xcbn1cXG5cXG4uZ3ctYnRuIHtcXG5vdXRsaW5lOm5vbmU7XFxuYm9yZGVyOm5vbmU7XFxuYmFja2dyb3VuZC1jb2xvcjojMkE1OEE3O1xcbmZvbnQtc2l6ZToxLjNyZW07XFxuY29sb3I6I2ZmZmZmZjtcXG5ib3JkZXItcmFkaXVzOjhweDtcXG5mb250LXdlaWdodDo5MDA7XFxucGFkZGluZzowLjc1cmVtIDEuNXJlbTtcXG50cmFuc2l0aW9uOmFsbCAyNTBtcztcXG4mLm9yYW5nZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I0YyODIyQztcXG59XFxuJjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMDBweCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgLmtjLWhlcm8ge1xcbiAgICAgICAgbWluLWhlaWdodDo2MDBweDtcXG4gICAgICAgIHRleHQtYWxpZ246bGVmdDtcXG4gICAgfVxcbiAgICAua2MtaGVybzpiZWZvcmUge1xcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMCkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMC44NSkgMTAwJSk7XFxuICAgIH1cXG4gICAgLnNpdGUtbG9nbyB7XFxuICAgICAgICB3aWR0aDphdXRvO1xcbiAgICB9XFxuICAgIC5oZWFkZXItc3ZnIHtcXG4gICAgICAgIG1hcmdpbi10b3A6MDtcXG4gICAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gICAgLnNob3ctbW9iaWxlLW1lbnUge1xcbiAgICAgICAgcG9zaXRpb246c3RhdGljO1xcbiAgICAgICAgaGVpZ2h0OmF1dG87XFxuICAgIH1cXG59XCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/kincare-theme/src/styles.css\n");

/***/ })

})