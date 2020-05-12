function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/1navbar/navbar.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/1navbar/navbar.component.ts ***!
    \*********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcApp1navbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _coronanumbers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../coronanumbers.service */
    "./src/app/coronanumbers.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(_CoronanumbersService) {
        var _this = this;

        _classCallCheck(this, NavbarComponent);

        this._CoronanumbersService = _CoronanumbersService;
        this.Date = "";

        this._CoronanumbersService.getCorona().subscribe(function (data) {
          _this.Date = data.Date;
          console.log(_this.Date);
        });
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_coronanumbers_service__WEBPACK_IMPORTED_MODULE_1__["CoronanumbersService"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 71,
      vars: 6,
      consts: [["id", "home", 1, "mobile-menu"], [1, "mobile-header"], [1, "header-logo", "w-50"], ["href", "index.html"], [1, "d-inline"], ["src", "assets/images/logo/01.png", "alt", "logo"], [1, "header-bar"], [1, "mobile-menu"], [1, "mobile-menu-area"], [1, "mobile-menu-area-inner"], [1, "lab-ul"], ["routerLink", "home"], ["routerLink", "country"], ["routerLink", "Virus-Spread"], ["routerLink", "symptoms"], ["routerLink", "Prevention"], ["routerLink", "doctors"], ["routerLink", "about"], ["id", "home", 1, "header-section", "transparent-header"], [1, "header-area"], [1, "container"], [1, "primary-menu"], [1, "logo", "w-100"], [1, "d-inline", "float-right", "text-white"], ["src", "assets/images/logo/03.png", "alt", "logo", 1, "d-inline", "float-left"], [1, "main-area"], [1, "main-menu"], ["routerLink", "home", "routerLinkActive", "active"], ["routerLink", "country", "routerLinkActive", "active"], ["routerLink", "Virus-Spread", "routerLinkActive", "active"], ["routerLink", "symptoms", "routerLinkActive", "active"], ["routerLink", "Prevention", "routerLinkActive", "active"], ["routerLink", "doctors", "routerLinkActive", "active"], ["routerLink", "about", "routerLinkActive", "active"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nav", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "countrys");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Virus Spread");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "symptoms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Prevention");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "doctors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "about-US");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "header", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Countries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Virus Spread");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Symptoms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Prevention");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Doctors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "About-US");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx.Date));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 4, ctx.Date), " ");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
      styles: [".active[_ngcontent-%COMP%]{\r\n    color: #e01044 !important;\r\n    font-size: 20px !important;\r\n    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    line-height:1em;\r\n    font-weight:bold !important;\r\n    text-shadow:0px 0px 0 rgb(196,-12,40),0px -1px 0 rgb(178,-30,22),0px -2px 0 rgb(159,-49,3),0px -3px 0 rgb(141,-67,-15),0px -4px 0 rgb(123,-85,-33),0px -5px 0 rgb(105,-103,-51),0px -6px 0 rgb(87,-121,-69),0px -7px 0 rgb(68,-140,-88),0px -8px 0 rgb(50,-158,-106),0px -9px 0 rgb(32,-176,-124),0px -10px 0 rgb(14,-194,-142),0px -11px 0 rgb(-5,-213,-161),0px -12px 0 rgb(-23,-231,-179),0px -13px 0 rgb(-41,-249,-197), 0px -14px 0 rgb(-59,-267,-215),0px -15px 14px rgba(0,0,0,1),0px -15px 1px rgba(0,0,0,0.5),0px 0px 14px rgba(0,0,0,.2) !important;\r\n}\r\n\r\n.transparent-header[_ngcontent-%COMP%]   .primary-menu[_ngcontent-%COMP%]   .main-area[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-size: 18px !important;\r\n    letter-spacing:2px ;\r\n    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\nline-height:1em;\r\ncolor:#fff;\r\nfont-weight:bold;\r\ntext-shadow:0px 0px 0 rgb(209,209,209),1px 0px 0 rgb(172,172,172),2px 0px 0 rgb(136,136,136),3px 0px 0 rgb(99,99,99),4px 0px 0 rgb(63,63,63),5px 0px 0 rgb(26,26,26),6px 0px 0 rgb(-10,-10,-10), 7px 0px 0 rgb(-46,-46,-46),8px 0px 7px rgba(0,0,0,0.35),8px 0px 1px rgba(0,0,0,0.5),0px 0px 7px rgba(0,0,0,.2);\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvMW5hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsdUVBQXVFO0lBQ3ZFLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsNmhCQUE2aEI7QUFDamlCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQix1RUFBdUU7QUFDM0UsZUFBZTtBQUNmLFVBQVU7QUFDVixnQkFBZ0I7QUFDaEIsK1NBQStTOztBQUUvUyIsImZpbGUiOiJzcmMvYXBwLzFuYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZle1xyXG4gICAgY29sb3I6ICNlMDEwNDQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6J0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBsaW5lLWhlaWdodDoxZW07XHJcbiAgICBmb250LXdlaWdodDpib2xkICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXNoYWRvdzowcHggMHB4IDAgcmdiKDE5NiwtMTIsNDApLDBweCAtMXB4IDAgcmdiKDE3OCwtMzAsMjIpLDBweCAtMnB4IDAgcmdiKDE1OSwtNDksMyksMHB4IC0zcHggMCByZ2IoMTQxLC02NywtMTUpLDBweCAtNHB4IDAgcmdiKDEyMywtODUsLTMzKSwwcHggLTVweCAwIHJnYigxMDUsLTEwMywtNTEpLDBweCAtNnB4IDAgcmdiKDg3LC0xMjEsLTY5KSwwcHggLTdweCAwIHJnYig2OCwtMTQwLC04OCksMHB4IC04cHggMCByZ2IoNTAsLTE1OCwtMTA2KSwwcHggLTlweCAwIHJnYigzMiwtMTc2LC0xMjQpLDBweCAtMTBweCAwIHJnYigxNCwtMTk0LC0xNDIpLDBweCAtMTFweCAwIHJnYigtNSwtMjEzLC0xNjEpLDBweCAtMTJweCAwIHJnYigtMjMsLTIzMSwtMTc5KSwwcHggLTEzcHggMCByZ2IoLTQxLC0yNDksLTE5NyksIDBweCAtMTRweCAwIHJnYigtNTksLTI2NywtMjE1KSwwcHggLTE1cHggMTRweCByZ2JhKDAsMCwwLDEpLDBweCAtMTVweCAxcHggcmdiYSgwLDAsMCwwLjUpLDBweCAwcHggMTRweCByZ2JhKDAsMCwwLC4yKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udHJhbnNwYXJlbnQtaGVhZGVyIC5wcmltYXJ5LW1lbnUgLm1haW4tYXJlYSAubWFpbi1tZW51IHVsIGxpIGEge1xyXG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzoycHggO1xyXG4gICAgZm9udC1mYW1pbHk6J0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbmxpbmUtaGVpZ2h0OjFlbTtcclxuY29sb3I6I2ZmZjtcclxuZm9udC13ZWlnaHQ6Ym9sZDtcclxudGV4dC1zaGFkb3c6MHB4IDBweCAwIHJnYigyMDksMjA5LDIwOSksMXB4IDBweCAwIHJnYigxNzIsMTcyLDE3MiksMnB4IDBweCAwIHJnYigxMzYsMTM2LDEzNiksM3B4IDBweCAwIHJnYig5OSw5OSw5OSksNHB4IDBweCAwIHJnYig2Myw2Myw2MyksNXB4IDBweCAwIHJnYigyNiwyNiwyNiksNnB4IDBweCAwIHJnYigtMTAsLTEwLC0xMCksIDdweCAwcHggMCByZ2IoLTQ2LC00NiwtNDYpLDhweCAwcHggN3B4IHJnYmEoMCwwLDAsMC4zNSksOHB4IDBweCAxcHggcmdiYSgwLDAsMCwwLjUpLDBweCAwcHggN3B4IHJnYmEoMCwwLDAsLjIpO1xyXG5cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [{
          type: _coronanumbers_service__WEBPACK_IMPORTED_MODULE_1__["CoronanumbersService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);

        this.contact = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("qq", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]),
          Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          Address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
          Company: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
          Messages: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(200), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(20)])
        });
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          console.log(this.contact);
        }
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 148,
      vars: 4,
      consts: [["id", "blog", 1, "blog-section", "home-3", "bgc-blog", "padding-tb"], [1, "container"], ["data-wow-delay", "0.3s", 1, "section-header", "wow", "fadeInUp"], [1, "section-wrapper"], [1, "row", "justify-content-center"], ["data-wow-delay", "0.3s", 1, "col-lg-4", "col-sm-6", "col-12", "wow", "fadeInUp"], [1, "post-item", "style-2"], [1, "post-item-inner"], [1, "post-thumb"], ["href", "#"], ["src", "assets/images/blog/01.jpg", "alt", "lab-blog"], [1, "post-content"], [1, "author-date"], ["href", "#", 1, "date"], [1, "icofont-calendar"], ["href", "#", 1, "admin"], [1, "icofont-ui-user"], [1, "post-footer"], ["href", "#", 1, "text-btn"], [1, "icofont-double-right"], ["href", "#", 1, "comments"], [1, "icofont-comment"], ["data-wow-delay", "0.4s", 1, "col-lg-4", "col-sm-6", "col-12", "wow", "fadeInUp"], ["src", "assets/images/blog/02.jpg", "alt", "lab-blog"], ["data-wow-delay", "0.5s", 1, "col-lg-4", "col-sm-6", "col-12", "wow", "fadeInUp"], ["src", "assets/images/blog/03.jpg", "alt", "lab-blog"], ["id", "contact", 1, "contact-us", "pt-5", "pb-0"], [1, "card-header", "text-capitalize", "font-italic", "wow", "fadeInLeft", "shadow-lg"], ["aria-hidden", "true", 1, "far", "fa-hand-point-down", "text-danger"], [1, "contact-wrap"], [1, "row"], ["data-wow-delay", "0.3s", 1, "col-lg-4", "col-md-6", "col-12", "wow", "fadeInLeft"], [1, "contact-area", "lab-ul"], [1, "contact-item"], [1, "contact-icon"], ["src", "assets/images/contact/icon/01.png", "alt", "contact"], [1, "content"], ["src", "assets/images/contact/icon/02.png", "alt", "contact"], ["href", "tel:+201221966084"], ["href", "tel:+201068644570"], ["src", "assets/images/contact/icon/03.png", "alt", "contact"], ["href", "mailto:AbanoubSamir@gamil.Com"], ["src", "assets/images/contact/icon/04.png", "alt", "contact"], ["href", "https://abanoubsamirnaguib.github.io/AbanoubSamir"], ["data-wow-delay", "0.4s", 1, "col-lg-8", "col-md-6", "col-xs-12", "wow", "fadeInRight"], ["action", "", "method", "POST", 1, "contact-form", 3, "formGroup", "ngSubmit"], ["type", "text", "name", "name", "placeholder", "Your Name", "formControlName", "Name", 1, "contact-input"], ["type", "email", "name", "email", "placeholder", "Your Email", "formControlName", "Email", 1, "contact-input"], ["type", "text", "name", "text", "placeholder", "Your Address", "formControlName", "Address", 1, "contact-input"], ["type", "text", "name", "text", "placeholder", "Your Company", "formControlName", "Company", 1, "contact-input"], ["rows", "5", "placeholder", "Your Messages", "formControlName", "Messages", 1, "contact-input"], ["type", "submit", "name", "submit", "value", "Send Message", 1, "lab-btn", 3, "disabled"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Our Most Popular Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Dynamically formulate fully tested catalysts for change via focused methods of empowerment Assertively extend alternative synergy and extensive web services.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Conulting Reporting Qouncil Arei Not Could More...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "July 12, 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Somrat Islam");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Pluoresntly customize pranci an plcentered customer service anding strategic amerials Interacvely cordinate performe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Financial Reporting Qouncil What Could More...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "July 12, 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Somrat Islam");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Pluoresntly customize pranci an plcentered customer service anding strategic amerials Interacvely cordinate performe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Consulting Reporting Qounc Arei Could More...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "July 12, 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Somrat Islam");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Pluoresntly customize pranci an plcentered customer service anding strategic amerials Interacvely cordinate performe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "section", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h2", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "contact me here ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "ul", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Our Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "4995 Al Haram, Giza ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " &&Fayoum,El-Centeral Street");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "+20 1221966084");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "+20 1068644570");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Email Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "AbanoubSamir@gamil.Com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Website Address:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "https://abanoubsamirnaguib. github.io/AbanoubSamir");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "form", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AboutComponent_Template_form_ngSubmit_141_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "textarea", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contact);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](!ctx.contact.valid ? "disabled" : "lab-btn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.contact.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: [".blog-section[_ngcontent-%COMP%]{\r\n    padding-top: 130px;\r\n}\r\n.disabled[_ngcontent-%COMP%]{\r\n  opacity:.5 ;\r\n}\r\n\r\n.blog-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%] {\r\n    margin-bottom: -10px; }\r\n.blog-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%] {\r\n      box-shadow: 0 0 10px rgba(136, 136, 136, 0.1);\r\n      margin-bottom: 25px; }\r\n.blog-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]:hover   .post-thumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        transform: scale(1.06); }\r\n.blog-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        transition: all 0.3s ease; }\r\n.blog-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%] {\r\n        padding: 20px; }\r\n.blog-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .blog-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n          color: #ff3372; }\r\n.blog-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   .lab-btn.style-2[_ngcontent-%COMP%] {\r\n          border-color: #ff3372;\r\n          box-shadow: none; }\r\n.blog-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   .post-footer[_ngcontent-%COMP%]   .text-btn[_ngcontent-%COMP%] {\r\n          font-weight: 700;\r\n          color: #000000; }\r\n.blog-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   .post-footer[_ngcontent-%COMP%]   .text-btn[_ngcontent-%COMP%]:hover {\r\n            color: #ff3372; }\r\n.blog-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   .post-footer[_ngcontent-%COMP%]   .text-btn[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\r\n              margin-left: 5px;\r\n              opacity: 1;\r\n              color: #ff3372; }\r\n.blog-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   .post-footer[_ngcontent-%COMP%]   .text-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n            opacity: 0;\r\n            margin-left: -15px;\r\n            font-weight: 700;\r\n            transition: all 0.3s ease; }\r\n.blog-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   .post-footer[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n          font-size: 24px;\r\n          color: #b2b2b2; }\r\n.blog-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   .post-footer[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n          border-radius: 100%;\r\n          width: 16px;\r\n          height: 16px;\r\n          line-height: 16px;\r\n          top: -8px;\r\n          left: 50%;\r\n          font-size: 12px;\r\n          text-align: center;\r\n          background: #ff3372;\r\n          color: #fff;\r\n          transform: translateX(-50%);\r\n          display: inline-block; }\r\n.blog-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\r\n      margin: -15px;\r\n      margin-bottom: 30px; }\r\n@media (min-width: 992px) {\r\n        .blog-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\r\n          margin-bottom: 0; } }\r\n.blog-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%] {\r\n        margin-bottom: 0; }\r\n.blog-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%] {\r\n          margin: 15px; }\r\n@media (min-width: 992px) {\r\n            .blog-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-thumb[_ngcontent-%COMP%] {\r\n              height: 314px; } }\r\n.blog-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-thumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n            height: 100%; }\r\n.blog-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-thumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n              width: 100%;\r\n              height: 100%; }\r\n.blog-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   .entry-meta[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\r\n            margin-bottom: 15px; }\r\n.blog-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   .lab-btn[_ngcontent-%COMP%] {\r\n            margin-top: 15px; }\r\n.blog-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n      justify-content: center;\r\n      margin: -15px; }\r\n.blog-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%] {\r\n        margin-bottom: 0;\r\n        width: calc(100% / 1); }\r\n@media (min-width: 576px) {\r\n          .blog-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%] {\r\n            width: calc(100% / 2); } }\r\n.blog-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%] {\r\n          margin: 15px; }\r\n.blog-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%] {\r\n            background: #fff;\r\n            padding: 25px 20px; }\r\n.blog-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n              font-size: 18px;\r\n              transition: all 0.3s ease; }\r\n.blog-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\r\n                color: #ff3372; }\r\n.blog-section.home-2[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .blog-section.home-2[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #fff; }\r\n.blog-section.home-7[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-weight: 400; }\r\n@media (min-width: 992px) {\r\n    .blog-section.home-7[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-thumb[_ngcontent-%COMP%] {\r\n      height: auto; } }\r\n@media (min-width: 992px) {\r\n    .blog-section.home-7[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-thumb[_ngcontent-%COMP%] {\r\n      height: 158px; } }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%] {\r\n    padding: 50px 30px;\r\n    background: #fff; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n      margin-bottom: 10px; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   .meta-post[_ngcontent-%COMP%] {\r\n      margin-bottom: 15px; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   .meta-post[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n        padding-right: 5px; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   .meta-post[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.admin[_ngcontent-%COMP%] {\r\n        padding-right: 20px; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\r\n      margin-bottom: 20px; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      height: 370px;\r\n      border: none; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\r\n      color: #fff;\r\n      margin: 0 0 20px;\r\n      padding: 25px;\r\n      background: #ff3372; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]::before {\r\n        width: 40px;\r\n        height: 40px;\r\n        color: #fff;\r\n        content: \"\\efcd\";\r\n        font-size: 30px;\r\n        font-family: IcoFont !important; }\r\n@media (max-width: 767px) {\r\n          .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]::before {\r\n            display: none; } }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        margin-bottom: 0; }\r\n@media (min-width: 768px) {\r\n          .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n            padding-left: 60px;\r\n            font-size: 18px;\r\n            line-height: 30px; } }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]   cite[_ngcontent-%COMP%] {\r\n        display: block;\r\n        text-align: right; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]   cite[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n          color: #fff; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      width: 100%; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   .tags-section[_ngcontent-%COMP%] {\r\n      justify-content: space-between;\r\n      align-items: center;\r\n      margin: 40px -30px -25px;\r\n      padding: 23px 30px 0;\r\n      border-top: 1px solid #ecf0f3; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   .tags-section[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n        width: calc(100% / 1); }\r\n@media (max-width: 575px) {\r\n          .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   .tags-section[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\r\n            justify-content: center; } }\r\n@media (min-width: 768px) {\r\n          .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   .tags-section[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\r\n            width: calc(100% / 2); } }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   .tags-section[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n          margin: 5px;\r\n          padding: 0; }\r\n@media (min-width: 992px) {\r\n            .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   .tags-section[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\r\n              margin-left: 0; } }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   .tags-section[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n            padding: 10px 20px;\r\n            border: 1px solid #ecf0f3;\r\n            color: #000000;\r\n            border-radius: 50px; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   .tags-section[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   .tags-section[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\r\n              background: #ff3372;\r\n              color: #fff;\r\n              border-color: #ff3372; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   .tags-section[_ngcontent-%COMP%]   .scocial-media[_ngcontent-%COMP%] {\r\n        margin-bottom: 0;\r\n        text-align: center;\r\n        width: calc(100% / 1);\r\n        margin-top: 20px; }\r\n@media (min-width: 576px) {\r\n          .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   .tags-section[_ngcontent-%COMP%]   .scocial-media[_ngcontent-%COMP%] {\r\n            text-align: right;\r\n            margin-top: 0; } }\r\n@media (min-width: 768px) {\r\n          .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-inner[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   .tags-section[_ngcontent-%COMP%]   .scocial-media[_ngcontent-%COMP%] {\r\n            width: calc(100% / 2); } }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .title-border[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    color: #000f3a;\r\n    margin: 0 0 28px 0;\r\n    padding: 20px 30px;\r\n    border-bottom: 1px solid #ecf0f3; }\r\n@media (min-width: 992px) {\r\n      .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .title-border[_ngcontent-%COMP%] {\r\n        padding: 20px 30px; } }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .navigations-part[_ngcontent-%COMP%] {\r\n    justify-content: space-between;\r\n    padding: 25px;\r\n    margin: 30px 0; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .navigations-part[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\r\n      margin: 0;\r\n      text-align: left; }\r\n@media (min-width: 768px) {\r\n        .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .navigations-part[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\r\n          width: calc(100% / 2); } }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .navigations-part[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n      text-align: right;\r\n      margin: 0;\r\n      justify-content: flex-end; }\r\n@media (max-width: 575px) {\r\n        .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .navigations-part[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n          margin-top: 20px; } }\r\n@media (min-width: 768px) {\r\n        .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .navigations-part[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n          width: calc(100% / 2); } }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .navigations-part[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .navigations-part[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n      color: #696969; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .navigations-part[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:hover, .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .navigations-part[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%], .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .navigations-part[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:hover, .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .navigations-part[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\r\n        color: #ff3372; }\r\n@media (min-width: 768px) {\r\n        .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .navigations-part[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .navigations-part[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n          max-width: 90%; } }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .navigations-part[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%], .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .navigations-part[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%], .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .navigations-part[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%], .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .navigations-part[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%] {\r\n      color: #000000;\r\n      font-weight: 700;\r\n      margin-bottom: 10px;\r\n      display: block;\r\n      width: 100%; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .navigations-part[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]:hover, .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .navigations-part[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%], .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .navigations-part[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%]:hover, .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .navigations-part[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%], .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .navigations-part[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]:hover, .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .navigations-part[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%], .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .navigations-part[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%]:hover, .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .navigations-part[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\r\n        color: #ff3372; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .authors[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 10px rgba(136, 136, 136, 0.1);\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 25px;\r\n    margin: 30px 0; }\r\n@media (max-width: 575px) {\r\n      .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .authors[_ngcontent-%COMP%] {\r\n        justify-content: center; } }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .authors[_ngcontent-%COMP%]   .author-thumb[_ngcontent-%COMP%] {\r\n      width: 160px;\r\n      text-align: center; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .authors[_ngcontent-%COMP%]   .author-thumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        width: 140px;\r\n        height: 140px;\r\n        border-radius: 100%; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .authors[_ngcontent-%COMP%]   .author-thumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n          border-radius: 100%; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .authors[_ngcontent-%COMP%]   .author-content[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      margin-top: 30px;\r\n      text-align: center; }\r\n@media (min-width: 576px) {\r\n        .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .authors[_ngcontent-%COMP%]   .author-content[_ngcontent-%COMP%] {\r\n          width: calc(100% - 170px);\r\n          margin-top: 0;\r\n          text-align: left; } }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .authors[_ngcontent-%COMP%]   .author-content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n        margin-bottom: 5px; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .authors[_ngcontent-%COMP%]   .author-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        margin-bottom: 10px; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .authors[_ngcontent-%COMP%]   .author-content[_ngcontent-%COMP%]   .scocial-media[_ngcontent-%COMP%] {\r\n        margin-bottom: 0; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .authors[_ngcontent-%COMP%]   .author-content[_ngcontent-%COMP%]   .scocial-media[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n          font-size: 16px;\r\n          width: 30px;\r\n          height: 30px;\r\n          line-height: 30px;\r\n          background: transparent; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .authors[_ngcontent-%COMP%]   .author-content[_ngcontent-%COMP%]   .scocial-media[_ngcontent-%COMP%]   a.facebook[_ngcontent-%COMP%] {\r\n            color: #3b5998; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .authors[_ngcontent-%COMP%]   .author-content[_ngcontent-%COMP%]   .scocial-media[_ngcontent-%COMP%]   a.twitter[_ngcontent-%COMP%] {\r\n            color: #55acee; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .authors[_ngcontent-%COMP%]   .author-content[_ngcontent-%COMP%]   .scocial-media[_ngcontent-%COMP%]   a.linkedin[_ngcontent-%COMP%] {\r\n            color: #007bb5; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .authors[_ngcontent-%COMP%]   .author-content[_ngcontent-%COMP%]   .scocial-media[_ngcontent-%COMP%]   a.vimeo[_ngcontent-%COMP%] {\r\n            color: #3b5998; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%] {\r\n    margin-top: 30px;\r\n    box-shadow: 0 0 10px rgba(136, 136, 136, 0.1); }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%] {\r\n      margin: 0;\r\n      padding: 20px; }\r\n@media (min-width: 992px) {\r\n        .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%] {\r\n          padding: 20px 30px; } }\r\n@media (max-width: 575px) {\r\n        .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%] {\r\n          margin: 0; } }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%] {\r\n        justify-content: space-between; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .com-thumb[_ngcontent-%COMP%] {\r\n          height: 50px;\r\n          width: 50px;\r\n          border-radius: 100%;\r\n          margin-bottom: 15px; }\r\n@media (min-width: 576px) {\r\n            .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .com-thumb[_ngcontent-%COMP%] {\r\n              margin-bottom: 0; } }\r\n@media (min-width: 768px) {\r\n            .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .com-thumb[_ngcontent-%COMP%] {\r\n              height: 80px;\r\n              width: 80px; } }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .com-content[_ngcontent-%COMP%] {\r\n          padding-bottom: 20px;\r\n          border-bottom: 1px solid #dbdbdb;\r\n          width: calc(100% - 100px); }\r\n@media (max-width: 575px) {\r\n            .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .com-content[_ngcontent-%COMP%] {\r\n              width: 100%; } }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .com-content[_ngcontent-%COMP%]:last-child {\r\n            border-bottom: none; }\r\n@media (min-width: 576px) {\r\n            .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .com-content[_ngcontent-%COMP%]   .com-title[_ngcontent-%COMP%] {\r\n              display: flex;\r\n              flex-wrap: wrap;\r\n              justify-content: space-between;\r\n              align-items: center; } }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .com-content[_ngcontent-%COMP%]   .com-title[_ngcontent-%COMP%]   .com-title-meta[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n            margin: 0;\r\n            font-size: 18px; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .com-content[_ngcontent-%COMP%]   .com-title[_ngcontent-%COMP%]   .com-title-meta[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n              color: #000000;\r\n              transition: all 0.3s ease; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .com-content[_ngcontent-%COMP%]   .com-title[_ngcontent-%COMP%]   .com-title-meta[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n                color: #ff3372; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .com-content[_ngcontent-%COMP%]   .com-title[_ngcontent-%COMP%]   .com-title-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n            font-size: 16px;\r\n            color: #696969;\r\n            display: inline-block;\r\n            margin-bottom: 5px; }\r\n@media (max-width: 575px) {\r\n            .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .com-content[_ngcontent-%COMP%]   .com-title[_ngcontent-%COMP%]   .reply[_ngcontent-%COMP%] {\r\n              margin-bottom: 10px;\r\n              display: inline-block; } }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .com-content[_ngcontent-%COMP%]   .com-title[_ngcontent-%COMP%]   .reply[_ngcontent-%COMP%]   .comment-reply-link[_ngcontent-%COMP%] {\r\n            color: #000000;\r\n            font-weight: 600;\r\n            font-size: 14px; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .com-content[_ngcontent-%COMP%]   .com-title[_ngcontent-%COMP%]   .reply[_ngcontent-%COMP%]   .comment-reply-link[_ngcontent-%COMP%]:hover {\r\n              color: #ff3372; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .com-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n            margin-bottom: 0;\r\n            line-height: 24px; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%] {\r\n          padding-right: 0; }\r\n@media (min-width: 576px) {\r\n            .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%] {\r\n              padding-left: 30px; } }\r\n@media (max-width: 575px) {\r\n            .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%] {\r\n              padding: 0px; } }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%] {\r\n            list-style: none;\r\n            overflow: hidden;\r\n            border-bottom: 1px solid #dbdbdb;\r\n            padding: 20px 0px; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]:last-child {\r\n              border: none;\r\n              padding-bottom: 0px; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comment-respond[_ngcontent-%COMP%] {\r\n    margin: 30px 0;\r\n    box-shadow: 0 0 10px rgba(136, 136, 136, 0.1); }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comment-respond[_ngcontent-%COMP%]   .add-comment[_ngcontent-%COMP%] {\r\n      padding: 10px 30px 40px; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comment-respond[_ngcontent-%COMP%]   .add-comment[_ngcontent-%COMP%]   .comment-form[_ngcontent-%COMP%] {\r\n        justify-content: space-between; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comment-respond[_ngcontent-%COMP%]   .add-comment[_ngcontent-%COMP%]   .comment-form[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%] {\r\n          color: #696969;\r\n          padding: 10px 15px;\r\n          width: 100%; }\r\n@media (min-width: 576px) {\r\n            .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comment-respond[_ngcontent-%COMP%]   .add-comment[_ngcontent-%COMP%]   .comment-form[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%] {\r\n              width: calc(100% / 2 - 15px); } }\r\n@media (min-width: 768px) {\r\n            .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comment-respond[_ngcontent-%COMP%]   .add-comment[_ngcontent-%COMP%]   .comment-form[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%]:nth-child(3) {\r\n              width: 100% !important; } }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comment-respond[_ngcontent-%COMP%]   .add-comment[_ngcontent-%COMP%]   .comment-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comment-respond[_ngcontent-%COMP%]   .add-comment[_ngcontent-%COMP%]   .comment-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n          background: #f1f6fa;\r\n          border: none;\r\n          outline: none;\r\n          margin-bottom: 20px; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comment-respond[_ngcontent-%COMP%]   .add-comment[_ngcontent-%COMP%]   .comment-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n          padding: 15px; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comment-respond[_ngcontent-%COMP%]   .add-comment[_ngcontent-%COMP%]   .comment-form[_ngcontent-%COMP%]   p.comment-form-cookies-consent[_ngcontent-%COMP%] {\r\n          width: 100%;\r\n          display: flex; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comment-respond[_ngcontent-%COMP%]   .add-comment[_ngcontent-%COMP%]   .comment-form[_ngcontent-%COMP%]   p.comment-form-cookies-consent[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n            margin-right: 10px;\r\n            width: auto;\r\n            margin-bottom: 0;\r\n            transform: translateY(5px); }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comment-respond[_ngcontent-%COMP%]   .add-comment[_ngcontent-%COMP%]   .comment-form[_ngcontent-%COMP%]   p.comment-form-cookies-consent[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n            margin-bottom: 0; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comment-respond[_ngcontent-%COMP%]   .add-comment[_ngcontent-%COMP%]   .comment-form[_ngcontent-%COMP%]   .lab-btn[_ngcontent-%COMP%] {\r\n          border: none;\r\n          outline: none;\r\n          text-transform: uppercase;\r\n          cursor: pointer;\r\n          background: #ff3372; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .comment-respond[_ngcontent-%COMP%]   .add-comment[_ngcontent-%COMP%]   .comment-form[_ngcontent-%COMP%]   .lab-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n            font-weight: 500; }\r\n.blog-section.blog-single[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\r\n    margin-bottom: 30px; }\r\n@media (min-width: 992px) {\r\n      .blog-section.blog-single[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\r\n        margin-bottom: 0; } }\r\n\r\n.contact-us[_ngcontent-%COMP%]   .contact-wrap[_ngcontent-%COMP%] {\r\n    padding: 30px;\r\n    margin-bottom: -30px;\r\n    background: #fff;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }\r\n.contact-us[_ngcontent-%COMP%]   .contact-wrap[_ngcontent-%COMP%]   .contact-title[_ngcontent-%COMP%] {\r\n      margin-bottom: 30px; }\r\n.contact-us[_ngcontent-%COMP%]   .contact-area[_ngcontent-%COMP%] {\r\n    margin: 0 0 30px; }\r\n@media (min-width: 768px) {\r\n      .contact-us[_ngcontent-%COMP%]   .contact-area[_ngcontent-%COMP%] {\r\n        margin: 0; } }\r\n.contact-us[_ngcontent-%COMP%]   .contact-area[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%] {\r\n      align-items: flex-start;\r\n      justify-content: space-between;\r\n      border-bottom: 1px solid #ecf0f3;\r\n      margin-bottom: 20px; }\r\n.contact-us[_ngcontent-%COMP%]   .contact-area[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%]:last-child {\r\n        margin-bottom: 0;\r\n        border-bottom: none; }\r\n.contact-us[_ngcontent-%COMP%]   .contact-area[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%]   .contact-icon[_ngcontent-%COMP%] {\r\n        width: 30px;\r\n        text-align: center; }\r\n.contact-us[_ngcontent-%COMP%]   .contact-area[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n        width: calc(100% - 45px); }\r\n.contact-us[_ngcontent-%COMP%]   .contact-area[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n          margin-bottom: 0; }\r\n.contact-us[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%] {\r\n    justify-content: space-between; }\r\n.contact-us[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   input.contact-input[_ngcontent-%COMP%] {\r\n      padding: 15px;\r\n      border: 1px solid #ecf0f3;\r\n      margin-bottom: 20px;\r\n      outline: none;\r\n      box-shadow: none; }\r\n@media (min-width: 992px) {\r\n        .contact-us[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   input.contact-input[_ngcontent-%COMP%] {\r\n          width: calc(100% / 2 - 15px); } }\r\n.contact-us[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   textarea.contact-input[_ngcontent-%COMP%] {\r\n      padding: 15px;\r\n      border: 1px solid #ecf0f3;\r\n      margin-bottom: 20px;\r\n      outline: none;\r\n      box-shadow: none; }\r\n.contact-us[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .lab-btn[_ngcontent-%COMP%] {\r\n      width: 180px;\r\n      color: #fff;\r\n      text-transform: uppercase;\r\n      cursor: pointer;\r\n      background: #ff3372; }\r\n.contact-us[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .lab-btn[_ngcontent-%COMP%]:hover {\r\n        transform: translateY(-5px); }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBRUEsMkRBQTJEO0FBQzNEO0lBQ0ksb0JBQW9CLEVBQUU7QUFDdEI7TUFDRSw2Q0FBNkM7TUFDN0MsbUJBQW1CLEVBQUU7QUFDckI7UUFDRSxzQkFBc0IsRUFBRTtBQUMxQjtRQUdFLHlCQUF5QixFQUFFO0FBQzdCO1FBQ0UsYUFBYSxFQUFFO0FBQ2Y7VUFDRSxjQUFjLEVBQUU7QUFDbEI7VUFDRSxxQkFBcUI7VUFDckIsZ0JBQWdCLEVBQUU7QUFDcEI7VUFDRSxnQkFBZ0I7VUFDaEIsY0FBYyxFQUFFO0FBQ2hCO1lBQ0UsY0FBYyxFQUFFO0FBQ2hCO2NBQ0UsZ0JBQWdCO2NBQ2hCLFVBQVU7Y0FDVixjQUFjLEVBQUU7QUFDcEI7WUFDRSxVQUFVO1lBQ1Ysa0JBQWtCO1lBQ2xCLGdCQUFnQjtZQUdoQix5QkFBeUIsRUFBRTtBQUMvQjtVQUNFLGVBQWU7VUFDZixjQUFjLEVBQUU7QUFDbEI7VUFHRSxtQkFBbUI7VUFDbkIsV0FBVztVQUNYLFlBQVk7VUFDWixpQkFBaUI7VUFDakIsU0FBUztVQUNULFNBQVM7VUFDVCxlQUFlO1VBQ2Ysa0JBQWtCO1VBQ2xCLG1CQUFtQjtVQUNuQixXQUFXO1VBQ1gsMkJBQTJCO1VBQzNCLHFCQUFxQixFQUFFO0FBQzdCO01BQ0UsYUFBYTtNQUNiLG1CQUFtQixFQUFFO0FBQ3JCO1FBQ0U7VUFDRSxnQkFBZ0IsRUFBRSxFQUFFO0FBQ3hCO1FBQ0UsZ0JBQWdCLEVBQUU7QUFDbEI7VUFDRSxZQUFZLEVBQUU7QUFDZDtZQUNFO2NBQ0UsYUFBYSxFQUFFLEVBQUU7QUFDckI7WUFDRSxZQUFZLEVBQUU7QUFDZDtjQUNFLFdBQVc7Y0FDWCxZQUFZLEVBQUU7QUFDbEI7WUFDRSxtQkFBbUIsRUFBRTtBQUN2QjtZQUNFLGdCQUFnQixFQUFFO0FBQzFCO01BQ0UsdUJBQXVCO01BQ3ZCLGFBQWEsRUFBRTtBQUNmO1FBQ0UsZ0JBQWdCO1FBQ2hCLHFCQUFxQixFQUFFO0FBQ3ZCO1VBQ0U7WUFDRSxxQkFBcUIsRUFBRSxFQUFFO0FBQzdCO1VBQ0UsWUFBWSxFQUFFO0FBQ2Q7WUFDRSxnQkFBZ0I7WUFDaEIsa0JBQWtCLEVBQUU7QUFDcEI7Y0FDRSxlQUFlO2NBR2YseUJBQXlCLEVBQUU7QUFDM0I7Z0JBQ0UsY0FBYyxFQUFFO0FBQzlCO0lBQ0UsV0FBVyxFQUFFO0FBQ2Y7SUFDRSxnQkFBZ0IsRUFBRTtBQUNwQjtJQUNFO01BQ0UsWUFBWSxFQUFFLEVBQUU7QUFDcEI7SUFDRTtNQUNFLGFBQWEsRUFBRSxFQUFFO0FBQ3JCO0lBQ0UsV0FBVyxFQUFFO0FBQ2Y7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUU7QUFDbEI7TUFDRSxtQkFBbUIsRUFBRTtBQUN2QjtNQUNFLG1CQUFtQixFQUFFO0FBQ3JCO1FBQ0Usa0JBQWtCLEVBQUU7QUFDdEI7UUFDRSxtQkFBbUIsRUFBRTtBQUN6QjtNQUNFLG1CQUFtQixFQUFFO0FBQ3ZCO01BQ0UsV0FBVztNQUNYLGFBQWE7TUFDYixZQUFZLEVBQUU7QUFDaEI7TUFDRSxXQUFXO01BQ1gsZ0JBQWdCO01BQ2hCLGFBQWE7TUFDYixtQkFBbUIsRUFBRTtBQUNyQjtRQUNFLFdBQVc7UUFDWCxZQUFZO1FBQ1osV0FBVztRQUNYLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsK0JBQStCLEVBQUU7QUFDakM7VUFDRTtZQUNFLGFBQWEsRUFBRSxFQUFFO0FBQ3ZCO1FBQ0UsZ0JBQWdCLEVBQUU7QUFDbEI7VUFDRTtZQUNFLGtCQUFrQjtZQUNsQixlQUFlO1lBQ2YsaUJBQWlCLEVBQUUsRUFBRTtBQUMzQjtRQUNFLGNBQWM7UUFDZCxpQkFBaUIsRUFBRTtBQUNuQjtVQUNFLFdBQVcsRUFBRTtBQUNuQjtNQUNFLFdBQVcsRUFBRTtBQUNmO01BQ0UsOEJBQThCO01BQzlCLG1CQUFtQjtNQUNuQix3QkFBd0I7TUFDeEIsb0JBQW9CO01BQ3BCLDZCQUE2QixFQUFFO0FBQy9CO1FBQ0UsU0FBUztRQUNULHFCQUFxQixFQUFFO0FBQ3ZCO1VBQ0U7WUFDRSx1QkFBdUIsRUFBRSxFQUFFO0FBQy9CO1VBQ0U7WUFDRSxxQkFBcUIsRUFBRSxFQUFFO0FBQzdCO1VBQ0UsV0FBVztVQUNYLFVBQVUsRUFBRTtBQUNaO1lBQ0U7Y0FDRSxjQUFjLEVBQUUsRUFBRTtBQUN0QjtZQUNFLGtCQUFrQjtZQUNsQix5QkFBeUI7WUFDekIsY0FBYztZQUdkLG1CQUFtQixFQUFFO0FBQ3JCO2NBQ0UsbUJBQW1CO2NBQ25CLFdBQVc7Y0FDWCxxQkFBcUIsRUFBRTtBQUMvQjtRQUNFLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIscUJBQXFCO1FBQ3JCLGdCQUFnQixFQUFFO0FBQ2xCO1VBQ0U7WUFDRSxpQkFBaUI7WUFDakIsYUFBYSxFQUFFLEVBQUU7QUFDckI7VUFDRTtZQUNFLHFCQUFxQixFQUFFLEVBQUU7QUFDbkM7SUFDRSxlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0NBQWdDLEVBQUU7QUFDbEM7TUFDRTtRQUNFLGtCQUFrQixFQUFFLEVBQUU7QUFDNUI7SUFDRSw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLGNBQWMsRUFBRTtBQUNoQjtNQUNFLFNBQVM7TUFDVCxnQkFBZ0IsRUFBRTtBQUNsQjtRQUNFO1VBQ0UscUJBQXFCLEVBQUUsRUFBRTtBQUMvQjtNQUNFLGlCQUFpQjtNQUNqQixTQUFTO01BQ1QseUJBQXlCLEVBQUU7QUFDM0I7UUFDRTtVQUNFLGdCQUFnQixFQUFFLEVBQUU7QUFDeEI7UUFDRTtVQUNFLHFCQUFxQixFQUFFLEVBQUU7QUFDL0I7TUFDRSxjQUFjLEVBQUU7QUFDaEI7UUFDRSxjQUFjLEVBQUU7QUFDbEI7UUFDRTtVQUNFLGNBQWMsRUFBRSxFQUFFO0FBQ3hCO01BQ0UsY0FBYztNQUNkLGdCQUFnQjtNQUNoQixtQkFBbUI7TUFDbkIsY0FBYztNQUNkLFdBQVcsRUFBRTtBQUNiO1FBQ0UsY0FBYyxFQUFFO0FBQ3RCO0lBQ0UsNkNBQTZDO0lBQzdDLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGNBQWMsRUFBRTtBQUNoQjtNQUNFO1FBQ0UsdUJBQXVCLEVBQUUsRUFBRTtBQUMvQjtNQUNFLFlBQVk7TUFDWixrQkFBa0IsRUFBRTtBQUNwQjtRQUNFLFlBQVk7UUFDWixhQUFhO1FBR2IsbUJBQW1CLEVBQUU7QUFDckI7VUFHRSxtQkFBbUIsRUFBRTtBQUMzQjtNQUNFLFdBQVc7TUFDWCxnQkFBZ0I7TUFDaEIsa0JBQWtCLEVBQUU7QUFDcEI7UUFDRTtVQUNFLHlCQUF5QjtVQUN6QixhQUFhO1VBQ2IsZ0JBQWdCLEVBQUUsRUFBRTtBQUN4QjtRQUNFLGtCQUFrQixFQUFFO0FBQ3RCO1FBQ0UsbUJBQW1CLEVBQUU7QUFDdkI7UUFDRSxnQkFBZ0IsRUFBRTtBQUNsQjtVQUNFLGVBQWU7VUFDZixXQUFXO1VBQ1gsWUFBWTtVQUNaLGlCQUFpQjtVQUNqQix1QkFBdUIsRUFBRTtBQUN6QjtZQUNFLGNBQWMsRUFBRTtBQUNsQjtZQUNFLGNBQWMsRUFBRTtBQUNsQjtZQUNFLGNBQWMsRUFBRTtBQUNsQjtZQUNFLGNBQWMsRUFBRTtBQUMxQjtJQUNFLGdCQUFnQjtJQUNoQiw2Q0FBNkMsRUFBRTtBQUMvQztNQUNFLFNBQVM7TUFDVCxhQUFhLEVBQUU7QUFDZjtRQUNFO1VBQ0Usa0JBQWtCLEVBQUUsRUFBRTtBQUMxQjtRQUNFO1VBQ0UsU0FBUyxFQUFFLEVBQUU7QUFDakI7UUFDRSw4QkFBOEIsRUFBRTtBQUNoQztVQUNFLFlBQVk7VUFDWixXQUFXO1VBQ1gsbUJBQW1CO1VBQ25CLG1CQUFtQixFQUFFO0FBQ3JCO1lBQ0U7Y0FDRSxnQkFBZ0IsRUFBRSxFQUFFO0FBQ3hCO1lBQ0U7Y0FDRSxZQUFZO2NBQ1osV0FBVyxFQUFFLEVBQUU7QUFDckI7VUFDRSxvQkFBb0I7VUFDcEIsZ0NBQWdDO1VBQ2hDLHlCQUF5QixFQUFFO0FBQzNCO1lBQ0U7Y0FDRSxXQUFXLEVBQUUsRUFBRTtBQUNuQjtZQUNFLG1CQUFtQixFQUFFO0FBQ3ZCO1lBQ0U7Y0FDRSxhQUFhO2NBQ2IsZUFBZTtjQUNmLDhCQUE4QjtjQUM5QixtQkFBbUIsRUFBRSxFQUFFO0FBQzNCO1lBQ0UsU0FBUztZQUNULGVBQWUsRUFBRTtBQUNqQjtjQUNFLGNBQWM7Y0FHZCx5QkFBeUIsRUFBRTtBQUMzQjtnQkFDRSxjQUFjLEVBQUU7QUFDdEI7WUFDRSxlQUFlO1lBQ2YsY0FBYztZQUNkLHFCQUFxQjtZQUNyQixrQkFBa0IsRUFBRTtBQUN0QjtZQUNFO2NBQ0UsbUJBQW1CO2NBQ25CLHFCQUFxQixFQUFFLEVBQUU7QUFDN0I7WUFDRSxjQUFjO1lBQ2QsZ0JBQWdCO1lBQ2hCLGVBQWUsRUFBRTtBQUNqQjtjQUNFLGNBQWMsRUFBRTtBQUNwQjtZQUNFLGdCQUFnQjtZQUNoQixpQkFBaUIsRUFBRTtBQUN2QjtVQUNFLGdCQUFnQixFQUFFO0FBQ2xCO1lBQ0U7Y0FDRSxrQkFBa0IsRUFBRSxFQUFFO0FBQzFCO1lBQ0U7Y0FDRSxZQUFZLEVBQUUsRUFBRTtBQUNwQjtZQUNFLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIsZ0NBQWdDO1lBQ2hDLGlCQUFpQixFQUFFO0FBQ25CO2NBQ0UsWUFBWTtjQUNaLG1CQUFtQixFQUFFO0FBQ2pDO0lBQ0UsY0FBYztJQUNkLDZDQUE2QyxFQUFFO0FBQy9DO01BQ0UsdUJBQXVCLEVBQUU7QUFDekI7UUFDRSw4QkFBOEIsRUFBRTtBQUNoQztVQUNFLGNBQWM7VUFDZCxrQkFBa0I7VUFDbEIsV0FBVyxFQUFFO0FBQ2I7WUFDRTtjQUNFLDRCQUE0QixFQUFFLEVBQUU7QUFDcEM7WUFDRTtjQUNFLHNCQUFzQixFQUFFLEVBQUU7QUFDaEM7VUFDRSxtQkFBbUI7VUFDbkIsWUFBWTtVQUNaLGFBQWE7VUFDYixtQkFBbUIsRUFBRTtBQUN2QjtVQUNFLGFBQWEsRUFBRTtBQUNqQjtVQUNFLFdBQVc7VUFDWCxhQUFhLEVBQUU7QUFDZjtZQUNFLGtCQUFrQjtZQUNsQixXQUFXO1lBQ1gsZ0JBQWdCO1lBQ2hCLDBCQUEwQixFQUFFO0FBQzlCO1lBQ0UsZ0JBQWdCLEVBQUU7QUFDdEI7VUFDRSxZQUFZO1VBQ1osYUFBYTtVQUNiLHlCQUF5QjtVQUN6QixlQUFlO1VBQ2YsbUJBQW1CLEVBQUU7QUFDckI7WUFDRSxnQkFBZ0IsRUFBRTtBQUM1QjtJQUNFLG1CQUFtQixFQUFFO0FBQ3JCO01BQ0U7UUFDRSxnQkFBZ0IsRUFBRSxFQUFFO0FBRXBCLGlFQUFpRTtBQUN2RTtJQUNFLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLHVDQUF1QyxFQUFFO0FBQ3pDO01BQ0UsbUJBQW1CLEVBQUU7QUFDekI7SUFDRSxnQkFBZ0IsRUFBRTtBQUNsQjtNQUNFO1FBQ0UsU0FBUyxFQUFFLEVBQUU7QUFDakI7TUFDRSx1QkFBdUI7TUFDdkIsOEJBQThCO01BQzlCLGdDQUFnQztNQUNoQyxtQkFBbUIsRUFBRTtBQUNyQjtRQUNFLGdCQUFnQjtRQUNoQixtQkFBbUIsRUFBRTtBQUN2QjtRQUNFLFdBQVc7UUFDWCxrQkFBa0IsRUFBRTtBQUN0QjtRQUNFLHdCQUF3QixFQUFFO0FBQzFCO1VBQ0UsZ0JBQWdCLEVBQUU7QUFDMUI7SUFDRSw4QkFBOEIsRUFBRTtBQUNoQztNQUNFLGFBQWE7TUFDYix5QkFBeUI7TUFDekIsbUJBQW1CO01BQ25CLGFBQWE7TUFDYixnQkFBZ0IsRUFBRTtBQUNsQjtRQUNFO1VBQ0UsNEJBQTRCLEVBQUUsRUFBRTtBQUN0QztNQUNFLGFBQWE7TUFDYix5QkFBeUI7TUFDekIsbUJBQW1CO01BQ25CLGFBQWE7TUFDYixnQkFBZ0IsRUFBRTtBQUNwQjtNQUNFLFlBQVk7TUFDWixXQUFXO01BQ1gseUJBQXlCO01BQ3pCLGVBQWU7TUFDZixtQkFBbUIsRUFBRTtBQUNyQjtRQUdFLDJCQUEyQixFQUFFIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9nLXNlY3Rpb257XHJcbiAgICBwYWRkaW5nLXRvcDogMTMwcHg7XHJcbn1cclxuLmRpc2FibGVke1xyXG4gIG9wYWNpdHk6LjUgO1xyXG59XHJcblxyXG4vKiBAQEBAQEBAQEBAQEBAICBCbG9nIFNlY3Rpb24gU3RhcnQgSGVyZSAgQEBAQEBAQEBAQEBAQEAgKi9cclxuLmJsb2ctc2VjdGlvbiAuc2VjdGlvbi13cmFwcGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4OyB9XHJcbiAgICAuYmxvZy1zZWN0aW9uIC5zZWN0aW9uLXdyYXBwZXIgLnBvc3QtaXRlbSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMTM2LCAxMzYsIDEzNiwgMC4xKTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDsgfVxyXG4gICAgICAuYmxvZy1zZWN0aW9uIC5zZWN0aW9uLXdyYXBwZXIgLnBvc3QtaXRlbSAucG9zdC1pdGVtLWlubmVyOmhvdmVyIC5wb3N0LXRodW1iIGEgaW1nIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDYpOyB9XHJcbiAgICAgIC5ibG9nLXNlY3Rpb24gLnNlY3Rpb24td3JhcHBlciAucG9zdC1pdGVtIC5wb3N0LWl0ZW0taW5uZXIgLnBvc3QtdGh1bWIgaW1nIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7IH1cclxuICAgICAgLmJsb2ctc2VjdGlvbiAuc2VjdGlvbi13cmFwcGVyIC5wb3N0LWl0ZW0gLnBvc3QtaXRlbS1pbm5lciAucG9zdC1jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4OyB9XHJcbiAgICAgICAgLmJsb2ctc2VjdGlvbiAuc2VjdGlvbi13cmFwcGVyIC5wb3N0LWl0ZW0gLnBvc3QtaXRlbS1pbm5lciAucG9zdC1jb250ZW50IGg1IGE6aG92ZXIsIC5ibG9nLXNlY3Rpb24gLnNlY3Rpb24td3JhcHBlciAucG9zdC1pdGVtIC5wb3N0LWl0ZW0taW5uZXIgLnBvc3QtY29udGVudCBoNCBhOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmYzMzcyOyB9XHJcbiAgICAgICAgLmJsb2ctc2VjdGlvbiAuc2VjdGlvbi13cmFwcGVyIC5wb3N0LWl0ZW0gLnBvc3QtaXRlbS1pbm5lciAucG9zdC1jb250ZW50IC5sYWItYnRuLnN0eWxlLTIge1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmYzMzcyO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTsgfVxyXG4gICAgICAgIC5ibG9nLXNlY3Rpb24gLnNlY3Rpb24td3JhcHBlciAucG9zdC1pdGVtIC5wb3N0LWl0ZW0taW5uZXIgLnBvc3QtY29udGVudCAucG9zdC1mb290ZXIgLnRleHQtYnRuIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBjb2xvcjogIzAwMDAwMDsgfVxyXG4gICAgICAgICAgLmJsb2ctc2VjdGlvbiAuc2VjdGlvbi13cmFwcGVyIC5wb3N0LWl0ZW0gLnBvc3QtaXRlbS1pbm5lciAucG9zdC1jb250ZW50IC5wb3N0LWZvb3RlciAudGV4dC1idG46aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmMzM3MjsgfVxyXG4gICAgICAgICAgICAuYmxvZy1zZWN0aW9uIC5zZWN0aW9uLXdyYXBwZXIgLnBvc3QtaXRlbSAucG9zdC1pdGVtLWlubmVyIC5wb3N0LWNvbnRlbnQgLnBvc3QtZm9vdGVyIC50ZXh0LWJ0bjpob3ZlciBpIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZjMzNzI7IH1cclxuICAgICAgICAgIC5ibG9nLXNlY3Rpb24gLnNlY3Rpb24td3JhcHBlciAucG9zdC1pdGVtIC5wb3N0LWl0ZW0taW5uZXIgLnBvc3QtY29udGVudCAucG9zdC1mb290ZXIgLnRleHQtYnRuIGkge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOyB9XHJcbiAgICAgICAgLmJsb2ctc2VjdGlvbiAuc2VjdGlvbi13cmFwcGVyIC5wb3N0LWl0ZW0gLnBvc3QtaXRlbS1pbm5lciAucG9zdC1jb250ZW50IC5wb3N0LWZvb3RlciAuY29tbWVudHMgaSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICBjb2xvcjogI2IyYjJiMjsgfVxyXG4gICAgICAgIC5ibG9nLXNlY3Rpb24gLnNlY3Rpb24td3JhcHBlciAucG9zdC1pdGVtIC5wb3N0LWl0ZW0taW5uZXIgLnBvc3QtY29udGVudCAucG9zdC1mb290ZXIgLmNvbW1lbnRzIHNwYW4ge1xyXG4gICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICB0b3A6IC04cHg7XHJcbiAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmYzMzcyO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cclxuICAgIC5ibG9nLXNlY3Rpb24gLnNlY3Rpb24td3JhcHBlciAubGVmdCB7XHJcbiAgICAgIG1hcmdpbjogLTE1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgLmJsb2ctc2VjdGlvbiAuc2VjdGlvbi13cmFwcGVyIC5sZWZ0IHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7IH0gfVxyXG4gICAgICAuYmxvZy1zZWN0aW9uIC5zZWN0aW9uLXdyYXBwZXIgLmxlZnQgLnBvc3QtaXRlbSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDsgfVxyXG4gICAgICAgIC5ibG9nLXNlY3Rpb24gLnNlY3Rpb24td3JhcHBlciAubGVmdCAucG9zdC1pdGVtIC5wb3N0LWl0ZW0taW5uZXIge1xyXG4gICAgICAgICAgbWFyZ2luOiAxNXB4OyB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgLmJsb2ctc2VjdGlvbiAuc2VjdGlvbi13cmFwcGVyIC5sZWZ0IC5wb3N0LWl0ZW0gLnBvc3QtaXRlbS1pbm5lciAucG9zdC10aHVtYiB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMTRweDsgfSB9XHJcbiAgICAgICAgICAuYmxvZy1zZWN0aW9uIC5zZWN0aW9uLXdyYXBwZXIgLmxlZnQgLnBvc3QtaXRlbSAucG9zdC1pdGVtLWlubmVyIC5wb3N0LXRodW1iIGEge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7IH1cclxuICAgICAgICAgICAgLmJsb2ctc2VjdGlvbiAuc2VjdGlvbi13cmFwcGVyIC5sZWZ0IC5wb3N0LWl0ZW0gLnBvc3QtaXRlbS1pbm5lciAucG9zdC10aHVtYiBhIGltZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOyB9XHJcbiAgICAgICAgICAuYmxvZy1zZWN0aW9uIC5zZWN0aW9uLXdyYXBwZXIgLmxlZnQgLnBvc3QtaXRlbSAucG9zdC1pdGVtLWlubmVyIC5wb3N0LWNvbnRlbnQgLmVudHJ5LW1ldGEgLmRhdGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyB9XHJcbiAgICAgICAgICAuYmxvZy1zZWN0aW9uIC5zZWN0aW9uLXdyYXBwZXIgLmxlZnQgLnBvc3QtaXRlbSAucG9zdC1pdGVtLWlubmVyIC5wb3N0LWNvbnRlbnQgLmxhYi1idG4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4OyB9XHJcbiAgICAuYmxvZy1zZWN0aW9uIC5zZWN0aW9uLXdyYXBwZXIgLnJpZ2h0IHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogLTE1cHg7IH1cclxuICAgICAgLmJsb2ctc2VjdGlvbiAuc2VjdGlvbi13cmFwcGVyIC5yaWdodCAucG9zdC1pdGVtIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAxKTsgfVxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgICAgLmJsb2ctc2VjdGlvbiAuc2VjdGlvbi13cmFwcGVyIC5yaWdodCAucG9zdC1pdGVtIHtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvIDIpOyB9IH1cclxuICAgICAgICAuYmxvZy1zZWN0aW9uIC5zZWN0aW9uLXdyYXBwZXIgLnJpZ2h0IC5wb3N0LWl0ZW0gLnBvc3QtaXRlbS1pbm5lciB7XHJcbiAgICAgICAgICBtYXJnaW46IDE1cHg7IH1cclxuICAgICAgICAgIC5ibG9nLXNlY3Rpb24gLnNlY3Rpb24td3JhcHBlciAucmlnaHQgLnBvc3QtaXRlbSAucG9zdC1pdGVtLWlubmVyIC5wb3N0LWNvbnRlbnQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDIwcHg7IH1cclxuICAgICAgICAgICAgLmJsb2ctc2VjdGlvbiAuc2VjdGlvbi13cmFwcGVyIC5yaWdodCAucG9zdC1pdGVtIC5wb3N0LWl0ZW0taW5uZXIgLnBvc3QtY29udGVudCBoNiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTsgfVxyXG4gICAgICAgICAgICAgIC5ibG9nLXNlY3Rpb24gLnNlY3Rpb24td3JhcHBlciAucmlnaHQgLnBvc3QtaXRlbSAucG9zdC1pdGVtLWlubmVyIC5wb3N0LWNvbnRlbnQgaDY6aG92ZXIgYSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmMzM3MjsgfVxyXG4gIC5ibG9nLXNlY3Rpb24uaG9tZS0yIC5zZWN0aW9uLWhlYWRlciBoMiwgLmJsb2ctc2VjdGlvbi5ob21lLTIgLnNlY3Rpb24taGVhZGVyIHAge1xyXG4gICAgY29sb3I6ICNmZmY7IH1cclxuICAuYmxvZy1zZWN0aW9uLmhvbWUtNyAuc2VjdGlvbi1oZWFkZXIgaDQgc3BhbiB7XHJcbiAgICBmb250LXdlaWdodDogNDAwOyB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuYmxvZy1zZWN0aW9uLmhvbWUtNyAuc2VjdGlvbi13cmFwcGVyIC5sZWZ0IC5wb3N0LWl0ZW0gLnBvc3QtaXRlbS1pbm5lciAucG9zdC10aHVtYiB7XHJcbiAgICAgIGhlaWdodDogYXV0bzsgfSB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuYmxvZy1zZWN0aW9uLmhvbWUtNyAuc2VjdGlvbi13cmFwcGVyIC5yaWdodCAucG9zdC1pdGVtIC5wb3N0LWl0ZW0taW5uZXIgLnBvc3QtdGh1bWIge1xyXG4gICAgICBoZWlnaHQ6IDE1OHB4OyB9IH1cclxuICAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLnBvc3QtaXRlbSAucG9zdC1pdGVtLWlubmVyIC5wb3N0LXRodW1iIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTsgfVxyXG4gIC5ibG9nLXNlY3Rpb24uYmxvZy1zaW5nbGUgLnNlY3Rpb24td3JhcHBlciAucG9zdC1pdGVtIC5wb3N0LWl0ZW0taW5uZXIgLnBvc3QtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmOyB9XHJcbiAgICAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLnBvc3QtaXRlbSAucG9zdC1pdGVtLWlubmVyIC5wb3N0LWNvbnRlbnQgaDMge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XHJcbiAgICAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLnBvc3QtaXRlbSAucG9zdC1pdGVtLWlubmVyIC5wb3N0LWNvbnRlbnQgLm1ldGEtcG9zdCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7IH1cclxuICAgICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5wb3N0LWl0ZW0gLnBvc3QtaXRlbS1pbm5lciAucG9zdC1jb250ZW50IC5tZXRhLXBvc3QgdWwgbGkgYSBpIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7IH1cclxuICAgICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5wb3N0LWl0ZW0gLnBvc3QtaXRlbS1pbm5lciAucG9zdC1jb250ZW50IC5tZXRhLXBvc3QgdWwgbGkgYS5hZG1pbiB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDsgfVxyXG4gICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5wb3N0LWl0ZW0gLnBvc3QtaXRlbS1pbm5lciAucG9zdC1jb250ZW50IHAsIC5ibG9nLXNlY3Rpb24uYmxvZy1zaW5nbGUgLnNlY3Rpb24td3JhcHBlciAucG9zdC1pdGVtIC5wb3N0LWl0ZW0taW5uZXIgLnBvc3QtY29udGVudCBpbWcsIC5ibG9nLXNlY3Rpb24uYmxvZy1zaW5nbGUgLnNlY3Rpb24td3JhcHBlciAucG9zdC1pdGVtIC5wb3N0LWl0ZW0taW5uZXIgLnBvc3QtY29udGVudCBpZnJhbWUge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XHJcbiAgICAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLnBvc3QtaXRlbSAucG9zdC1pdGVtLWlubmVyIC5wb3N0LWNvbnRlbnQgaWZyYW1lIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMzcwcHg7XHJcbiAgICAgIGJvcmRlcjogbm9uZTsgfVxyXG4gICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5wb3N0LWl0ZW0gLnBvc3QtaXRlbS1pbm5lciAucG9zdC1jb250ZW50IGJsb2NrcXVvdGUge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgbWFyZ2luOiAwIDAgMjBweDtcclxuICAgICAgcGFkZGluZzogMjVweDtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmMzM3MjsgfVxyXG4gICAgICAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLnBvc3QtaXRlbSAucG9zdC1pdGVtLWlubmVyIC5wb3N0LWNvbnRlbnQgYmxvY2txdW90ZTo6YmVmb3JlIHtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgY29udGVudDogXCJcXGVmY2RcIjtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEljb0ZvbnQgIWltcG9ydGFudDsgfVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5wb3N0LWl0ZW0gLnBvc3QtaXRlbS1pbm5lciAucG9zdC1jb250ZW50IGJsb2NrcXVvdGU6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxyXG4gICAgICAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLnBvc3QtaXRlbSAucG9zdC1pdGVtLWlubmVyIC5wb3N0LWNvbnRlbnQgYmxvY2txdW90ZSBwIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwOyB9XHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLnBvc3QtaXRlbSAucG9zdC1pdGVtLWlubmVyIC5wb3N0LWNvbnRlbnQgYmxvY2txdW90ZSBwIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4OyB9IH1cclxuICAgICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5wb3N0LWl0ZW0gLnBvc3QtaXRlbS1pbm5lciAucG9zdC1jb250ZW50IGJsb2NrcXVvdGUgY2l0ZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cclxuICAgICAgICAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLnBvc3QtaXRlbSAucG9zdC1pdGVtLWlubmVyIC5wb3N0LWNvbnRlbnQgYmxvY2txdW90ZSBjaXRlIGEge1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7IH1cclxuICAgIC5ibG9nLXNlY3Rpb24uYmxvZy1zaW5nbGUgLnNlY3Rpb24td3JhcHBlciAucG9zdC1pdGVtIC5wb3N0LWl0ZW0taW5uZXIgLnBvc3QtY29udGVudCBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTsgfVxyXG4gICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5wb3N0LWl0ZW0gLnBvc3QtaXRlbS1pbm5lciAucG9zdC1jb250ZW50IC50YWdzLXNlY3Rpb24ge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogNDBweCAtMzBweCAtMjVweDtcclxuICAgICAgcGFkZGluZzogMjNweCAzMHB4IDA7XHJcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWNmMGYzOyB9XHJcbiAgICAgIC5ibG9nLXNlY3Rpb24uYmxvZy1zaW5nbGUgLnNlY3Rpb24td3JhcHBlciAucG9zdC1pdGVtIC5wb3N0LWl0ZW0taW5uZXIgLnBvc3QtY29udGVudCAudGFncy1zZWN0aW9uIC50YWdzIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvIDEpOyB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgICAgICAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLnBvc3QtaXRlbSAucG9zdC1pdGVtLWlubmVyIC5wb3N0LWNvbnRlbnQgLnRhZ3Mtc2VjdGlvbiAudGFncyB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9IH1cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIC5ibG9nLXNlY3Rpb24uYmxvZy1zaW5nbGUgLnNlY3Rpb24td3JhcHBlciAucG9zdC1pdGVtIC5wb3N0LWl0ZW0taW5uZXIgLnBvc3QtY29udGVudCAudGFncy1zZWN0aW9uIC50YWdzIHtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvIDIpOyB9IH1cclxuICAgICAgICAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLnBvc3QtaXRlbSAucG9zdC1pdGVtLWlubmVyIC5wb3N0LWNvbnRlbnQgLnRhZ3Mtc2VjdGlvbiAudGFncyBsaSB7XHJcbiAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7IH1cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLnBvc3QtaXRlbSAucG9zdC1pdGVtLWlubmVyIC5wb3N0LWNvbnRlbnQgLnRhZ3Mtc2VjdGlvbiAudGFncyBsaTpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7IH0gfVxyXG4gICAgICAgICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5wb3N0LWl0ZW0gLnBvc3QtaXRlbS1pbm5lciAucG9zdC1jb250ZW50IC50YWdzLXNlY3Rpb24gLnRhZ3MgbGkgYSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VjZjBmMztcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4OyB9XHJcbiAgICAgICAgICAgIC5ibG9nLXNlY3Rpb24uYmxvZy1zaW5nbGUgLnNlY3Rpb24td3JhcHBlciAucG9zdC1pdGVtIC5wb3N0LWl0ZW0taW5uZXIgLnBvc3QtY29udGVudCAudGFncy1zZWN0aW9uIC50YWdzIGxpIGE6aG92ZXIsIC5ibG9nLXNlY3Rpb24uYmxvZy1zaW5nbGUgLnNlY3Rpb24td3JhcHBlciAucG9zdC1pdGVtIC5wb3N0LWl0ZW0taW5uZXIgLnBvc3QtY29udGVudCAudGFncy1zZWN0aW9uIC50YWdzIGxpIGEgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmMzM3MjtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNmZjMzNzI7IH1cclxuICAgICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5wb3N0LWl0ZW0gLnBvc3QtaXRlbS1pbm5lciAucG9zdC1jb250ZW50IC50YWdzLXNlY3Rpb24gLnNjb2NpYWwtbWVkaWEge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAxKTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4OyB9XHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgICAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLnBvc3QtaXRlbSAucG9zdC1pdGVtLWlubmVyIC5wb3N0LWNvbnRlbnQgLnRhZ3Mtc2VjdGlvbiAuc2NvY2lhbC1tZWRpYSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwOyB9IH1cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIC5ibG9nLXNlY3Rpb24uYmxvZy1zaW5nbGUgLnNlY3Rpb24td3JhcHBlciAucG9zdC1pdGVtIC5wb3N0LWl0ZW0taW5uZXIgLnBvc3QtY29udGVudCAudGFncy1zZWN0aW9uIC5zY29jaWFsLW1lZGlhIHtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvIDIpOyB9IH1cclxuICAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLnRpdGxlLWJvcmRlciB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzAwMGYzYTtcclxuICAgIG1hcmdpbjogMCAwIDI4cHggMDtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWNmMGYzOyB9XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC50aXRsZS1ib3JkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMzBweDsgfSB9XHJcbiAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5uYXZpZ2F0aW9ucy1wYXJ0IHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBtYXJnaW46IDMwcHggMDsgfVxyXG4gICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5uYXZpZ2F0aW9ucy1wYXJ0IC5sZWZ0IHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIC5ibG9nLXNlY3Rpb24uYmxvZy1zaW5nbGUgLnNlY3Rpb24td3JhcHBlciAubmF2aWdhdGlvbnMtcGFydCAubGVmdCB7XHJcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC8gMik7IH0gfVxyXG4gICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5uYXZpZ2F0aW9ucy1wYXJ0IC5yaWdodCB7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IH1cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5uYXZpZ2F0aW9ucy1wYXJ0IC5yaWdodCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4OyB9IH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5uYXZpZ2F0aW9ucy1wYXJ0IC5yaWdodCB7XHJcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC8gMik7IH0gfVxyXG4gICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5uYXZpZ2F0aW9ucy1wYXJ0IC5sZWZ0IC50aXRsZSwgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5uYXZpZ2F0aW9ucy1wYXJ0IC5yaWdodCAudGl0bGUge1xyXG4gICAgICBjb2xvcjogIzY5Njk2OTsgfVxyXG4gICAgICAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLm5hdmlnYXRpb25zLXBhcnQgLmxlZnQgLnRpdGxlOmhvdmVyLCAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLm5hdmlnYXRpb25zLXBhcnQgLmxlZnQgLnRpdGxlIC5hY3RpdmUsIC5ibG9nLXNlY3Rpb24uYmxvZy1zaW5nbGUgLnNlY3Rpb24td3JhcHBlciAubmF2aWdhdGlvbnMtcGFydCAucmlnaHQgLnRpdGxlOmhvdmVyLCAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLm5hdmlnYXRpb25zLXBhcnQgLnJpZ2h0IC50aXRsZSAuYWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogI2ZmMzM3MjsgfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLm5hdmlnYXRpb25zLXBhcnQgLmxlZnQgLnRpdGxlLCAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLm5hdmlnYXRpb25zLXBhcnQgLnJpZ2h0IC50aXRsZSB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDkwJTsgfSB9XHJcbiAgICAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLm5hdmlnYXRpb25zLXBhcnQgLmxlZnQgLm5leHQsIC5ibG9nLXNlY3Rpb24uYmxvZy1zaW5nbGUgLnNlY3Rpb24td3JhcHBlciAubmF2aWdhdGlvbnMtcGFydCAubGVmdCAucHJldiwgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5uYXZpZ2F0aW9ucy1wYXJ0IC5yaWdodCAubmV4dCwgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5uYXZpZ2F0aW9ucy1wYXJ0IC5yaWdodCAucHJldiB7XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDEwMCU7IH1cclxuICAgICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5uYXZpZ2F0aW9ucy1wYXJ0IC5sZWZ0IC5uZXh0OmhvdmVyLCAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLm5hdmlnYXRpb25zLXBhcnQgLmxlZnQgLm5leHQgLmFjdGl2ZSwgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5uYXZpZ2F0aW9ucy1wYXJ0IC5sZWZ0IC5wcmV2OmhvdmVyLCAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLm5hdmlnYXRpb25zLXBhcnQgLmxlZnQgLnByZXYgLmFjdGl2ZSwgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5uYXZpZ2F0aW9ucy1wYXJ0IC5yaWdodCAubmV4dDpob3ZlciwgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5uYXZpZ2F0aW9ucy1wYXJ0IC5yaWdodCAubmV4dCAuYWN0aXZlLCAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLm5hdmlnYXRpb25zLXBhcnQgLnJpZ2h0IC5wcmV2OmhvdmVyLCAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLm5hdmlnYXRpb25zLXBhcnQgLnJpZ2h0IC5wcmV2IC5hY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiAjZmYzMzcyOyB9XHJcbiAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5hdXRob3JzIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMTM2LCAxMzYsIDEzNiwgMC4xKTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgbWFyZ2luOiAzMHB4IDA7IH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLmF1dGhvcnMge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9IH1cclxuICAgIC5ibG9nLXNlY3Rpb24uYmxvZy1zaW5nbGUgLnNlY3Rpb24td3JhcHBlciAuYXV0aG9ycyAuYXV0aG9yLXRodW1iIHtcclxuICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cclxuICAgICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5hdXRob3JzIC5hdXRob3ItdGh1bWIgYSB7XHJcbiAgICAgICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlOyB9XHJcbiAgICAgICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5hdXRob3JzIC5hdXRob3ItdGh1bWIgYSBpbWcge1xyXG4gICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTsgfVxyXG4gICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5hdXRob3JzIC5hdXRob3ItY29udGVudCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5hdXRob3JzIC5hdXRob3ItY29udGVudCB7XHJcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTcwcHgpO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7IH0gfVxyXG4gICAgICAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLmF1dGhvcnMgLmF1dGhvci1jb250ZW50IGg2IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7IH1cclxuICAgICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5hdXRob3JzIC5hdXRob3ItY29udGVudCBwIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XHJcbiAgICAgIC5ibG9nLXNlY3Rpb24uYmxvZy1zaW5nbGUgLnNlY3Rpb24td3JhcHBlciAuYXV0aG9ycyAuYXV0aG9yLWNvbnRlbnQgLnNjb2NpYWwtbWVkaWEge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7IH1cclxuICAgICAgICAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLmF1dGhvcnMgLmF1dGhvci1jb250ZW50IC5zY29jaWFsLW1lZGlhIGEge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XHJcbiAgICAgICAgICAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLmF1dGhvcnMgLmF1dGhvci1jb250ZW50IC5zY29jaWFsLW1lZGlhIGEuZmFjZWJvb2sge1xyXG4gICAgICAgICAgICBjb2xvcjogIzNiNTk5ODsgfVxyXG4gICAgICAgICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5hdXRob3JzIC5hdXRob3ItY29udGVudCAuc2NvY2lhbC1tZWRpYSBhLnR3aXR0ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzU1YWNlZTsgfVxyXG4gICAgICAgICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5hdXRob3JzIC5hdXRob3ItY29udGVudCAuc2NvY2lhbC1tZWRpYSBhLmxpbmtlZGluIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDdiYjU7IH1cclxuICAgICAgICAgIC5ibG9nLXNlY3Rpb24uYmxvZy1zaW5nbGUgLnNlY3Rpb24td3JhcHBlciAuYXV0aG9ycyAuYXV0aG9yLWNvbnRlbnQgLnNjb2NpYWwtbWVkaWEgYS52aW1lbyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjM2I1OTk4OyB9XHJcbiAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5jb21tZW50cyB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgxMzYsIDEzNiwgMTM2LCAwLjEpOyB9XHJcbiAgICAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLmNvbW1lbnRzIC5jb21tZW50LWxpc3Qge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7IH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5jb21tZW50cyAuY29tbWVudC1saXN0IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMzBweDsgfSB9XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICAgIC5ibG9nLXNlY3Rpb24uYmxvZy1zaW5nbGUgLnNlY3Rpb24td3JhcHBlciAuY29tbWVudHMgLmNvbW1lbnQtbGlzdCB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7IH0gfVxyXG4gICAgICAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLmNvbW1lbnRzIC5jb21tZW50LWxpc3QgLmNvbW1lbnQge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxyXG4gICAgICAgIC5ibG9nLXNlY3Rpb24uYmxvZy1zaW5nbGUgLnNlY3Rpb24td3JhcHBlciAuY29tbWVudHMgLmNvbW1lbnQtbGlzdCAuY29tbWVudCAuY29tLXRodW1iIHtcclxuICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7IH1cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgICAgICAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLmNvbW1lbnRzIC5jb21tZW50LWxpc3QgLmNvbW1lbnQgLmNvbS10aHVtYiB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDsgfSB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5jb21tZW50cyAuY29tbWVudC1saXN0IC5jb21tZW50IC5jb20tdGh1bWIge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgICB3aWR0aDogODBweDsgfSB9XHJcbiAgICAgICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5jb21tZW50cyAuY29tbWVudC1saXN0IC5jb21tZW50IC5jb20tY29udGVudCB7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGJkYmRiO1xyXG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTsgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgICAgICAgIC5ibG9nLXNlY3Rpb24uYmxvZy1zaW5nbGUgLnNlY3Rpb24td3JhcHBlciAuY29tbWVudHMgLmNvbW1lbnQtbGlzdCAuY29tbWVudCAuY29tLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyB9IH1cclxuICAgICAgICAgIC5ibG9nLXNlY3Rpb24uYmxvZy1zaW5nbGUgLnNlY3Rpb24td3JhcHBlciAuY29tbWVudHMgLmNvbW1lbnQtbGlzdCAuY29tbWVudCAuY29tLWNvbnRlbnQ6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7IH1cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgICAgICAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLmNvbW1lbnRzIC5jb21tZW50LWxpc3QgLmNvbW1lbnQgLmNvbS1jb250ZW50IC5jb20tdGl0bGUge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9IH1cclxuICAgICAgICAgIC5ibG9nLXNlY3Rpb24uYmxvZy1zaW5nbGUgLnNlY3Rpb24td3JhcHBlciAuY29tbWVudHMgLmNvbW1lbnQtbGlzdCAuY29tbWVudCAuY29tLWNvbnRlbnQgLmNvbS10aXRsZSAuY29tLXRpdGxlLW1ldGEgaDYge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDsgfVxyXG4gICAgICAgICAgICAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLmNvbW1lbnRzIC5jb21tZW50LWxpc3QgLmNvbW1lbnQgLmNvbS1jb250ZW50IC5jb20tdGl0bGUgLmNvbS10aXRsZS1tZXRhIGg2IGEge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTsgfVxyXG4gICAgICAgICAgICAgIC5ibG9nLXNlY3Rpb24uYmxvZy1zaW5nbGUgLnNlY3Rpb24td3JhcHBlciAuY29tbWVudHMgLmNvbW1lbnQtbGlzdCAuY29tbWVudCAuY29tLWNvbnRlbnQgLmNvbS10aXRsZSAuY29tLXRpdGxlLW1ldGEgaDYgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmMzM3MjsgfVxyXG4gICAgICAgICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5jb21tZW50cyAuY29tbWVudC1saXN0IC5jb21tZW50IC5jb20tY29udGVudCAuY29tLXRpdGxlIC5jb20tdGl0bGUtbWV0YSBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzY5Njk2OTtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7IH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICAgICAgICAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLmNvbW1lbnRzIC5jb21tZW50LWxpc3QgLmNvbW1lbnQgLmNvbS1jb250ZW50IC5jb20tdGl0bGUgLnJlcGx5IHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfSB9XHJcbiAgICAgICAgICAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLmNvbW1lbnRzIC5jb21tZW50LWxpc3QgLmNvbW1lbnQgLmNvbS1jb250ZW50IC5jb20tdGl0bGUgLnJlcGx5IC5jb21tZW50LXJlcGx5LWxpbmsge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4OyB9XHJcbiAgICAgICAgICAgIC5ibG9nLXNlY3Rpb24uYmxvZy1zaW5nbGUgLnNlY3Rpb24td3JhcHBlciAuY29tbWVudHMgLmNvbW1lbnQtbGlzdCAuY29tbWVudCAuY29tLWNvbnRlbnQgLmNvbS10aXRsZSAucmVwbHkgLmNvbW1lbnQtcmVwbHktbGluazpob3ZlciB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZjMzNzI7IH1cclxuICAgICAgICAgIC5ibG9nLXNlY3Rpb24uYmxvZy1zaW5nbGUgLnNlY3Rpb24td3JhcHBlciAuY29tbWVudHMgLmNvbW1lbnQtbGlzdCAuY29tbWVudCAuY29tLWNvbnRlbnQgcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4OyB9XHJcbiAgICAgICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5jb21tZW50cyAuY29tbWVudC1saXN0IC5jb21tZW50IC5jb21tZW50LWxpc3Qge1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMDsgfVxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgICAgIC5ibG9nLXNlY3Rpb24uYmxvZy1zaW5nbGUgLnNlY3Rpb24td3JhcHBlciAuY29tbWVudHMgLmNvbW1lbnQtbGlzdCAuY29tbWVudCAuY29tbWVudC1saXN0IHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7IH0gfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgICAgICAgIC5ibG9nLXNlY3Rpb24uYmxvZy1zaW5nbGUgLnNlY3Rpb24td3JhcHBlciAuY29tbWVudHMgLmNvbW1lbnQtbGlzdCAuY29tbWVudCAuY29tbWVudC1saXN0IHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7IH0gfVxyXG4gICAgICAgICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5jb21tZW50cyAuY29tbWVudC1saXN0IC5jb21tZW50IC5jb21tZW50LWxpc3QgLmNvbW1lbnQge1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RiZGJkYjtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwcHg7IH1cclxuICAgICAgICAgICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5jb21tZW50cyAuY29tbWVudC1saXN0IC5jb21tZW50IC5jb21tZW50LWxpc3QgLmNvbW1lbnQ6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7IH1cclxuICAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLmNvbW1lbnQtcmVzcG9uZCB7XHJcbiAgICBtYXJnaW46IDMwcHggMDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMTM2LCAxMzYsIDEzNiwgMC4xKTsgfVxyXG4gICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5jb21tZW50LXJlc3BvbmQgLmFkZC1jb21tZW50IHtcclxuICAgICAgcGFkZGluZzogMTBweCAzMHB4IDQwcHg7IH1cclxuICAgICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5jb21tZW50LXJlc3BvbmQgLmFkZC1jb21tZW50IC5jb21tZW50LWZvcm0ge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxyXG4gICAgICAgIC5ibG9nLXNlY3Rpb24uYmxvZy1zaW5nbGUgLnNlY3Rpb24td3JhcHBlciAuY29tbWVudC1yZXNwb25kIC5hZGQtY29tbWVudCAuY29tbWVudC1mb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgICAgICAgIGNvbG9yOiAjNjk2OTY5O1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7IH1cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgICAgICAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLmNvbW1lbnQtcmVzcG9uZCAuYWRkLWNvbW1lbnQgLmNvbW1lbnQtZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvIDIgLSAxNXB4KTsgfSB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5jb21tZW50LXJlc3BvbmQgLmFkZC1jb21tZW50IC5jb21tZW50LWZvcm0gaW5wdXRbdHlwZT1cInRleHRcIl06bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50OyB9IH1cclxuICAgICAgICAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLmNvbW1lbnQtcmVzcG9uZCAuYWRkLWNvbW1lbnQgLmNvbW1lbnQtZm9ybSBpbnB1dCwgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5jb21tZW50LXJlc3BvbmQgLmFkZC1jb21tZW50IC5jb21tZW50LWZvcm0gdGV4dGFyZWEge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2YxZjZmYTtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XHJcbiAgICAgICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5jb21tZW50LXJlc3BvbmQgLmFkZC1jb21tZW50IC5jb21tZW50LWZvcm0gdGV4dGFyZWEge1xyXG4gICAgICAgICAgcGFkZGluZzogMTVweDsgfVxyXG4gICAgICAgIC5ibG9nLXNlY3Rpb24uYmxvZy1zaW5nbGUgLnNlY3Rpb24td3JhcHBlciAuY29tbWVudC1yZXNwb25kIC5hZGQtY29tbWVudCAuY29tbWVudC1mb3JtIHAuY29tbWVudC1mb3JtLWNvb2tpZXMtY29uc2VudCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IH1cclxuICAgICAgICAgIC5ibG9nLXNlY3Rpb24uYmxvZy1zaW5nbGUgLnNlY3Rpb24td3JhcHBlciAuY29tbWVudC1yZXNwb25kIC5hZGQtY29tbWVudCAuY29tbWVudC1mb3JtIHAuY29tbWVudC1mb3JtLWNvb2tpZXMtY29uc2VudCBpbnB1dCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpOyB9XHJcbiAgICAgICAgICAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLmNvbW1lbnQtcmVzcG9uZCAuYWRkLWNvbW1lbnQgLmNvbW1lbnQtZm9ybSBwLmNvbW1lbnQtZm9ybS1jb29raWVzLWNvbnNlbnQgbGFiZWwge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwOyB9XHJcbiAgICAgICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSAuc2VjdGlvbi13cmFwcGVyIC5jb21tZW50LXJlc3BvbmQgLmFkZC1jb21tZW50IC5jb21tZW50LWZvcm0gLmxhYi1idG4ge1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmYzMzcyOyB9XHJcbiAgICAgICAgICAuYmxvZy1zZWN0aW9uLmJsb2ctc2luZ2xlIC5zZWN0aW9uLXdyYXBwZXIgLmNvbW1lbnQtcmVzcG9uZCAuYWRkLWNvbW1lbnQgLmNvbW1lbnQtZm9ybSAubGFiLWJ0biBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgfVxyXG4gIC5ibG9nLXNlY3Rpb24uYmxvZy1zaW5nbGUgYXJ0aWNsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4OyB9XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgLmJsb2ctc2VjdGlvbi5ibG9nLXNpbmdsZSBhcnRpY2xlIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwOyB9IH1cclxuXHJcbiAgICAgICAgLypAQEBAQEBAQEBAQEBAQCAgIENvbnRhY3QgVXMgUGFnZSBTdGFydCBIZXJlICBAQEBAQEBAQEBAQEBAQEBAQCovXHJcbiAgLmNvbnRhY3QtdXMgLmNvbnRhY3Qtd3JhcCB7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XHJcbiAgICAuY29udGFjdC11cyAuY29udGFjdC13cmFwIC5jb250YWN0LXRpdGxlIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxyXG4gIC5jb250YWN0LXVzIC5jb250YWN0LWFyZWEge1xyXG4gICAgbWFyZ2luOiAwIDAgMzBweDsgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIC5jb250YWN0LXVzIC5jb250YWN0LWFyZWEge1xyXG4gICAgICAgIG1hcmdpbjogMDsgfSB9XHJcbiAgICAuY29udGFjdC11cyAuY29udGFjdC1hcmVhIC5jb250YWN0LWl0ZW0ge1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VjZjBmMztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxyXG4gICAgICAuY29udGFjdC11cyAuY29udGFjdC1hcmVhIC5jb250YWN0LWl0ZW06bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lOyB9XHJcbiAgICAgIC5jb250YWN0LXVzIC5jb250YWN0LWFyZWEgLmNvbnRhY3QtaXRlbSAuY29udGFjdC1pY29uIHtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cclxuICAgICAgLmNvbnRhY3QtdXMgLmNvbnRhY3QtYXJlYSAuY29udGFjdC1pdGVtIC5jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDVweCk7IH1cclxuICAgICAgICAuY29udGFjdC11cyAuY29udGFjdC1hcmVhIC5jb250YWN0LWl0ZW0gLmNvbnRlbnQgaDYge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDsgfVxyXG4gIC5jb250YWN0LXVzIC5jb250YWN0LWZvcm0ge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XHJcbiAgICAuY29udGFjdC11cyAuY29udGFjdC1mb3JtIGlucHV0LmNvbnRhY3QtaW5wdXQge1xyXG4gICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWNmMGYzO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBib3gtc2hhZG93OiBub25lOyB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgIC5jb250YWN0LXVzIC5jb250YWN0LWZvcm0gaW5wdXQuY29udGFjdC1pbnB1dCB7XHJcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC8gMiAtIDE1cHgpOyB9IH1cclxuICAgIC5jb250YWN0LXVzIC5jb250YWN0LWZvcm0gdGV4dGFyZWEuY29udGFjdC1pbnB1dCB7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlY2YwZjM7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7IH1cclxuICAgIC5jb250YWN0LXVzIC5jb250YWN0LWZvcm0gLmxhYi1idG4ge1xyXG4gICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZjMzNzI7IH1cclxuICAgICAgLmNvbnRhY3QtdXMgLmNvbnRhY3QtZm9ybSAubGFiLWJ0bjpob3ZlciB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7IH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notfound/notfound.component */
    "./src/app/notfound/notfound.component.ts");
    /* harmony import */


    var _country_country_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./country/country.component */
    "./src/app/country/country.component.ts");
    /* harmony import */


    var _prevention_prevention_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./prevention/prevention.component */
    "./src/app/prevention/prevention.component.ts");
    /* harmony import */


    var _virs_spreed_virs_spreed_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./virs-spreed/virs-spreed.component */
    "./src/app/virs-spreed/virs-spreed.component.ts");
    /* harmony import */


    var _symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./symptoms/symptoms.component */
    "./src/app/symptoms/symptoms.component.ts");
    /* harmony import */


    var _doctor_doctor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./doctor/doctor.component */
    "./src/app/doctor/doctor.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _detail_country_detail_country_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./detail-country/detail-country.component */
    "./src/app/detail-country/detail-country.component.ts");

    var routes = [{
      path: "",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] //  redirectTo:"home",pathMatch:"full"

    }, {
      path: "home",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]
    }, {
      path: "country",
      component: _country_country_component__WEBPACK_IMPORTED_MODULE_4__["CountryComponent"]
    }, {
      path: "Country/:code",
      component: _detail_country_detail_country_component__WEBPACK_IMPORTED_MODULE_10__["DetailCountryComponent"]
    }, {
      path: "Virus-Spread",
      component: _virs_spreed_virs_spreed_component__WEBPACK_IMPORTED_MODULE_6__["VirsSpreedComponent"]
    }, {
      path: "symptoms",
      component: _symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_7__["SymptomsComponent"]
    }, {
      path: "Prevention",
      component: _prevention_prevention_component__WEBPACK_IMPORTED_MODULE_5__["PreventionComponent"]
    }, {
      path: "doctors",
      component: _doctor_doctor_component__WEBPACK_IMPORTED_MODULE_8__["DoctorComponent"]
    }, {
      path: "about",
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    }, {
      path: "**",
      component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__["NotfoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _1navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./1navbar/navbar.component */
    "./src/app/1navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'testcrona';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        }
      },
      directives: [_1navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _1navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./1navbar/navbar.component */
    "./src/app/1navbar/navbar.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./notfound/notfound.component */
    "./src/app/notfound/notfound.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _virs_spreed_virs_spreed_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./virs-spreed/virs-spreed.component */
    "./src/app/virs-spreed/virs-spreed.component.ts");
    /* harmony import */


    var _symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./symptoms/symptoms.component */
    "./src/app/symptoms/symptoms.component.ts");
    /* harmony import */


    var _prevention_prevention_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./prevention/prevention.component */
    "./src/app/prevention/prevention.component.ts");
    /* harmony import */


    var _doctor_doctor_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./doctor/doctor.component */
    "./src/app/doctor/doctor.component.ts");
    /* harmony import */


    var _country_country_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./country/country.component */
    "./src/app/country/country.component.ts");
    /* harmony import */


    var _search_cn_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./search-cn.pipe */
    "./src/app/search-cn.pipe.ts");
    /* harmony import */


    var _detail_country_detail_country_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./detail-country/detail-country.component */
    "./src/app/detail-country/detail-country.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _1navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"], _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_9__["NotfoundComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _virs_spreed_virs_spreed_component__WEBPACK_IMPORTED_MODULE_11__["VirsSpreedComponent"], _symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_12__["SymptomsComponent"], _prevention_prevention_component__WEBPACK_IMPORTED_MODULE_13__["PreventionComponent"], _doctor_doctor_component__WEBPACK_IMPORTED_MODULE_14__["DoctorComponent"], _country_country_component__WEBPACK_IMPORTED_MODULE_15__["CountryComponent"], _search_cn_pipe__WEBPACK_IMPORTED_MODULE_16__["SearchCnPipe"], _detail_country_detail_country_component__WEBPACK_IMPORTED_MODULE_17__["DetailCountryComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _1navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"], _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_9__["NotfoundComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _virs_spreed_virs_spreed_component__WEBPACK_IMPORTED_MODULE_11__["VirsSpreedComponent"], _symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_12__["SymptomsComponent"], _prevention_prevention_component__WEBPACK_IMPORTED_MODULE_13__["PreventionComponent"], _doctor_doctor_component__WEBPACK_IMPORTED_MODULE_14__["DoctorComponent"], _country_country_component__WEBPACK_IMPORTED_MODULE_15__["CountryComponent"], _search_cn_pipe__WEBPACK_IMPORTED_MODULE_16__["SearchCnPipe"], _detail_country_detail_country_component__WEBPACK_IMPORTED_MODULE_17__["DetailCountryComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/coronanumbers.service.ts":
  /*!******************************************!*\
    !*** ./src/app/coronanumbers.service.ts ***!
    \******************************************/

  /*! exports provided: CoronanumbersService */

  /***/
  function srcAppCoronanumbersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoronanumbersService", function () {
      return CoronanumbersService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CoronanumbersService =
    /*#__PURE__*/
    function () {
      function CoronanumbersService(_HttpClient) {
        _classCallCheck(this, CoronanumbersService);

        this._HttpClient = _HttpClient;
      }

      _createClass(CoronanumbersService, [{
        key: "getCorona",
        value: function getCorona() {
          return this._HttpClient.get("https://api.covid19api.com/summary?fbclid=IwAR3DAicPgp3FfQ5q06gWCluTM-ffOhKlxmpnKkP176ZTpl2cHRlbouF9BPg");
        }
      }]);

      return CoronanumbersService;
    }();

    CoronanumbersService.ɵfac = function CoronanumbersService_Factory(t) {
      return new (t || CoronanumbersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    CoronanumbersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CoronanumbersService,
      factory: CoronanumbersService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoronanumbersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/country/country.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/country/country.component.ts ***!
    \**********************************************/

  /*! exports provided: CountryComponent */

  /***/
  function srcAppCountryCountryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryComponent", function () {
      return CountryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _coronanumbers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../coronanumbers.service */
    "./src/app/coronanumbers.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _search_cn_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../search-cn.pipe */
    "./src/app/search-cn.pipe.ts");

    var _c0 = ["Pname"];

    function CountryComponent_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.country_name);
      }
    }

    function CountryComponent_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "all Countries");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1(a1) {
      return ["/Country", a1];
    };

    function CountryComponent_tr_61_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var c_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", c_r11.TotalConfirmed === c_r11.TotalRecovered ? "bg-info" : "bg-dark");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c1, c_r11.CountryCode));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r11.CountryCode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c1, c_r11.Country));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", c_r11.Country, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 15, c_r11.TotalConfirmed));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", c_r11.NewConfirmed > 1 ? "red" : "#17a2b8");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 17, c_r11.NewConfirmed));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", c_r11.NewDeaths > 1 ? "red" : "white");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 19, c_r11.NewDeaths));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 21, c_r11.TotalDeaths));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 23, c_r11.TotalRecovered));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 25, c_r11.NewRecovered));
      }
    }

    var CountryComponent =
    /*#__PURE__*/
    function () {
      function CountryComponent(_CoronanumbersService) {
        var _this2 = this;

        _classCallCheck(this, CountryComponent);

        this._CoronanumbersService = _CoronanumbersService;
        this.countries = {};
        this.Date = "";
        this.d = new Date().getDate();
        this.sortSelector = "NewDeaths";

        this._CoronanumbersService.getCorona().subscribe(function (data) {
          // console.log(data);
          _this2.countries = data;
          _this2.Date = data.Date; // console.log(this.Date);
        });
      }

      _createClass(CountryComponent, [{
        key: "getWord",
        value: function getWord(event) {
          console.log(event);
        }
      }, {
        key: "getdata",
        value: function getdata(data) {
          // alert(data.getAttribute("data-name"));
          this.sortSelector = data.getAttribute("data-name"); // alert(this.sortSelector)
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          $('#myTable').stickyTable({
            overflowy: true,
            overflowx: true,
            copyTableClass: true
          });
        }
      }]);

      return CountryComponent;
    }();

    CountryComponent.ɵfac = function CountryComponent_Factory(t) {
      return new (t || CountryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_coronanumbers_service__WEBPACK_IMPORTED_MODULE_1__["CoronanumbersService"]));
    };

    CountryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CountryComponent,
      selectors: [["app-country"]],
      viewQuery: function CountryComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.Pname = _t.first);
        }
      },
      decls: 63,
      vars: 8,
      consts: [[1, "container-table"], ["for", "countryName", 1, "col-form-label-lg", "font-weight-bold", "text-white-50"], ["name", "countryName", "type", "text", 1, "w-75", "shadow", "form-control", "text-info", "font-weight-bold", "fa-2x", 3, "ngModel", "ngModelChange"], ["value", "", 1, "text-white", "text-capitalize"], ["class", "text-info", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], ["id", "myTable", 1, "table", "table-condensed", "table-striped", "bg-dark"], [1, "h-25", "btn", "btn-primary", "rounded-circle", 3, "click"], [1, "fas", "fa-sort-numeric-up"], [1, "btn", "btn-info", "rounded-circle", 3, "click"], [1, "btn", "btn-warning", "rounded-circle", 3, "click"], [1, "btn", "btn-danger", "rounded-circle", 3, "click"], [1, "btn", "btn-dark", "rounded-circle", 3, "click"], [1, "btn", "btn-light", "rounded-circle", 3, "click"], [1, "btn", "btn-success", "rounded-circle", 3, "click"], ["scope", "col", "data-name", "CountryCode", 1, "bg-primary", 2, "width", "10px"], ["CC", ""], ["scope", "col", "data-name", "Country", 1, "bg-info", 2, "width", "25%"], ["Country", ""], ["scope", "col", "data-name", "TotalConfirmed", 1, "bg-warning", "text-dark"], ["TConfirmed", ""], ["scope", "col", "data-name", "NewConfirmed", 1, "bg-danger"], ["NConfirmed", ""], ["scope", "col", "data-name", "NewDeaths", 1, "bg-danger"], ["NDeaths", ""], ["scope", "col", "data-name", "TotalDeaths", 1, "bg-dark"], ["TDeaths", ""], ["scope", "col", "data-name", "TotalRecovered", 1, "bg-light", "text-dark"], ["TRecovered", ""], ["scope", "col", "data-name", "NewRecovered", 1, "bg-success"], ["NRecovered", ""], ["class", "text-dark", 3, "className", 4, "ngFor", "ngForOf"], [1, "text-info"], [1, "text-danger"], [1, "text-dark", 3, "className"], ["scope", "row", 3, "routerLink"], [1, "col", "w-25", 3, "routerLink"]],
      template: function CountryComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Country Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CountryComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.country_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Your Search For ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CountryComponent_span_6_Template, 2, 1, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CountryComponent_span_7_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryComponent_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);

            return ctx.getdata(_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryComponent_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);

            return ctx.getdata(_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryComponent_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);

            return ctx.getdata(_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryComponent_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);

            return ctx.getdata(_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryComponent_Template_button_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49);

            return ctx.getdata(_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryComponent_Template_button_click_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);

            return ctx.getdata(_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryComponent_Template_button_click_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](55);

            return ctx.getdata(_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryComponent_Template_button_click_32_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](58);

            return ctx.getdata(_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Country Code ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th", 17, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Country ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 19, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Total Confirmed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th", 21, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "New Confirmed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 23, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "New Deaths");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th", 25, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Total Deaths");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th", 27, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Total Recovered");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th", 29, 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "New Recovered");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, CountryComponent_tr_61_Template, 23, 31, "tr", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](62, "searchCn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.country_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.country_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.country_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](62, 4, ctx.countries.Countries, ctx.country_name, ctx.sortSelector));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
      pipes: [_search_cn_pipe__WEBPACK_IMPORTED_MODULE_5__["SearchCnPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]],
      styles: [".container-table[_ngcontent-%COMP%]{\r\n    \r\n    padding:150px 20px !important ; \r\n    width:100% ;\r\n    height:900px !important ;\r\n    overflow:visible;\r\n    background-image: url('01.jpg');\r\n}\r\n\r\ntd[_ngcontent-%COMP%]{\r\n    color: white;\r\n    \r\n    font-weight: 900;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n}\r\n\r\n.sticky-wrap.overflow-y[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    border-radius: 20px !important;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnRyeS9jb3VudHJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztHQUVHOztBQUVIO0lBQ0ksd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQiwrQkFBaUU7QUFDckU7O0FBQ0E7SUFDSSxZQUFZOztJQUVaLGdCQUFnQjtJQUNoQixzRUFBc0U7QUFDMUU7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsOEJBQThCOztBQUVsQzs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBMkJFIiwiZmlsZSI6InNyYy9hcHAvY291bnRyeS9jb3VudHJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgXHJcbi8qIGFwcC1maXhlZHRhYmxlIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufSAqL1xyXG5cclxuLmNvbnRhaW5lci10YWJsZXtcclxuICAgIC8qIG1hcmdpbjoxNTBweCBhdXRvIDsgKi9cclxuICAgIHBhZGRpbmc6MTUwcHggMjBweCAhaW1wb3J0YW50IDsgXHJcbiAgICB3aWR0aDoxMDAlIDtcclxuICAgIGhlaWdodDo5MDBweCAhaW1wb3J0YW50IDtcclxuICAgIG92ZXJmbG93OnZpc2libGU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2Jhbm5lci9ob21lLTMvMDEuanBnXCIpO1xyXG59XHJcbnRke1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxufVxyXG4uc3RpY2t5LXdyYXAub3ZlcmZsb3cteSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBcclxufVxyXG4vKlxyXG4udGExe3otaW5kZXg6MiA7cGFkZGluZzogMHB4IDc1cHggMHB4IDBweDt9XHJcbi50YTJ7ei1pbmRleDoxIDt9XHJcbiBcclxuXHJcbi50YWJsZS1maXhlZCB0Ym9keSB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbnRke1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgXHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxufVxyXG50aGVhZCB7XHJcbiAgICB3aWR0aDoxMDBweCA7XHJcbiAgICBsaW5lLWhlaWdodDoycmVtIDtcclxufVxyXG50Ym9keXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBtYXgtaGVpZ2h0OjEwMHB4ICFpbXBvcnRhbnQgO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuXHJcbiAqL1xyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-country',
          templateUrl: './country.component.html',
          styleUrls: ['./country.component.css']
        }]
      }], function () {
        return [{
          type: _coronanumbers_service__WEBPACK_IMPORTED_MODULE_1__["CoronanumbersService"]
        }];
      }, {
        Pname: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['Pname']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/detail-country/detail-country.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/detail-country/detail-country.component.ts ***!
    \************************************************************/

  /*! exports provided: DetailCountryComponent */

  /***/
  function srcAppDetailCountryDetailCountryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailCountryComponent", function () {
      return DetailCountryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _coronanumbers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../coronanumbers.service */
    "./src/app/coronanumbers.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var DetailCountryComponent =
    /*#__PURE__*/
    function () {
      function DetailCountryComponent(route, router, service) {
        var _this3 = this;

        _classCallCheck(this, DetailCountryComponent);

        this.route = route;
        this.router = router;
        this.service = service;
        this.code = "";
        this.code = this.route.snapshot.paramMap.get('code');
        this.service.getCorona().subscribe(function (data) {
          data.Countries.filter(function (data) {
            if (data["Country"] == _this3.code || data["CountryCode"] == _this3.code) {
              // console.log(data)
              _this3.c = data;
            }
          });
        });
      }

      _createClass(DetailCountryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DetailCountryComponent;
    }();

    DetailCountryComponent.ɵfac = function DetailCountryComponent_Factory(t) {
      return new (t || DetailCountryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_coronanumbers_service__WEBPACK_IMPORTED_MODULE_2__["CoronanumbersService"]));
    };

    DetailCountryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DetailCountryComponent,
      selectors: [["app-detail-country"]],
      decls: 77,
      vars: 20,
      consts: [[1, "jumbotron1"], ["routerLink", "/country", 1, "btn", "btn-outline-dark", "bg-info", "font-weight-bolder", "float-right", "mr-5"], [1, "jumbotron", "bg-transparent"], [1, "display-4", "text-light", "font-weight-bold"], [1, "lead", "text-light"], [1, "my-2"], [1, "row", "w-100"], [1, "col-md-4"], [1, "card", "border-info", "mx-sm-1", "p-3"], [1, "card", "border-info", "shadow", "text-info", "p-3", "my-card"], ["aria-hidden", "true", 1, "fa", "fa-car"], [1, "text-info", "text-center", "mt-3"], [1, "text-info", "text-center", "mt-2"], [1, "card", "border-success", "mx-sm-1", "p-3"], [1, "card", "border-success", "shadow", "text-success", "p-3", "my-card"], ["aria-hidden", "true", 1, "fa", "fa-eye"], [1, "text-success", "text-center", "mt-3"], [1, "text-success", "text-center", "mt-2"], [1, "card", "border-danger", "mx-sm-1", "p-3"], [1, "card", "border-danger", "shadow", "text-danger", "p-3", "my-card"], ["aria-hidden", "true", 1, "fa", "fa-heart"], [1, "text-danger", "text-center", "mt-3"], [1, "text-danger", "text-center", "mt-2"], [1, "row", "w-100", "mt-5"], [1, "card", "border-warning", "mx-sm-1", "p-3"], [1, "card", "border-warning", "shadow", "text-warning", "p-3", "my-card"], ["aria-hidden", "true", 1, "fa", "fa-inbox"], [1, "text-warning", "text-center", "mt-3"], [1, "text-warning", "text-center", "mt-2"]],
      template: function DetailCountryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Go Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Total Confirmed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "New Confirmed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "New Deaths");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Total Deaths");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Total Recovered");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "New Recovered");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](76, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.c.Country);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.c.Slug);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 8, ctx.c.TotalConfirmed));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 10, ctx.c.NewConfirmed));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 12, ctx.c.NewDeaths));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](54, 14, ctx.c.TotalDeaths));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](65, 16, ctx.c.TotalRecovered));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](76, 18, ctx.c.NewRecovered));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]],
      styles: [".jumbotron1[_ngcontent-%COMP%]{\r\n    padding:150px 0px 0px 0px ;\r\n    background-image: url('01.jpg');\r\n}\r\n.jumbotron[_ngcontent-%COMP%]{\r\n    margin-bottom: 0px ! important;\r\n}\r\n.my-card[_ngcontent-%COMP%]\r\n{\r\n    position:absolute;\r\n    left:40%;\r\n    top:-20px;\r\n    border-radius:50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsLWNvdW50cnkvZGV0YWlsLWNvdW50cnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQiwrQkFBaUU7QUFDckU7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQztBQUNBOztJQUVJLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsU0FBUztJQUNULGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC1jb3VudHJ5L2RldGFpbC1jb3VudHJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uMXtcclxuICAgIHBhZGRpbmc6MTUwcHggMHB4IDBweCAwcHggO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9iYW5uZXIvaG9tZS0zLzAxLmpwZ1wiKTtcclxufVxyXG4uanVtYm90cm9ue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICEgaW1wb3J0YW50O1xyXG59XHJcbi5teS1jYXJkXHJcbntcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgbGVmdDo0MCU7XHJcbiAgICB0b3A6LTIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailCountryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-detail-country',
          templateUrl: './detail-country.component.html',
          styleUrls: ['./detail-country.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _coronanumbers_service__WEBPACK_IMPORTED_MODULE_2__["CoronanumbersService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/doctor/doctor.component.ts":
  /*!********************************************!*\
    !*** ./src/app/doctor/doctor.component.ts ***!
    \********************************************/

  /*! exports provided: DoctorComponent */

  /***/
  function srcAppDoctorDoctorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorComponent", function () {
      return DoctorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DoctorComponent =
    /*#__PURE__*/
    function () {
      function DoctorComponent() {
        _classCallCheck(this, DoctorComponent);

        this.text = "h";
      }

      _createClass(DoctorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // $(".icofont-envelope").text().slice(0,17);
          //  x:string;
          $(".icon-style-list li:nth-of-type(2) span").each(function (e) {
            var x = $(this).text();
            $(this).text(x.slice(0, 13) + "\n....");
            $(this).hover(function () {
              $(this).text(x);
            }, function () {
              $(this).css({
                "position": "absolute",
                "padding-top": "12px"
              });
              $(this).text(x.slice(0, 13) + "\n....");
            });
          });
          console.log();
        }
      }]);

      return DoctorComponent;
    }();

    DoctorComponent.ɵfac = function DoctorComponent_Factory(t) {
      return new (t || DoctorComponent)();
    };

    DoctorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DoctorComponent,
      selectors: [["app-doctor"]],
      decls: 72,
      vars: 0,
      consts: [[1, "team-section", "home-2", "padding-tb", 2, "background-image", "url(assets/css/bg-image/service-bg.jpg)"], [1, "container"], ["data-wow-delay", "0.3s", 1, "section-header", "wow", "fadeInUp"], [1, "team-area"], [1, "row", "justify-content-center", "align-items-center"], ["data-wow-delay", "0.3s", 1, "col-xl-4", "col-md-4", "col-12", "wow", "fadeInUp"], [1, "team-item", "style-2"], [1, "team-item-inner"], [1, "team-thumb"], ["src", "assets/images/team/01.jpg", "alt", "team-membar"], [1, "team-content"], [1, "member-name"], [1, "member-dagi"], [1, "member-details"], [1, "icon-style-list", "lab-ul"], [1, "icofont-phone"], [1, "icofont-envelope"], ["data-wow-delay", "0.4s", 1, "col-xl-4", "col-md-4", "col-12", "wow", "fadeInUp"], ["src", "assets/images/team/02.jpg", "alt", "team-membar"], ["data-wow-delay", "0.5s", 1, "col-xl-4", "col-md-4", "col-12", "wow", "fadeInUp"], ["src", "assets/images/team/03.jpg", "alt", "team-membar"]],
      template: function DoctorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Meet Our Best Doctors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Dynamically formulate fully tested catalysts for change via focused methods of empowerment Assertively extend alternative synergy and extensive web services.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Dorothy M. Nickell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Throat Specialist");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Proce Aran Manu Proucs Rahe Conen Cuve Manu Produ Rahe Cuvaes Mana The Conen Testin Motin Was Procedur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "+880 1234 567 890");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "nickell@gmail.com ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Billie R. Courtney");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Cardiologist");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Proce Aran Manu Proucs Rahe Conen Cuve Manu Produ Rahe Cuvaes Mana The Conen Testin Motin Was Procedur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "+880 1234 567 890");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "abanoubsamir@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Courtney A. Smith");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Rehabilitation Therapy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Proce Aran Manu Proucs Rahe Conen Cuve Manu Produ Rahe Cuvaes Mana The Conen Testin Motin Was Procedur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "+880 1234 567 890");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "smith@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".team-section[_ngcontent-%COMP%]{\r\n    padding-top: 135px;\r\n}\r\n\r\n\r\n\r\n.team-section[_ngcontent-%COMP%]   .team-area[_ngcontent-%COMP%] {\r\n    margin-bottom: -15px; }\r\n\r\n.team-section[_ngcontent-%COMP%]   .team-area[_ngcontent-%COMP%]   .team-item[_ngcontent-%COMP%]   .team-item-inner[_ngcontent-%COMP%] {\r\n      transition: all 0.3s ease;\r\n      margin-bottom: 30px; }\r\n\r\n.team-section[_ngcontent-%COMP%]   .team-area[_ngcontent-%COMP%]   .team-item[_ngcontent-%COMP%]   .team-item-inner[_ngcontent-%COMP%]:hover {\r\n        box-shadow: 0 0 30px rgba(136, 136, 136, 0.1); }\r\n\r\n.team-section[_ngcontent-%COMP%]   .team-area[_ngcontent-%COMP%]   .team-item[_ngcontent-%COMP%]   .team-item-inner[_ngcontent-%COMP%]:hover   .team-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n          transform: scale(1.05); }\r\n\r\n.team-section[_ngcontent-%COMP%]   .team-area[_ngcontent-%COMP%]   .team-item[_ngcontent-%COMP%]   .team-item-inner[_ngcontent-%COMP%]   .team-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        transition: all 0.3s ease; }\r\n\r\n.team-section[_ngcontent-%COMP%]   .team-area[_ngcontent-%COMP%]   .team-item[_ngcontent-%COMP%]   .team-item-inner[_ngcontent-%COMP%]   .team-content[_ngcontent-%COMP%]   .member-details[_ngcontent-%COMP%] {\r\n        margin-top: 5px;\r\n        \r\n        border-top: 1px solid #ecf0f3; }\r\n\r\n.team-section.home-2[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .team-section.home-2[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #fff; }\r\n\r\n.team-section.home-6[_ngcontent-%COMP%]   .team-area[_ngcontent-%COMP%] {\r\n    margin-bottom: -15px; }\r\n\r\n.team-section.home-6[_ngcontent-%COMP%]   .team-area[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]:nth-child(2)   .team-item[_ngcontent-%COMP%]   .team-item-inner[_ngcontent-%COMP%]::after {\r\n      background: #4e14c4; }\r\n\r\n.team-section.home-6[_ngcontent-%COMP%]   .team-area[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]:nth-child(3n+1)   .team-item[_ngcontent-%COMP%]   .team-item-inner[_ngcontent-%COMP%]::after {\r\n      background: #26a5fa; }\r\n\r\n.team-section.home-6[_ngcontent-%COMP%]   .team-area[_ngcontent-%COMP%]   .team-item[_ngcontent-%COMP%]   .team-item-inner[_ngcontent-%COMP%] {\r\n      margin-bottom: 30px; }\r\n\r\n.team-section.home-6[_ngcontent-%COMP%]   .team-area[_ngcontent-%COMP%]   .team-item[_ngcontent-%COMP%]   .team-item-inner[_ngcontent-%COMP%]:hover {\r\n        transform: translateY(5px); }\r\n\r\n.team-section.home-6[_ngcontent-%COMP%]   .team-area[_ngcontent-%COMP%]   .team-item[_ngcontent-%COMP%]   .team-item-inner[_ngcontent-%COMP%]:hover   .team-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n          transform: scale(1); }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdG9yL2RvY3Rvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBLDhEQUE4RDs7QUFDOUQ7SUFDSSxvQkFBb0IsRUFBRTs7QUFDdEI7TUFHRSx5QkFBeUI7TUFDekIsbUJBQW1CLEVBQUU7O0FBQ3JCO1FBQ0UsNkNBQTZDLEVBQUU7O0FBQy9DO1VBR0Usc0JBQXNCLEVBQUU7O0FBQzVCO1FBR0UseUJBQXlCLEVBQUU7O0FBQzdCO1FBQ0UsZUFBZTtRQUNmLHVCQUF1QjtRQUN2Qiw2QkFBNkIsRUFBRTs7QUFDckM7SUFDRSxXQUFXLEVBQUU7O0FBQ2Y7SUFDRSxvQkFBb0IsRUFBRTs7QUFDdEI7TUFDRSxtQkFBbUIsRUFBRTs7QUFDdkI7TUFDRSxtQkFBbUIsRUFBRTs7QUFDdkI7TUFDRSxtQkFBbUIsRUFBRTs7QUFDckI7UUFHRSwwQkFBMEIsRUFBRTs7QUFDNUI7VUFHRSxtQkFBbUIsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2RvY3Rvci9kb2N0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZWFtLXNlY3Rpb257XHJcbiAgICBwYWRkaW5nLXRvcDogMTM1cHg7XHJcbn1cclxuXHJcbi8qQEBAQEBAQEBAQEBAQEAgICBUZWFtIFNlY3Rpb24gU3RhcnQgSGVyZSAgQEBAQEBAQEBAQEBAQEBAQEAqL1xyXG4udGVhbS1zZWN0aW9uIC50ZWFtLWFyZWEge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTE1cHg7IH1cclxuICAgIC50ZWFtLXNlY3Rpb24gLnRlYW0tYXJlYSAudGVhbS1pdGVtIC50ZWFtLWl0ZW0taW5uZXIge1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxyXG4gICAgICAudGVhbS1zZWN0aW9uIC50ZWFtLWFyZWEgLnRlYW0taXRlbSAudGVhbS1pdGVtLWlubmVyOmhvdmVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMzBweCByZ2JhKDEzNiwgMTM2LCAxMzYsIDAuMSk7IH1cclxuICAgICAgICAudGVhbS1zZWN0aW9uIC50ZWFtLWFyZWEgLnRlYW0taXRlbSAudGVhbS1pdGVtLWlubmVyOmhvdmVyIC50ZWFtLXRodW1iIGltZyB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IH1cclxuICAgICAgLnRlYW0tc2VjdGlvbiAudGVhbS1hcmVhIC50ZWFtLWl0ZW0gLnRlYW0taXRlbS1pbm5lciAudGVhbS10aHVtYiBpbWcge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTsgfVxyXG4gICAgICAudGVhbS1zZWN0aW9uIC50ZWFtLWFyZWEgLnRlYW0taXRlbSAudGVhbS1pdGVtLWlubmVyIC50ZWFtLWNvbnRlbnQgLm1lbWJlci1kZXRhaWxzIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgLyogcGFkZGluZy10b3A6IDE1cHg7ICovXHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlY2YwZjM7IH1cclxuICAudGVhbS1zZWN0aW9uLmhvbWUtMiAuc2VjdGlvbi1oZWFkZXIgaDIsIC50ZWFtLXNlY3Rpb24uaG9tZS0yIC5zZWN0aW9uLWhlYWRlciBwIHtcclxuICAgIGNvbG9yOiAjZmZmOyB9XHJcbiAgLnRlYW0tc2VjdGlvbi5ob21lLTYgLnRlYW0tYXJlYSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMTVweDsgfVxyXG4gICAgLnRlYW0tc2VjdGlvbi5ob21lLTYgLnRlYW0tYXJlYSAuY29sLTEyOm50aC1jaGlsZCgyKSAudGVhbS1pdGVtIC50ZWFtLWl0ZW0taW5uZXI6OmFmdGVyIHtcclxuICAgICAgYmFja2dyb3VuZDogIzRlMTRjNDsgfVxyXG4gICAgLnRlYW0tc2VjdGlvbi5ob21lLTYgLnRlYW0tYXJlYSAuY29sLTEyOm50aC1jaGlsZCgzbisxKSAudGVhbS1pdGVtIC50ZWFtLWl0ZW0taW5uZXI6OmFmdGVyIHtcclxuICAgICAgYmFja2dyb3VuZDogIzI2YTVmYTsgfVxyXG4gICAgLnRlYW0tc2VjdGlvbi5ob21lLTYgLnRlYW0tYXJlYSAudGVhbS1pdGVtIC50ZWFtLWl0ZW0taW5uZXIge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4OyB9XHJcbiAgICAgIC50ZWFtLXNlY3Rpb24uaG9tZS02IC50ZWFtLWFyZWEgLnRlYW0taXRlbSAudGVhbS1pdGVtLWlubmVyOmhvdmVyIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTsgfVxyXG4gICAgICAgIC50ZWFtLXNlY3Rpb24uaG9tZS02IC50ZWFtLWFyZWEgLnRlYW0taXRlbSAudGVhbS1pdGVtLWlubmVyOmhvdmVyIC50ZWFtLXRodW1iIGltZyB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cclxuICAiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-doctor',
          templateUrl: './doctor.component.html',
          styleUrls: ['./doctor.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 20,
      vars: 0,
      consts: [[1, "footer"], [1, "container"], [1, "mt-1", "icons"], ["href", "https://www.facebook.com/abanoub.samir.501", "target", "_blank"], [1, "facebook", "fab", "fa-facebook-f", "fa-1x"], ["href", "https://www.linkedin.com/in/abanoub-naguib-68b723132", "target", "_blank"], [1, "linkedin", "fab", "fa-linkedin", "fa-1x"], ["href", "https://github.com/abanoubsamirnaguib", "target", "_blank"], [1, "github", "fab", "fa-github", "fa-1x"], ["id", "CV2", "target", "_blank", "href", "https://drive.google.com/file/d/1x3dcYqc5BO58ghwwJf6bKOB4Shr1WI2r/view", 1, "btn", "btn-warning", "button"], [1, "text-white", "text-center"], [1, "pt-0"], [1, "far", "fa-copyright"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "C.V");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Address : 4995 Al Haram, Giza | Phone : 020-1221966084 | Email : AbanoubSamir@gamil.com ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Abanoub - CREATED BY ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Abanoub Samir");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".footer[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    background: url('01.jpg');\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    left: 40%;\r\n    padding: 3rem 0rem 1rem 0rem;\r\n    margin: auto;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   #CV2[_ngcontent-%COMP%]{\r\n    color: black;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   #CV2[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    padding: 10px;\r\n    background-color: #ffc107;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n    transition: 0.5s ease-in;\r\n  }\r\n  @media (min-width: 1200px) {\r\n    .footer[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n      margin: 0px 10px 50px 15px;\r\n    }\r\n  }\r\n  .footer[_ngcontent-%COMP%]   #CV2[_ngcontent-%COMP%] {\r\n    padding:5px !important ;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   #CV2[_ngcontent-%COMP%]:hover{background-color: #fff !important;}\r\n  .footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: 0%;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-family: \"Lobster\", cursive;\r\n    font-size: larger;\r\n    font-weight: bold;\r\n    word-spacing: 3px;\r\n    letter-spacing: 2px;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .up[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    line-height: 20px;\r\n    width: 7%;\r\n    padding: 0px;\r\n    margin-bottom: 5px;\r\n    border-radius: 10%;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .facebook[_ngcontent-%COMP%]:hover {\r\n    background-color: #4267b2 !important;\r\n    \r\n    \r\n  }\r\n  .footer[_ngcontent-%COMP%]   .linkedin[_ngcontent-%COMP%]:hover {\r\n    background-color: #0077b4 !important;\r\n    \r\n    \r\n  }\r\n  .footer[_ngcontent-%COMP%]   .twitter[_ngcontent-%COMP%]:hover {\r\n    background-color: #1ab2e8 !important;\r\n    \r\n    \r\n  }\r\n  .footer[_ngcontent-%COMP%]   .github[_ngcontent-%COMP%]:hover {\r\n    background-color: #fff !important;\r\n    \r\n    \r\n  }\r\n  \r\n  @media (max-width: 768px) {\r\n    .footer[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\r\n      \r\n      padding-left: 0px;\r\n      padding-right: 0px;\r\n      padding-top: 3rem;\r\n      padding-bottom: 3rem;\r\n    }\r\n    .footer[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   #CV2[_ngcontent-%COMP%] {\r\n      \r\n      \r\n      \r\n      font-family: \"Lobster\", cursive;\r\n    }\r\n    .footer[_ngcontent-%COMP%]   .up[_ngcontent-%COMP%] {\r\n      width: -webkit-fit-content;\r\n      width: -moz-fit-content;\r\n      width: fit-content;\r\n      padding: 10px;\r\n    }\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5RDtFQUMzRDtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCw0QkFBNEI7SUFDNUIsWUFBWTtFQUNkO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGVBQWU7SUFDZixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFO01BQ0UsMEJBQTBCO0lBQzVCO0VBQ0Y7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBLG1CQUFtQixpQ0FBaUMsQ0FBQztFQUNyRDtJQUNFLGtCQUFrQjtJQUNsQixPQUFPO0VBQ1Q7RUFDQTtJQUNFLCtCQUErQjtJQUMvQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsU0FBUztJQUNULFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxvQ0FBb0M7SUFDcEMsNkNBQTZDO0lBQzdDLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0Usb0NBQW9DO0lBQ3BDLDZDQUE2QztJQUM3Qyw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLG9DQUFvQztJQUNwQyw2Q0FBNkM7SUFDN0MsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSxpQ0FBaUM7SUFDakMsNkNBQTZDO0lBQzdDLDZCQUE2QjtFQUMvQjtFQUVBLFNBQVM7RUFDVDtJQUNFO01BQ0UsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLG9CQUFvQjtJQUN0QjtJQUNBO01BQ0UsZ0JBQWdCO01BQ2hCLHVCQUF1QjtNQUN2QixzQkFBc0I7TUFDdEIsK0JBQStCO0lBQ2pDO0lBQ0E7TUFDRSwwQkFBa0I7TUFBbEIsdUJBQWtCO01BQWxCLGtCQUFrQjtNQUNsQixhQUFhO0lBQ2Y7SUFDQSIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2Jhbm5lci9ob21lLTMvMDEuanBnKTtcclxuICB9XHJcbiAgLmZvb3RlciAuaWNvbnMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNDAlO1xyXG4gICAgcGFkZGluZzogM3JlbSAwcmVtIDFyZW0gMHJlbTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgLmZvb3RlciAuaWNvbnMgYSBpLGZvb3RlciAjQ1Yye1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICAuZm9vdGVyIC5pY29ucyBhIGksIC5mb290ZXIgI0NWMiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluO1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuZm9vdGVyIC5pY29ucyBhIGkge1xyXG4gICAgICBtYXJnaW46IDBweCAxMHB4IDUwcHggMTVweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmZvb3RlciAjQ1YyIHtcclxuICAgIHBhZGRpbmc6NXB4ICFpbXBvcnRhbnQgO1xyXG4gIH1cclxuICAuZm9vdGVyICNDVjI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O31cclxuICAuZm9vdGVyIHAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwJTtcclxuICB9XHJcbiAgLmZvb3RlciBwIHNwYW4ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTG9ic3RlclwiLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHdvcmQtc3BhY2luZzogM3B4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICB9XHJcbiAgLmZvb3RlciAudXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogNyU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgfVxyXG4gIC5mb290ZXIgLmZhY2Vib29rOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjY3YjIgIWltcG9ydGFudDtcclxuICAgIC8qICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNjYsMTAzLDE3OCwxKTsgKi9cclxuICAgIC8qIGJvcmRlcjogYmxhY2sgc29saWQgMXB4OyAqL1xyXG4gIH1cclxuICAuZm9vdGVyIC5saW5rZWRpbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3N2I0ICFpbXBvcnRhbnQ7XHJcbiAgICAvKiAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDY2LDEwMywxNzgsMSk7ICovXHJcbiAgICAvKiBib3JkZXI6IGJsYWNrIHNvbGlkIDFweDsgKi9cclxuICB9XHJcbiAgLmZvb3RlciAudHdpdHRlcjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFiMmU4ICFpbXBvcnRhbnQ7XHJcbiAgICAvKiAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDY2LDEwMywxNzgsMSk7ICovXHJcbiAgICAvKiBib3JkZXI6IGJsYWNrIHNvbGlkIDFweDsgKi9cclxuICB9XHJcbiAgLmZvb3RlciAuZ2l0aHViOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIC8qICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNjYsMTAzLDE3OCwxKTsgKi9cclxuICAgIC8qIGJvcmRlcjogYmxhY2sgc29saWQgMXB4OyAqL1xyXG4gIH1cclxuICBcclxuICAvKm1vYmlsZSovXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZm9vdGVyIC5pY29ucyB7XHJcbiAgICAgIC8qIGxlZnQ6IDIwJTsgKi9cclxuICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgICAgcGFkZGluZy10b3A6IDNyZW07XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xyXG4gICAgfVxyXG4gICAgLmZvb3RlciAuaWNvbnMgI0NWMiB7XHJcbiAgICAgIC8qIGxlZnQ6IDUwcHg7ICovXHJcbiAgICAgIC8qIG1hcmdpbi1sZWZ0OiA1MHB4OyAqL1xyXG4gICAgICAvKiBtYXJnaW4tdG9wOiAyNXB4OyAqL1xyXG4gICAgICBmb250LWZhbWlseTogXCJMb2JzdGVyXCIsIGN1cnNpdmU7XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyIC51cCB7XHJcbiAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuICAgIH1cclxuICAiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _coronanumbers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../coronanumbers.service */
    "./src/app/coronanumbers.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(_CoronanumbersService) {
        var _this4 = this;

        _classCallCheck(this, HomeComponent);

        this._CoronanumbersService = _CoronanumbersService;
        this.hello23 = "he";

        this._CoronanumbersService.getCorona().subscribe(function (data) {
          _this4.coronaData = data; // console.log(this.coronaData )
        });
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_coronanumbers_service__WEBPACK_IMPORTED_MODULE_1__["CoronanumbersService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 55,
      vars: 21,
      consts: [[1, "banner-section", "home-3"], [1, "banner-area"], [1, "container"], [1, "row", "align-items-center", "justify-content-center"], [1, "col-md-6", "col-12"], [1, "content-part"], [1, "banner-content"], [1, "count-people"], [1, "lab-ul"], ["routerLink", "/doctors", 1, "lab-btn", "style-2"], ["routerLink", "/about", "fragment", "contact", 1, "lab-btn", "style-2"], [1, "banner-round"], ["src", "assets/images/banner/home-3/01.png", "alt", "banner"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "COVID-19 Tracker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Tatal Confirmed Corona Cases");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "New Confirmed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "New Deaths ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "New Recovered ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Total Confirmed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Total Deaths ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Total Recovered ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Meet the doctor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "CONTACT US");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 7, ctx.coronaData.Global.TotalConfirmed));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 9, ctx.coronaData.Global.NewConfirmed));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 11, ctx.coronaData.Global.NewDeaths));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 13, ctx.coronaData.Global.NewRecovered));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 15, ctx.coronaData.Global.TotalConfirmed));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 17, ctx.coronaData.Global.TotalDeaths));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 19, ctx.coronaData.Global.TotalRecovered));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]],
      styles: [".banner-section.home-3[_ngcontent-%COMP%] {\r\n    background: url('01.jpg') no-repeat;\r\n    background-position: center;\r\n    background-size: cover; }\r\n\r\n    @media (min-width: 992px) {\r\n      .banner-section.home-3[_ngcontent-%COMP%] {\r\n        padding: 200px 0 100px; } }\r\n\r\n    .banner-section.home-3[_ngcontent-%COMP%]   .banner-area[_ngcontent-%COMP%]   .content-part[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .banner-section.home-3[_ngcontent-%COMP%]   .banner-area[_ngcontent-%COMP%]   .content-part[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n      color: #fff;\r\n      line-height: 1.3; }\r\n\r\n    .banner-section.home-3[_ngcontent-%COMP%]   .banner-area[_ngcontent-%COMP%]   .content-part[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n      font-weight: 500; }\r\n\r\n    @media (min-width: 992px) {\r\n      .banner-section.home-3[_ngcontent-%COMP%]   .banner-area[_ngcontent-%COMP%]   .content-part[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 60px; } }\r\n\r\n    .banner-section.home-3[_ngcontent-%COMP%]   .banner-area[_ngcontent-%COMP%]   .content-part[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   h2.count-people[_ngcontent-%COMP%] {\r\n      color: #00ff99; }\r\n\r\n    @media (min-width: 1200px) {\r\n        .banner-section.home-3[_ngcontent-%COMP%]   .banner-area[_ngcontent-%COMP%]   .content-part[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   h2.count-people[_ngcontent-%COMP%] {\r\n          font-size: 80px; } }\r\n\r\n    @media (min-width: 576px) {\r\n      .banner-section.home-3[_ngcontent-%COMP%]   .banner-area[_ngcontent-%COMP%]   .content-part[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        max-width: 275px; } }\r\n\r\n    .banner-section.home-3[_ngcontent-%COMP%]   .banner-area[_ngcontent-%COMP%]   .content-part[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n      color: #fff;\r\n      padding: 8px 0 8px 20px;\r\n      font-size: 18px; }\r\n\r\n    .banner-section.home-3[_ngcontent-%COMP%]   .banner-area[_ngcontent-%COMP%]   .content-part[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2)::after {\r\n        background: #4fe04e; }\r\n\r\n    .banner-section.home-3[_ngcontent-%COMP%]   .banner-area[_ngcontent-%COMP%]   .content-part[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3)::after {\r\n        background: #ff5f5e; }\r\n\r\n    .banner-section.home-3[_ngcontent-%COMP%]   .banner-area[_ngcontent-%COMP%]   .content-part[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4)::after {\r\n        background: #0d59d3; }\r\n\r\n    .banner-section.home-3[_ngcontent-%COMP%]   .banner-area[_ngcontent-%COMP%]   .content-part[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5)::after {\r\n        background: #ff5ef2; }\r\n\r\n    .banner-section.home-3[_ngcontent-%COMP%]   .banner-area[_ngcontent-%COMP%]   .content-part[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6)::after {\r\n        background: #ff5e5e; }\r\n\r\n    .banner-section.home-3[_ngcontent-%COMP%]   .banner-area[_ngcontent-%COMP%]   .content-part[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\r\n        border-radius: 100%;\r\n        transform: translateY(-50%);\r\n        top: 50%;\r\n        left: 0;\r\n        width: 10px;\r\n        height: 10px;\r\n        background: #ff9c00; }\r\n\r\n    .banner-section.home-3[_ngcontent-%COMP%]   .banner-area[_ngcontent-%COMP%]   .content-part[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span.count-people[_ngcontent-%COMP%] {\r\n        float: right; }\r\n\r\n    .banner-section.home-3[_ngcontent-%COMP%]   .banner-area[_ngcontent-%COMP%]   .content-part[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .lab-btn[_ngcontent-%COMP%] {\r\n      margin-top: 20px; cursor: pointer;  }\r\n\r\n    .banner-section.home-3[_ngcontent-%COMP%]   .banner-area[_ngcontent-%COMP%]   .content-part[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .lab-btn[_ngcontent-%COMP%]:hover {\r\n        box-shadow: 0 5px 10px rgba(255, 255, 255, 0.2); transform: translateX(20px);}\r\n\r\n    .banner-section.home-3[_ngcontent-%COMP%]   .banner-area[_ngcontent-%COMP%]   .content-part[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .lab-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n        color: #fff;cursor: pointer; transform: translateX(20px);}\r\n\r\n    .banner-section.home-3[_ngcontent-%COMP%]   .banner-area[_ngcontent-%COMP%]   .banner-round[_ngcontent-%COMP%] {\r\n      -webkit-animation: lab_round 20s linear infinite;\r\n              animation: lab_round 20s linear infinite; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQ0FBbUU7SUFDbkUsMkJBQTJCO0lBQzNCLHNCQUFzQixFQUFFOztJQUV4QjtNQUNFO1FBQ0Usc0JBQXNCLEVBQUUsRUFBRTs7SUFDOUI7TUFDRSxXQUFXO01BQ1gsZ0JBQWdCLEVBQUU7O0lBQ3BCO01BQ0UsZ0JBQWdCLEVBQUU7O0lBQ3BCO01BQ0U7UUFDRSxlQUFlLEVBQUUsRUFBRTs7SUFDdkI7TUFDRSxjQUFjLEVBQUU7O0lBQ2hCO1FBQ0U7VUFDRSxlQUFlLEVBQUUsRUFBRTs7SUFDekI7TUFDRTtRQUNFLGdCQUFnQixFQUFFLEVBQUU7O0lBQ3hCO01BQ0UsV0FBVztNQUNYLHVCQUF1QjtNQUN2QixlQUFlLEVBQUU7O0lBQ2pCO1FBQ0UsbUJBQW1CLEVBQUU7O0lBQ3ZCO1FBQ0UsbUJBQW1CLEVBQUU7O0lBQ3ZCO1FBQ0UsbUJBQW1CLEVBQUU7O0lBQ3ZCO1FBQ0UsbUJBQW1CLEVBQUU7O0lBQ3ZCO1FBQ0UsbUJBQW1CLEVBQUU7O0lBQ3ZCO1FBR0UsbUJBQW1CO1FBR25CLDJCQUEyQjtRQUMzQixRQUFRO1FBQ1IsT0FBTztRQUNQLFdBQVc7UUFDWCxZQUFZO1FBQ1osbUJBQW1CLEVBQUU7O0lBQ3ZCO1FBQ0UsWUFBWSxFQUFFOztJQUNsQjtNQUNFLGdCQUFnQixFQUFFLGVBQWUsR0FBRzs7SUFDcEM7UUFDRSwrQ0FBK0MsRUFBRSwyQkFBMkIsQ0FBQzs7SUFDL0U7UUFDRSxXQUFXLENBQUMsZUFBZSxFQUFFLDJCQUEyQixDQUFDOztJQUM3RDtNQUNFLGdEQUF3QztjQUF4Qyx3Q0FBd0MsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbm5lci1zZWN0aW9uLmhvbWUtMyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9iYW5uZXIvaG9tZS0zLzAxLmpwZykgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgfVxyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAuYmFubmVyLXNlY3Rpb24uaG9tZS0zIHtcclxuICAgICAgICBwYWRkaW5nOiAyMDBweCAwIDEwMHB4OyB9IH1cclxuICAgIC5iYW5uZXItc2VjdGlvbi5ob21lLTMgLmJhbm5lci1hcmVhIC5jb250ZW50LXBhcnQgLmJhbm5lci1jb250ZW50IGgyLCAuYmFubmVyLXNlY3Rpb24uaG9tZS0zIC5iYW5uZXItYXJlYSAuY29udGVudC1wYXJ0IC5iYW5uZXItY29udGVudCBoNCB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4zOyB9XHJcbiAgICAuYmFubmVyLXNlY3Rpb24uaG9tZS0zIC5iYW5uZXItYXJlYSAuY29udGVudC1wYXJ0IC5iYW5uZXItY29udGVudCBoNCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7IH1cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAuYmFubmVyLXNlY3Rpb24uaG9tZS0zIC5iYW5uZXItYXJlYSAuY29udGVudC1wYXJ0IC5iYW5uZXItY29udGVudCBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiA2MHB4OyB9IH1cclxuICAgIC5iYW5uZXItc2VjdGlvbi5ob21lLTMgLmJhbm5lci1hcmVhIC5jb250ZW50LXBhcnQgLmJhbm5lci1jb250ZW50IGgyLmNvdW50LXBlb3BsZSB7XHJcbiAgICAgIGNvbG9yOiAjMDBmZjk5OyB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAuYmFubmVyLXNlY3Rpb24uaG9tZS0zIC5iYW5uZXItYXJlYSAuY29udGVudC1wYXJ0IC5iYW5uZXItY29udGVudCBoMi5jb3VudC1wZW9wbGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiA4MHB4OyB9IH1cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAuYmFubmVyLXNlY3Rpb24uaG9tZS0zIC5iYW5uZXItYXJlYSAuY29udGVudC1wYXJ0IC5iYW5uZXItY29udGVudCB1bCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyNzVweDsgfSB9XHJcbiAgICAuYmFubmVyLXNlY3Rpb24uaG9tZS0zIC5iYW5uZXItYXJlYSAuY29udGVudC1wYXJ0IC5iYW5uZXItY29udGVudCB1bCBsaSB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBwYWRkaW5nOiA4cHggMCA4cHggMjBweDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4OyB9XHJcbiAgICAgIC5iYW5uZXItc2VjdGlvbi5ob21lLTMgLmJhbm5lci1hcmVhIC5jb250ZW50LXBhcnQgLmJhbm5lci1jb250ZW50IHVsIGxpOm50aC1jaGlsZCgyKTo6YWZ0ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM0ZmUwNGU7IH1cclxuICAgICAgLmJhbm5lci1zZWN0aW9uLmhvbWUtMyAuYmFubmVyLWFyZWEgLmNvbnRlbnQtcGFydCAuYmFubmVyLWNvbnRlbnQgdWwgbGk6bnRoLWNoaWxkKDMpOjphZnRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmNWY1ZTsgfVxyXG4gICAgICAuYmFubmVyLXNlY3Rpb24uaG9tZS0zIC5iYW5uZXItYXJlYSAuY29udGVudC1wYXJ0IC5iYW5uZXItY29udGVudCB1bCBsaTpudGgtY2hpbGQoNCk6OmFmdGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMGQ1OWQzOyB9XHJcbiAgICAgIC5iYW5uZXItc2VjdGlvbi5ob21lLTMgLmJhbm5lci1hcmVhIC5jb250ZW50LXBhcnQgLmJhbm5lci1jb250ZW50IHVsIGxpOm50aC1jaGlsZCg1KTo6YWZ0ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZjVlZjI7IH1cclxuICAgICAgLmJhbm5lci1zZWN0aW9uLmhvbWUtMyAuYmFubmVyLWFyZWEgLmNvbnRlbnQtcGFydCAuYmFubmVyLWNvbnRlbnQgdWwgbGk6bnRoLWNoaWxkKDYpOjphZnRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmNWU1ZTsgfVxyXG4gICAgICAuYmFubmVyLXNlY3Rpb24uaG9tZS0zIC5iYW5uZXItYXJlYSAuY29udGVudC1wYXJ0IC5iYW5uZXItY29udGVudCB1bCBsaTo6YWZ0ZXIge1xyXG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmY5YzAwOyB9XHJcbiAgICAgIC5iYW5uZXItc2VjdGlvbi5ob21lLTMgLmJhbm5lci1hcmVhIC5jb250ZW50LXBhcnQgLmJhbm5lci1jb250ZW50IHVsIGxpIHNwYW4uY291bnQtcGVvcGxlIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7IH1cclxuICAgIC5iYW5uZXItc2VjdGlvbi5ob21lLTMgLmJhbm5lci1hcmVhIC5jb250ZW50LXBhcnQgLmJhbm5lci1jb250ZW50IC5sYWItYnRuIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDsgY3Vyc29yOiBwb2ludGVyOyAgfVxyXG4gICAgICAuYmFubmVyLXNlY3Rpb24uaG9tZS0zIC5iYW5uZXItYXJlYSAuY29udGVudC1wYXJ0IC5iYW5uZXItY29udGVudCAubGFiLWJ0bjpob3ZlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTt9XHJcbiAgICAgIC5iYW5uZXItc2VjdGlvbi5ob21lLTMgLmJhbm5lci1hcmVhIC5jb250ZW50LXBhcnQgLmJhbm5lci1jb250ZW50IC5sYWItYnRuIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO2N1cnNvcjogcG9pbnRlcjsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO31cclxuICAgIC5iYW5uZXItc2VjdGlvbi5ob21lLTMgLmJhbm5lci1hcmVhIC5iYW5uZXItcm91bmQge1xyXG4gICAgICBhbmltYXRpb246IGxhYl9yb3VuZCAyMHMgbGluZWFyIGluZmluaXRlOyB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _coronanumbers_service__WEBPACK_IMPORTED_MODULE_1__["CoronanumbersService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/notfound/notfound.component.ts":
  /*!************************************************!*\
    !*** ./src/app/notfound/notfound.component.ts ***!
    \************************************************/

  /*! exports provided: NotfoundComponent */

  /***/
  function srcAppNotfoundNotfoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function () {
      return NotfoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NotfoundComponent =
    /*#__PURE__*/
    function () {
      function NotfoundComponent() {
        _classCallCheck(this, NotfoundComponent);
      }

      _createClass(NotfoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotfoundComponent;
    }();

    NotfoundComponent.ɵfac = function NotfoundComponent_Factory(t) {
      return new (t || NotfoundComponent)();
    };

    NotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotfoundComponent,
      selectors: [["app-notfound"]],
      decls: 23,
      vars: 0,
      consts: [[1, "page-header"], [1, "container"], [1, "page-title"], [1, "breadcrumb", "lab-ul"], ["routerLink", "/home"], [1, "fore-zero-page"], [1, "images"], ["src", "assets/images/404.png", "alt", "404"], [1, "text-content", "text-center"], ["routerLink", "/home", 1, "lab-btn"]],
      template: function NotfoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Page Not Found");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "404 Error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Oops! This Page Not Found");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "We are Really Sorry But the Page you Requested is Missing :(");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Go Back to Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".fore-zero-page[_ngcontent-%COMP%] {\r\n    background: #f9fcff;\r\n    padding: 60px 0;\r\n    align-items: center; }\r\n@media (min-width: 992px) {\r\n      .fore-zero-page[_ngcontent-%COMP%] {\r\n        padding: 110px 0; } }\r\n.fore-zero-page[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%] {\r\n      text-align: center; }\r\n.fore-zero-page[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%] {\r\n      max-width: 600px;\r\n      margin: 30px auto 0px; }\r\n.fore-zero-page[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n        font-size: 20px; }\r\n@media (min-width: 576px) {\r\n          .fore-zero-page[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n            font-size: 36px; } }\r\n.fore-zero-page[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .lab-btn[_ngcontent-%COMP%] {\r\n        margin-top: 20px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnRUFBZ0U7QUFDaEU7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQixFQUFFO0FBQ3JCO01BQ0U7UUFDRSxnQkFBZ0IsRUFBRSxFQUFFO0FBQ3hCO01BQ0Usa0JBQWtCLEVBQUU7QUFDdEI7TUFDRSxnQkFBZ0I7TUFDaEIscUJBQXFCLEVBQUU7QUFDdkI7UUFDRSxlQUFlLEVBQUU7QUFDakI7VUFDRTtZQUNFLGVBQWUsRUFBRSxFQUFFO0FBQ3pCO1FBQ0UsZ0JBQWdCLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9ub3Rmb3VuZC9ub3Rmb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypAQEBAQEBAQEBAQEBAQCAgIEZvcmUgWmVybyBQYWdlIFN0YXJ0IEhlcmUgIEBAQEBAQEBAQEBAQEBAQEBAKi9cclxuLmZvcmUtemVyby1wYWdlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmOWZjZmY7XHJcbiAgICBwYWRkaW5nOiA2MHB4IDA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgLmZvcmUtemVyby1wYWdlIHtcclxuICAgICAgICBwYWRkaW5nOiAxMTBweCAwOyB9IH1cclxuICAgIC5mb3JlLXplcm8tcGFnZSAuaW1hZ2VzIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XHJcbiAgICAuZm9yZS16ZXJvLXBhZ2UgLnRleHQtY29udGVudCB7XHJcbiAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgIG1hcmdpbjogMzBweCBhdXRvIDBweDsgfVxyXG4gICAgICAuZm9yZS16ZXJvLXBhZ2UgLnRleHQtY29udGVudCBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4OyB9XHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgICAuZm9yZS16ZXJvLXBhZ2UgLnRleHQtY29udGVudCBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDsgfSB9XHJcbiAgICAgIC5mb3JlLXplcm8tcGFnZSAudGV4dC1jb250ZW50IC5sYWItYnRuIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4OyB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotfoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-notfound',
          templateUrl: './notfound.component.html',
          styleUrls: ['./notfound.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/prevention/prevention.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/prevention/prevention.component.ts ***!
    \****************************************************/

  /*! exports provided: PreventionComponent */

  /***/
  function srcAppPreventionPreventionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreventionComponent", function () {
      return PreventionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PreventionComponent =
    /*#__PURE__*/
    function () {
      function PreventionComponent() {
        _classCallCheck(this, PreventionComponent);
      }

      _createClass(PreventionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PreventionComponent;
    }();

    PreventionComponent.ɵfac = function PreventionComponent_Factory(t) {
      return new (t || PreventionComponent)();
    };

    PreventionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreventionComponent,
      selectors: [["app-prevention"]],
      decls: 99,
      vars: 0,
      consts: [["id", "prevention", 1, "service-section", "home-3", "style-2", "padding-tb", 2, "background-image", "url(assets/css/bg-image/service-bg.jpg)"], [1, "container"], ["data-wow-delay", "0.3s", 1, "section-header", "wow", "fadeInUp"], [1, "section-wrapper"], [1, "row", "no-gutters"], ["data-wow-delay", "0.3s", 1, "col-md-6", "col-12", "wow", "fadeInUp"], [1, "service-left"], [1, "row", "no-gutters", "justify-content-center"], [1, "col-12"], [1, "service-item", "style-2"], [1, "service-inner"], [1, "service-thumb"], ["src", "assets/images/service/home-3/01.jpg", "alt", "service"], [1, "service-content"], ["src", "assets/images/service/home-3/02.jpg", "alt", "service"], ["src", "assets/images/service/home-3/03.jpg", "alt", "service"], ["src", "assets/images/service/home-3/04.jpg", "alt", "service"], ["data-wow-delay", "0.4s", 1, "col-md-6", "col-12", "wow", "fadeInUp"], [1, "service-right"], ["src", "assets/images/service/home-3/05.jpg", "alt", "service"], ["src", "assets/images/service/home-3/06.jpg", "alt", "service"], ["src", "assets/images/service/home-3/07.jpg", "alt", "service"], ["src", "assets/images/service/home-3/08.jpg", "alt", "service"]],
      template: function PreventionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Prevention Coronavirus Covid-19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Dynamically formulate fully tested catalysts for change via focused methods of empowerment Assertively extend alternative synergy and extensive web services.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "What you should do");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Wash your hands sanitizer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Ware a face mask outside");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Cover your cough tissue paper");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Check your body regulerly");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "What you should avoid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Avoid contact with sick people");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Avoid contact animals");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Avoid crowded places");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Contaminated objects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".service-section[_ngcontent-%COMP%]{\r\n    padding-top:135px ;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJldmVudGlvbi9wcmV2ZW50aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9wcmV2ZW50aW9uL3ByZXZlbnRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXJ2aWNlLXNlY3Rpb257XHJcbiAgICBwYWRkaW5nLXRvcDoxMzVweCA7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreventionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-prevention',
          templateUrl: './prevention.component.html',
          styleUrls: ['./prevention.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/search-cn.pipe.ts":
  /*!***********************************!*\
    !*** ./src/app/search-cn.pipe.ts ***!
    \***********************************/

  /*! exports provided: SearchCnPipe */

  /***/
  function srcAppSearchCnPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchCnPipe", function () {
      return SearchCnPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SearchCnPipe =
    /*#__PURE__*/
    function () {
      function SearchCnPipe() {
        _classCallCheck(this, SearchCnPipe);
      }

      _createClass(SearchCnPipe, [{
        key: "transform",
        value: function transform(countryN, inText, sort) {
          if (!countryN) {
            return [];
          }

          ;

          if (!inText) {
            if (sort == "CountryCode" || sort == "Country") {
              return countryN.sort(function (a, b) {
                return a[sort] > b[sort] ? 1 : -1;
              });
            } // return countryN
            // console.log( countryN.sort( (a , b  )=>{return b.NewConfirmed - a.NewConfirmed}))


            return countryN.sort(function (b, a) {
              return a[sort] - b[sort];
            });
          }

          return countryN.filter(function (func) {
            //  console.log(func.Country.toLowerCase());
            //  console.log(inText.toLowerCase());
            if (func.Country.toLowerCase().includes(inText.toLowerCase()) || func.CountryCode.toLowerCase().includes(inText.toLowerCase())) {
              return func;
            }
          });
        }
      }]);

      return SearchCnPipe;
    }();

    SearchCnPipe.ɵfac = function SearchCnPipe_Factory(t) {
      return new (t || SearchCnPipe)();
    };

    SearchCnPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "searchCn",
      type: SearchCnPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchCnPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'searchCn'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/symptoms/symptoms.component.ts":
  /*!************************************************!*\
    !*** ./src/app/symptoms/symptoms.component.ts ***!
    \************************************************/

  /*! exports provided: SymptomsComponent */

  /***/
  function srcAppSymptomsSymptomsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SymptomsComponent", function () {
      return SymptomsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SymptomsComponent =
    /*#__PURE__*/
    function () {
      function SymptomsComponent() {
        _classCallCheck(this, SymptomsComponent);
      }

      _createClass(SymptomsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SymptomsComponent;
    }();

    SymptomsComponent.ɵfac = function SymptomsComponent_Factory(t) {
      return new (t || SymptomsComponent)();
    };

    SymptomsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SymptomsComponent,
      selectors: [["app-symptoms"]],
      decls: 69,
      vars: 0,
      consts: [["id", "symptoms", 1, "service-section", "home-3", "padding-tb", 2, "background-image", "url(assets/css/bg-image/service-bg.jpg)"], [1, "container"], ["data-wow-delay", "0.3s", 1, "section-header", "wow", "fadeInUp"], [1, "section-wrapper"], [1, "row", "no-gutters", "justify-content-center"], ["data-wow-delay", "0.3s", 1, "col-md-6", "col-12", "wow", "fadeInUp"], [1, "service-item", "style-2"], [1, "service-inner"], [1, "service-thumb"], ["src", "assets/images/service/home-3/service/01.jpg", "alt", "service"], [1, "service-content"], ["data-wow-delay", "0.4s", 1, "col-md-6", "col-12", "wow", "fadeInUp"], ["src", "assets/images/service/home-3/service/02.jpg", "alt", "service"], ["data-wow-delay", "0.5s", 1, "col-md-6", "col-12", "wow", "fadeInUp"], ["src", "assets/images/service/home-3/service/03.jpg", "alt", "service"], ["data-wow-delay", "0.6s", 1, "col-md-6", "col-12", "wow", "fadeInUp"], ["src", "assets/images/service/home-3/service/04.jpg", "alt", "service"], ["data-wow-delay", "0.7s", 1, "col-md-6", "col-12", "wow", "fadeInUp"], ["src", "assets/images/service/home-3/service/05.jpg", "alt", "service"], ["data-wow-delay", "0.8s", 1, "col-md-6", "col-12", "wow", "fadeInUp"], ["src", "assets/images/service/home-3/service/06.jpg", "alt", "service"]],
      template: function SymptomsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Corona Virus Symptoms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Dynamically formulate fully tested catalysts for change via focused methods of empowerment Assertively extend alternative synergy and extensive web services.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Coughing And Sneezing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Hot Fever");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Strong Headacke");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Shortness Of Breath");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Confusion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Sore Throat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".service-section[_ngcontent-%COMP%]{\r\n  padding-top:135px ;\r\n}\r\n\r\n\r\n\r\n.service-section[_ngcontent-%COMP%]   .service-shape[_ngcontent-%COMP%] {\r\n    top: -100px;\r\n    display: none; }\r\n\r\n@media (min-width: 1200px) {\r\n      .service-section[_ngcontent-%COMP%]   .service-shape[_ngcontent-%COMP%] {\r\n        max-width: 1170px;\r\n        margin: auto;\r\n        display: block; } }\r\n\r\n.service-section[_ngcontent-%COMP%]   .service-shape[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%] {\r\n      top: 100px;\r\n      z-index: 2; }\r\n\r\n.service-section[_ngcontent-%COMP%]   .service-shape[_ngcontent-%COMP%]   .shape.shape-1[_ngcontent-%COMP%] {\r\n        left: 0; }\r\n\r\n.service-section[_ngcontent-%COMP%]   .service-shape[_ngcontent-%COMP%]   .shape.shape-2[_ngcontent-%COMP%] {\r\n        right: 0; }\r\n\r\n.service-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%]:hover {\r\n    background: #fff; }\r\n\r\n.service-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%]:hover   .service-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n      color: #000000; }\r\n\r\n.service-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%]:hover   .service-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n      color: #696969; }\r\n\r\n.service-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%]   .service-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .service-section[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%]   .service-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    transition: all 0.3s ease; }\r\n\r\n.service-section[_ngcontent-%COMP%]   .contact-from[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    margin-top: 30px;\r\n    background: #fff;\r\n    border-radius: 6px;\r\n    box-shadow: 0 0 10px rgba(136, 136, 136, 0.1); }\r\n\r\n@media (min-width: 992px) {\r\n      .service-section[_ngcontent-%COMP%]   .contact-from[_ngcontent-%COMP%] {\r\n        margin-top: -215px; } }\r\n\r\n.service-section[_ngcontent-%COMP%]   .contact-from[_ngcontent-%COMP%]   .contact-title[_ngcontent-%COMP%] {\r\n      margin: 0 -20px 20px -20px;\r\n      padding: 20px;\r\n      padding-top: 0;\r\n      border-bottom: 1px solid #ecf0f3; }\r\n\r\n.service-section[_ngcontent-%COMP%]   .contact-from[_ngcontent-%COMP%]   .contact-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n        margin-bottom: 0; }\r\n\r\n.service-section[_ngcontent-%COMP%]   .contact-from[_ngcontent-%COMP%]   .contact-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n          font-weight: 400;\r\n          color: #ff3372; }\r\n\r\n.service-section[_ngcontent-%COMP%]   .contact-from[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n      padding-top: 15px; }\r\n\r\n.service-section[_ngcontent-%COMP%]   .contact-from[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .service-section[_ngcontent-%COMP%]   .contact-from[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n        background: #f9fdff;\r\n        margin-bottom: 20px; }\r\n\r\n.service-section[_ngcontent-%COMP%]   .contact-from[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\r\n        background: #ff3372;\r\n        color: #fff;\r\n        margin-bottom: 23px; }\r\n\r\n.service-section[_ngcontent-%COMP%]   .contact-from[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n      color: #555555;\r\n      font-style: italic; }\r\n\r\n.service-section.home-2[_ngcontent-%COMP%] {\r\n    margin-bottom: -15px; }\r\n\r\n.service-section.home-2[_ngcontent-%COMP%]   .service-wrap[_ngcontent-%COMP%] {\r\n      transform: translateY(-30px);\r\n      background: #fff;\r\n      z-index: 1;\r\n      padding-top: 60px;\r\n      box-shadow: 0 0 30px rgba(136, 136, 136, 0.1); }\r\n\r\n.service-section.home-3[_ngcontent-%COMP%] {\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat; }\r\n\r\n.service-section.home-3[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .service-section.home-3[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n      color: #fff; }\r\n\r\n.service-section.home-3[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%] {\r\n      margin-bottom: 10px; }\r\n\r\n.service-section.home-3.style-2[_ngcontent-%COMP%]   .service-left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n      margin-bottom: 15px;\r\n      text-align: center;\r\n      color: #fff; }\r\n\r\n.service-section.home-3.style-2[_ngcontent-%COMP%]   .service-left[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%] {\r\n      background: rgba(8, 170, 65, 0.5); }\r\n\r\n.service-section.home-3.style-2[_ngcontent-%COMP%]   .service-left[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%]:hover {\r\n        background: #fff;\r\n        transform: translateY(-5px); }\r\n\r\n@media (max-width: 767px) {\r\n      .service-section.home-3.style-2[_ngcontent-%COMP%]   .service-right[_ngcontent-%COMP%] {\r\n        margin-top: 60px; } }\r\n\r\n.service-section.home-3.style-2[_ngcontent-%COMP%]   .service-right[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n      color: #fff;\r\n      margin-bottom: 15px; }\r\n\r\n.service-section.home-3.style-2[_ngcontent-%COMP%]   .service-right[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%] {\r\n      background: rgba(229, 36, 36, 0.5); }\r\n\r\n.service-section.home-3.style-2[_ngcontent-%COMP%]   .service-right[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%]:hover {\r\n        background: #fff;\r\n        transform: translateY(-5px); }\r\n\r\n.service-section.home-4[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px; }\r\n\r\n.service-section.home-4[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%] {\r\n      margin-left: 0;\r\n      margin-right: 0;\r\n      padding: 30px;\r\n      background: #fff;\r\n      box-shadow: 0 0 10px rgba(136, 136, 136, 0.1); }\r\n\r\n@media (min-width: 768px) {\r\n        .service-section.home-4[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%] {\r\n          padding: 50px 30px; } }\r\n\r\n.service-section.home-4[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%]:hover   .service-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .service-section.home-4[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%]:hover   .service-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n        color: #9c47ed; }\r\n\r\n@media (min-width: 576px) {\r\n        .service-section.home-4[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%]   .service-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n          font-size: 20px; } }\r\n\r\n.service-section.home-4[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%]   .service-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .service-section.home-4[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%]   .service-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        transition: all 0.3s ease; }\r\n\r\n.service-section.home-4[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%]   .service-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        color: #696969; }\r\n\r\n.service-section.home-4[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%]   .service-content[_ngcontent-%COMP%]   .text-btn[_ngcontent-%COMP%] {\r\n        margin-top: 10px;\r\n        font-size: 14px;\r\n        font-weight: 700;\r\n        display: inline-block;\r\n        text-transform: uppercase;\r\n        transition: all 0.3s ease; }\r\n\r\n.service-section.home-4[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%]   .service-content[_ngcontent-%COMP%]   .text-btn[_ngcontent-%COMP%]:hover {\r\n          color: #ff3372; }\r\n\r\n.service-section.home-4[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item.style-2[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%] {\r\n      margin: 5px;\r\n      padding: 20px; }\r\n\r\n@media (min-width: 992px) {\r\n        .service-section.home-4[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item.style-2[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%]   .service-thumb[_ngcontent-%COMP%] {\r\n          width: 70px; } }\r\n\r\n.service-section.home-4[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item.style-2[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%]   .service-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 70px;\r\n        height: 70px; }\r\n\r\n.service-section.home-4[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item.style-2[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%]   .service-content[_ngcontent-%COMP%] {\r\n        width: 100%; }\r\n\r\n@media (min-width: 992px) {\r\n          .service-section.home-4[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item.style-2[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%]   .service-content[_ngcontent-%COMP%] {\r\n            width: calc(100% - 90px); } }\r\n\r\n.service-section.home-4[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .sert-thumb[_ngcontent-%COMP%] {\r\n      text-align: center; }\r\n\r\n@media (max-width: 991px) {\r\n        .service-section.home-4[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .sert-thumb[_ngcontent-%COMP%] {\r\n          margin: 40px 0; } }\r\n\r\n.service-section.home-4.style-2[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .service-section.home-4.style-2[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-right[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    text-align: center; }\r\n\r\n@media (min-width: 576px) {\r\n      .service-section.home-4.style-2[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .service-section.home-4.style-2[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-right[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n        font-size: 24px; } }\r\n\r\n.service-section.home-4.style-2[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-right[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%] {\r\n    background: #d5384d; }\r\n\r\n.service-section.home-4.style-2[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%] {\r\n    background: #1ab0d3; }\r\n\r\n.service-section.home-4.style-2[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%]:nth-child(even) {\r\n      background: #d5384d; }\r\n\r\n.service-section.home-4.style-2[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%]   .service-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .service-section.home-4.style-2[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%]   .service-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n      transition: all 0.3s ease;\r\n      color: #fff; }\r\n\r\n.service-section.home-4.style-2[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%]   .service-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n      margin-bottom: 10px; }\r\n\r\n.service-section.home-6[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\r\n    max-width: 100%; }\r\n\r\n.service-section.home-6[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .service-section.home-6[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-right[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    color: #fff; }\r\n\r\n@media (max-width: 991px) {\r\n    .service-section.home-6[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-left[_ngcontent-%COMP%] {\r\n      margin-bottom: 40px; } }\r\n\r\n.service-section.home-6[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    box-shadow: 0 0 10px rgba(136, 136, 136, 0.1); }\r\n\r\n@media (min-width: 576px) {\r\n      .service-section.home-6[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%]   .service-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n        font-size: 18px; } }\r\n\r\n.service-section.home-6[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%]   .service-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .service-section.home-6[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%]   .service-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n      transition: all 0.3s ease; }\r\n\r\n.service-section.home-6[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%]   .service-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n      color: #696969; }\r\n\r\n.service-section.home-6[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item.style-2[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%]   .service-thumb[_ngcontent-%COMP%] {\r\n    width: 88px; }\r\n\r\n.service-section.home-6[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item.style-2[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%]   .service-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      width: 80px;\r\n      height: 80px; }\r\n\r\n.service-section.home-7[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #ff3372;\r\n    font-weight: 400; }\r\n\r\n.service-section.home-7[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%]:hover   .service-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    color: #ff3372; }\r\n\r\n.service-section.home-7[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%]   .shape-image[_ngcontent-%COMP%] {\r\n    right: 0;\r\n    top: 0; }\r\n\r\n.service-section.home-7[_ngcontent-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-inner[_ngcontent-%COMP%]   .service-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    transition: all 0.3s ease; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ltcHRvbXMvc3ltcHRvbXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSw4REFBOEQ7O0FBQzlEO0lBQ0ksV0FBVztJQUNYLGFBQWEsRUFBRTs7QUFDZjtNQUNFO1FBQ0UsaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixjQUFjLEVBQUUsRUFBRTs7QUFDdEI7TUFDRSxVQUFVO01BQ1YsVUFBVSxFQUFFOztBQUNaO1FBQ0UsT0FBTyxFQUFFOztBQUNYO1FBQ0UsUUFBUSxFQUFFOztBQUNoQjtJQUNFLGdCQUFnQixFQUFFOztBQUNsQjtNQUNFLGNBQWMsRUFBRTs7QUFDbEI7TUFDRSxjQUFjLEVBQUU7O0FBQ3BCO0lBR0UseUJBQXlCLEVBQUU7O0FBQzdCO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFHaEIsa0JBQWtCO0lBQ2xCLDZDQUE2QyxFQUFFOztBQUMvQztNQUNFO1FBQ0Usa0JBQWtCLEVBQUUsRUFBRTs7QUFDMUI7TUFDRSwwQkFBMEI7TUFDMUIsYUFBYTtNQUNiLGNBQWM7TUFDZCxnQ0FBZ0MsRUFBRTs7QUFDbEM7UUFDRSxnQkFBZ0IsRUFBRTs7QUFDbEI7VUFDRSxnQkFBZ0I7VUFDaEIsY0FBYyxFQUFFOztBQUN0QjtNQUNFLGlCQUFpQixFQUFFOztBQUNuQjtRQUNFLG1CQUFtQjtRQUNuQixtQkFBbUIsRUFBRTs7QUFDdkI7UUFDRSxtQkFBbUI7UUFDbkIsV0FBVztRQUNYLG1CQUFtQixFQUFFOztBQUN6QjtNQUNFLGtCQUFrQjtNQUNsQixjQUFjO01BQ2Qsa0JBQWtCLEVBQUU7O0FBQ3hCO0lBQ0Usb0JBQW9CLEVBQUU7O0FBQ3RCO01BQ0UsNEJBQTRCO01BQzVCLGdCQUFnQjtNQUNoQixVQUFVO01BQ1YsaUJBQWlCO01BQ2pCLDZDQUE2QyxFQUFFOztBQUNuRDtJQUNFLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsNEJBQTRCLEVBQUU7O0FBQzlCO01BQ0UsV0FBVyxFQUFFOztBQUNmO01BQ0UsbUJBQW1CLEVBQUU7O0FBQ3ZCO01BQ0UsbUJBQW1CO01BQ25CLGtCQUFrQjtNQUNsQixXQUFXLEVBQUU7O0FBQ2Y7TUFDRSxpQ0FBaUMsRUFBRTs7QUFDbkM7UUFDRSxnQkFBZ0I7UUFHaEIsMkJBQTJCLEVBQUU7O0FBQ2pDO01BQ0U7UUFDRSxnQkFBZ0IsRUFBRSxFQUFFOztBQUN4QjtNQUNFLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsbUJBQW1CLEVBQUU7O0FBQ3ZCO01BQ0Usa0NBQWtDLEVBQUU7O0FBQ3BDO1FBQ0UsZ0JBQWdCO1FBR2hCLDJCQUEyQixFQUFFOztBQUNuQztJQUNFLG1CQUFtQixFQUFFOztBQUNyQjtNQUNFLGNBQWM7TUFDZCxlQUFlO01BQ2YsYUFBYTtNQUNiLGdCQUFnQjtNQUNoQiw2Q0FBNkMsRUFBRTs7QUFDL0M7UUFDRTtVQUNFLGtCQUFrQixFQUFFLEVBQUU7O0FBQzFCO1FBQ0UsY0FBYyxFQUFFOztBQUNsQjtRQUNFO1VBQ0UsZUFBZSxFQUFFLEVBQUU7O0FBQ3ZCO1FBR0UseUJBQXlCLEVBQUU7O0FBQzdCO1FBQ0UsY0FBYyxFQUFFOztBQUNsQjtRQUNFLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQix5QkFBeUI7UUFHekIseUJBQXlCLEVBQUU7O0FBQzNCO1VBQ0UsY0FBYyxFQUFFOztBQUN0QjtNQUNFLFdBQVc7TUFDWCxhQUFhLEVBQUU7O0FBQ2Y7UUFDRTtVQUNFLFdBQVcsRUFBRSxFQUFFOztBQUNuQjtRQUNFLFdBQVc7UUFDWCxZQUFZLEVBQUU7O0FBQ2hCO1FBQ0UsV0FBVyxFQUFFOztBQUNiO1VBQ0U7WUFDRSx3QkFBd0IsRUFBRSxFQUFFOztBQUNwQztNQUNFLGtCQUFrQixFQUFFOztBQUNwQjtRQUNFO1VBQ0UsY0FBYyxFQUFFLEVBQUU7O0FBQzFCO0lBQ0Usa0JBQWtCLEVBQUU7O0FBQ3BCO01BQ0U7UUFDRSxlQUFlLEVBQUUsRUFBRTs7QUFDekI7SUFDRSxtQkFBbUIsRUFBRTs7QUFDdkI7SUFDRSxtQkFBbUIsRUFBRTs7QUFDckI7TUFDRSxtQkFBbUIsRUFBRTs7QUFDdkI7TUFHRSx5QkFBeUI7TUFDekIsV0FBVyxFQUFFOztBQUNmO01BQ0UsbUJBQW1CLEVBQUU7O0FBQ3pCO0lBQ0UsZUFBZSxFQUFFOztBQUNuQjtJQUNFLFdBQVcsRUFBRTs7QUFDZjtJQUNFO01BQ0UsbUJBQW1CLEVBQUUsRUFBRTs7QUFDM0I7SUFDRSxnQkFBZ0I7SUFDaEIsNkNBQTZDLEVBQUU7O0FBQy9DO01BQ0U7UUFDRSxlQUFlLEVBQUUsRUFBRTs7QUFDdkI7TUFHRSx5QkFBeUIsRUFBRTs7QUFDN0I7TUFDRSxjQUFjLEVBQUU7O0FBQ3BCO0lBQ0UsV0FBVyxFQUFFOztBQUNiO01BQ0UsV0FBVztNQUNYLFlBQVksRUFBRTs7QUFDbEI7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCLEVBQUU7O0FBQ3BCO0lBQ0UsY0FBYyxFQUFFOztBQUNsQjtJQUNFLFFBQVE7SUFDUixNQUFNLEVBQUU7O0FBQ1Y7SUFHRSx5QkFBeUIsRUFBRSIsImZpbGUiOiJzcmMvYXBwL3N5bXB0b21zL3N5bXB0b21zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VydmljZS1zZWN0aW9ue1xyXG4gIHBhZGRpbmctdG9wOjEzNXB4IDtcclxufVxyXG5cclxuLyogQEBAQEBAQEBAQEBAQCAgU2VydmljZSBTZWN0aW9uIFN0YXJ0IEhlcmUgIEBAQEBAQEBAQEBAQEBAICovXHJcbi5zZXJ2aWNlLXNlY3Rpb24gLnNlcnZpY2Utc2hhcGUge1xyXG4gICAgdG9wOiAtMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBub25lOyB9XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgIC5zZXJ2aWNlLXNlY3Rpb24gLnNlcnZpY2Utc2hhcGUge1xyXG4gICAgICAgIG1heC13aWR0aDogMTE3MHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBibG9jazsgfSB9XHJcbiAgICAuc2VydmljZS1zZWN0aW9uIC5zZXJ2aWNlLXNoYXBlIC5zaGFwZSB7XHJcbiAgICAgIHRvcDogMTAwcHg7XHJcbiAgICAgIHotaW5kZXg6IDI7IH1cclxuICAgICAgLnNlcnZpY2Utc2VjdGlvbiAuc2VydmljZS1zaGFwZSAuc2hhcGUuc2hhcGUtMSB7XHJcbiAgICAgICAgbGVmdDogMDsgfVxyXG4gICAgICAuc2VydmljZS1zZWN0aW9uIC5zZXJ2aWNlLXNoYXBlIC5zaGFwZS5zaGFwZS0yIHtcclxuICAgICAgICByaWdodDogMDsgfVxyXG4gIC5zZXJ2aWNlLXNlY3Rpb24gLnNlY3Rpb24td3JhcHBlciAuc2VydmljZS1pdGVtIC5zZXJ2aWNlLWlubmVyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7IH1cclxuICAgIC5zZXJ2aWNlLXNlY3Rpb24gLnNlY3Rpb24td3JhcHBlciAuc2VydmljZS1pdGVtIC5zZXJ2aWNlLWlubmVyOmhvdmVyIC5zZXJ2aWNlLWNvbnRlbnQgaDQge1xyXG4gICAgICBjb2xvcjogIzAwMDAwMDsgfVxyXG4gICAgLnNlcnZpY2Utc2VjdGlvbiAuc2VjdGlvbi13cmFwcGVyIC5zZXJ2aWNlLWl0ZW0gLnNlcnZpY2UtaW5uZXI6aG92ZXIgLnNlcnZpY2UtY29udGVudCBwIHtcclxuICAgICAgY29sb3I6ICM2OTY5Njk7IH1cclxuICAuc2VydmljZS1zZWN0aW9uIC5zZWN0aW9uLXdyYXBwZXIgLnNlcnZpY2UtaXRlbSAuc2VydmljZS1pbm5lciAuc2VydmljZS1jb250ZW50IGg0LCAuc2VydmljZS1zZWN0aW9uIC5zZWN0aW9uLXdyYXBwZXIgLnNlcnZpY2UtaXRlbSAuc2VydmljZS1pbm5lciAuc2VydmljZS1jb250ZW50IHAge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTsgfVxyXG4gIC5zZXJ2aWNlLXNlY3Rpb24gLmNvbnRhY3QtZnJvbSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgxMzYsIDEzNiwgMTM2LCAwLjEpOyB9XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgLnNlcnZpY2Utc2VjdGlvbiAuY29udGFjdC1mcm9tIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMjE1cHg7IH0gfVxyXG4gICAgLnNlcnZpY2Utc2VjdGlvbiAuY29udGFjdC1mcm9tIC5jb250YWN0LXRpdGxlIHtcclxuICAgICAgbWFyZ2luOiAwIC0yMHB4IDIwcHggLTIwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VjZjBmMzsgfVxyXG4gICAgICAuc2VydmljZS1zZWN0aW9uIC5jb250YWN0LWZyb20gLmNvbnRhY3QtdGl0bGUgaDQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7IH1cclxuICAgICAgICAuc2VydmljZS1zZWN0aW9uIC5jb250YWN0LWZyb20gLmNvbnRhY3QtdGl0bGUgaDQgc3BhbiB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgY29sb3I6ICNmZjMzNzI7IH1cclxuICAgIC5zZXJ2aWNlLXNlY3Rpb24gLmNvbnRhY3QtZnJvbSBmb3JtIHtcclxuICAgICAgcGFkZGluZy10b3A6IDE1cHg7IH1cclxuICAgICAgLnNlcnZpY2Utc2VjdGlvbiAuY29udGFjdC1mcm9tIGZvcm0gaW5wdXQsIC5zZXJ2aWNlLXNlY3Rpb24gLmNvbnRhY3QtZnJvbSBmb3JtIHRleHRhcmVhIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjlmZGZmO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cclxuICAgICAgLnNlcnZpY2Utc2VjdGlvbiAuY29udGFjdC1mcm9tIGZvcm0gaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmYzMzcyO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIzcHg7IH1cclxuICAgIC5zZXJ2aWNlLXNlY3Rpb24gLmNvbnRhY3QtZnJvbSBwIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogIzU1NTU1NTtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljOyB9XHJcbiAgLnNlcnZpY2Utc2VjdGlvbi5ob21lLTIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTE1cHg7IH1cclxuICAgIC5zZXJ2aWNlLXNlY3Rpb24uaG9tZS0yIC5zZXJ2aWNlLXdyYXAge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDMwcHggcmdiYSgxMzYsIDEzNiwgMTM2LCAwLjEpOyB9XHJcbiAgLnNlcnZpY2Utc2VjdGlvbi5ob21lLTMge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IH1cclxuICAgIC5zZXJ2aWNlLXNlY3Rpb24uaG9tZS0zIC5zZWN0aW9uLWhlYWRlciBoMiwgLnNlcnZpY2Utc2VjdGlvbi5ob21lLTMgLnNlY3Rpb24taGVhZGVyIHAge1xyXG4gICAgICBjb2xvcjogI2ZmZjsgfVxyXG4gICAgLnNlcnZpY2Utc2VjdGlvbi5ob21lLTMgLnNlY3Rpb24td3JhcHBlciB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cclxuICAgIC5zZXJ2aWNlLXNlY3Rpb24uaG9tZS0zLnN0eWxlLTIgLnNlcnZpY2UtbGVmdCBoMyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICNmZmY7IH1cclxuICAgIC5zZXJ2aWNlLXNlY3Rpb24uaG9tZS0zLnN0eWxlLTIgLnNlcnZpY2UtbGVmdCAuc2VydmljZS1pdGVtIC5zZXJ2aWNlLWlubmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSg4LCAxNzAsIDY1LCAwLjUpOyB9XHJcbiAgICAgIC5zZXJ2aWNlLXNlY3Rpb24uaG9tZS0zLnN0eWxlLTIgLnNlcnZpY2UtbGVmdCAuc2VydmljZS1pdGVtIC5zZXJ2aWNlLWlubmVyOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpOyB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgLnNlcnZpY2Utc2VjdGlvbi5ob21lLTMuc3R5bGUtMiAuc2VydmljZS1yaWdodCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNjBweDsgfSB9XHJcbiAgICAuc2VydmljZS1zZWN0aW9uLmhvbWUtMy5zdHlsZS0yIC5zZXJ2aWNlLXJpZ2h0IGgzIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDsgfVxyXG4gICAgLnNlcnZpY2Utc2VjdGlvbi5ob21lLTMuc3R5bGUtMiAuc2VydmljZS1yaWdodCAuc2VydmljZS1pdGVtIC5zZXJ2aWNlLWlubmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyMjksIDM2LCAzNiwgMC41KTsgfVxyXG4gICAgICAuc2VydmljZS1zZWN0aW9uLmhvbWUtMy5zdHlsZS0yIC5zZXJ2aWNlLXJpZ2h0IC5zZXJ2aWNlLWl0ZW0gLnNlcnZpY2UtaW5uZXI6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7IH1cclxuICAuc2VydmljZS1zZWN0aW9uLmhvbWUtNCAuc2VjdGlvbi13cmFwcGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7IH1cclxuICAgIC5zZXJ2aWNlLXNlY3Rpb24uaG9tZS00IC5zZWN0aW9uLXdyYXBwZXIgLnNlcnZpY2UtaXRlbSAuc2VydmljZS1pbm5lciB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMTM2LCAxMzYsIDEzNiwgMC4xKTsgfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAuc2VydmljZS1zZWN0aW9uLmhvbWUtNCAuc2VjdGlvbi13cmFwcGVyIC5zZXJ2aWNlLWl0ZW0gLnNlcnZpY2UtaW5uZXIge1xyXG4gICAgICAgICAgcGFkZGluZzogNTBweCAzMHB4OyB9IH1cclxuICAgICAgLnNlcnZpY2Utc2VjdGlvbi5ob21lLTQgLnNlY3Rpb24td3JhcHBlciAuc2VydmljZS1pdGVtIC5zZXJ2aWNlLWlubmVyOmhvdmVyIC5zZXJ2aWNlLWNvbnRlbnQgaDQsIC5zZXJ2aWNlLXNlY3Rpb24uaG9tZS00IC5zZWN0aW9uLXdyYXBwZXIgLnNlcnZpY2UtaXRlbSAuc2VydmljZS1pbm5lcjpob3ZlciAuc2VydmljZS1jb250ZW50IGg1IHtcclxuICAgICAgICBjb2xvcjogIzljNDdlZDsgfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICAuc2VydmljZS1zZWN0aW9uLmhvbWUtNCAuc2VjdGlvbi13cmFwcGVyIC5zZXJ2aWNlLWl0ZW0gLnNlcnZpY2UtaW5uZXIgLnNlcnZpY2UtY29udGVudCBoNSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7IH0gfVxyXG4gICAgICAuc2VydmljZS1zZWN0aW9uLmhvbWUtNCAuc2VjdGlvbi13cmFwcGVyIC5zZXJ2aWNlLWl0ZW0gLnNlcnZpY2UtaW5uZXIgLnNlcnZpY2UtY29udGVudCBoNCwgLnNlcnZpY2Utc2VjdGlvbi5ob21lLTQgLnNlY3Rpb24td3JhcHBlciAuc2VydmljZS1pdGVtIC5zZXJ2aWNlLWlubmVyIC5zZXJ2aWNlLWNvbnRlbnQgcCB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOyB9XHJcbiAgICAgIC5zZXJ2aWNlLXNlY3Rpb24uaG9tZS00IC5zZWN0aW9uLXdyYXBwZXIgLnNlcnZpY2UtaXRlbSAuc2VydmljZS1pbm5lciAuc2VydmljZS1jb250ZW50IHAge1xyXG4gICAgICAgIGNvbG9yOiAjNjk2OTY5OyB9XHJcbiAgICAgIC5zZXJ2aWNlLXNlY3Rpb24uaG9tZS00IC5zZWN0aW9uLXdyYXBwZXIgLnNlcnZpY2UtaXRlbSAuc2VydmljZS1pbm5lciAuc2VydmljZS1jb250ZW50IC50ZXh0LWJ0biB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7IH1cclxuICAgICAgICAuc2VydmljZS1zZWN0aW9uLmhvbWUtNCAuc2VjdGlvbi13cmFwcGVyIC5zZXJ2aWNlLWl0ZW0gLnNlcnZpY2UtaW5uZXIgLnNlcnZpY2UtY29udGVudCAudGV4dC1idG46aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICNmZjMzNzI7IH1cclxuICAgIC5zZXJ2aWNlLXNlY3Rpb24uaG9tZS00IC5zZWN0aW9uLXdyYXBwZXIgLnNlcnZpY2UtaXRlbS5zdHlsZS0yIC5zZXJ2aWNlLWlubmVyIHtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7IH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgLnNlcnZpY2Utc2VjdGlvbi5ob21lLTQgLnNlY3Rpb24td3JhcHBlciAuc2VydmljZS1pdGVtLnN0eWxlLTIgLnNlcnZpY2UtaW5uZXIgLnNlcnZpY2UtdGh1bWIge1xyXG4gICAgICAgICAgd2lkdGg6IDcwcHg7IH0gfVxyXG4gICAgICAuc2VydmljZS1zZWN0aW9uLmhvbWUtNCAuc2VjdGlvbi13cmFwcGVyIC5zZXJ2aWNlLWl0ZW0uc3R5bGUtMiAuc2VydmljZS1pbm5lciAuc2VydmljZS10aHVtYiBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgIGhlaWdodDogNzBweDsgfVxyXG4gICAgICAuc2VydmljZS1zZWN0aW9uLmhvbWUtNCAuc2VjdGlvbi13cmFwcGVyIC5zZXJ2aWNlLWl0ZW0uc3R5bGUtMiAuc2VydmljZS1pbm5lciAuc2VydmljZS1jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTsgfVxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgLnNlcnZpY2Utc2VjdGlvbi5ob21lLTQgLnNlY3Rpb24td3JhcHBlciAuc2VydmljZS1pdGVtLnN0eWxlLTIgLnNlcnZpY2UtaW5uZXIgLnNlcnZpY2UtY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA5MHB4KTsgfSB9XHJcbiAgICAuc2VydmljZS1zZWN0aW9uLmhvbWUtNCAuc2VjdGlvbi13cmFwcGVyIC5zZXJ0LXRodW1iIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICAgIC5zZXJ2aWNlLXNlY3Rpb24uaG9tZS00IC5zZWN0aW9uLXdyYXBwZXIgLnNlcnQtdGh1bWIge1xyXG4gICAgICAgICAgbWFyZ2luOiA0MHB4IDA7IH0gfVxyXG4gIC5zZXJ2aWNlLXNlY3Rpb24uaG9tZS00LnN0eWxlLTIgLnNlY3Rpb24td3JhcHBlciAuc2VydmljZS1sZWZ0IGgzLCAuc2VydmljZS1zZWN0aW9uLmhvbWUtNC5zdHlsZS0yIC5zZWN0aW9uLXdyYXBwZXIgLnNlcnZpY2UtcmlnaHQgaDMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgICAgLnNlcnZpY2Utc2VjdGlvbi5ob21lLTQuc3R5bGUtMiAuc2VjdGlvbi13cmFwcGVyIC5zZXJ2aWNlLWxlZnQgaDMsIC5zZXJ2aWNlLXNlY3Rpb24uaG9tZS00LnN0eWxlLTIgLnNlY3Rpb24td3JhcHBlciAuc2VydmljZS1yaWdodCBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4OyB9IH1cclxuICAuc2VydmljZS1zZWN0aW9uLmhvbWUtNC5zdHlsZS0yIC5zZWN0aW9uLXdyYXBwZXIgLnNlcnZpY2UtcmlnaHQgLnNlcnZpY2UtaXRlbSAuc2VydmljZS1pbm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDUzODRkOyB9XHJcbiAgLnNlcnZpY2Utc2VjdGlvbi5ob21lLTQuc3R5bGUtMiAuc2VjdGlvbi13cmFwcGVyIC5zZXJ2aWNlLWl0ZW0gLnNlcnZpY2UtaW5uZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzFhYjBkMzsgfVxyXG4gICAgLnNlcnZpY2Utc2VjdGlvbi5ob21lLTQuc3R5bGUtMiAuc2VjdGlvbi13cmFwcGVyIC5zZXJ2aWNlLWl0ZW0gLnNlcnZpY2UtaW5uZXI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgYmFja2dyb3VuZDogI2Q1Mzg0ZDsgfVxyXG4gICAgLnNlcnZpY2Utc2VjdGlvbi5ob21lLTQuc3R5bGUtMiAuc2VjdGlvbi13cmFwcGVyIC5zZXJ2aWNlLWl0ZW0gLnNlcnZpY2UtaW5uZXIgLnNlcnZpY2UtY29udGVudCBoNCwgLnNlcnZpY2Utc2VjdGlvbi5ob21lLTQuc3R5bGUtMiAuc2VjdGlvbi13cmFwcGVyIC5zZXJ2aWNlLWl0ZW0gLnNlcnZpY2UtaW5uZXIgLnNlcnZpY2UtY29udGVudCBwIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgIGNvbG9yOiAjZmZmOyB9XHJcbiAgICAuc2VydmljZS1zZWN0aW9uLmhvbWUtNC5zdHlsZS0yIC5zZWN0aW9uLXdyYXBwZXIgLnNlcnZpY2UtaXRlbSAuc2VydmljZS1pbm5lciAuc2VydmljZS1jb250ZW50IGg0IHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxyXG4gIC5zZXJ2aWNlLXNlY3Rpb24uaG9tZS02IC5zZWN0aW9uLWhlYWRlciB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH1cclxuICAuc2VydmljZS1zZWN0aW9uLmhvbWUtNiAuc2VjdGlvbi13cmFwcGVyIC5zZXJ2aWNlLWxlZnQgaDMsIC5zZXJ2aWNlLXNlY3Rpb24uaG9tZS02IC5zZWN0aW9uLXdyYXBwZXIgLnNlcnZpY2UtcmlnaHQgaDMge1xyXG4gICAgY29sb3I6ICNmZmY7IH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIC5zZXJ2aWNlLXNlY3Rpb24uaG9tZS02IC5zZWN0aW9uLXdyYXBwZXIgLnNlcnZpY2UtbGVmdCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7IH0gfVxyXG4gIC5zZXJ2aWNlLXNlY3Rpb24uaG9tZS02IC5zZWN0aW9uLXdyYXBwZXIgLnNlcnZpY2UtaXRlbSAuc2VydmljZS1pbm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgxMzYsIDEzNiwgMTM2LCAwLjEpOyB9XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgICAgLnNlcnZpY2Utc2VjdGlvbi5ob21lLTYgLnNlY3Rpb24td3JhcHBlciAuc2VydmljZS1pdGVtIC5zZXJ2aWNlLWlubmVyIC5zZXJ2aWNlLWNvbnRlbnQgaDUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDsgfSB9XHJcbiAgICAuc2VydmljZS1zZWN0aW9uLmhvbWUtNiAuc2VjdGlvbi13cmFwcGVyIC5zZXJ2aWNlLWl0ZW0gLnNlcnZpY2UtaW5uZXIgLnNlcnZpY2UtY29udGVudCBoNCwgLnNlcnZpY2Utc2VjdGlvbi5ob21lLTYgLnNlY3Rpb24td3JhcHBlciAuc2VydmljZS1pdGVtIC5zZXJ2aWNlLWlubmVyIC5zZXJ2aWNlLWNvbnRlbnQgcCB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOyB9XHJcbiAgICAuc2VydmljZS1zZWN0aW9uLmhvbWUtNiAuc2VjdGlvbi13cmFwcGVyIC5zZXJ2aWNlLWl0ZW0gLnNlcnZpY2UtaW5uZXIgLnNlcnZpY2UtY29udGVudCBwIHtcclxuICAgICAgY29sb3I6ICM2OTY5Njk7IH1cclxuICAuc2VydmljZS1zZWN0aW9uLmhvbWUtNiAuc2VjdGlvbi13cmFwcGVyIC5zZXJ2aWNlLWl0ZW0uc3R5bGUtMiAuc2VydmljZS1pbm5lciAuc2VydmljZS10aHVtYiB7XHJcbiAgICB3aWR0aDogODhweDsgfVxyXG4gICAgLnNlcnZpY2Utc2VjdGlvbi5ob21lLTYgLnNlY3Rpb24td3JhcHBlciAuc2VydmljZS1pdGVtLnN0eWxlLTIgLnNlcnZpY2UtaW5uZXIgLnNlcnZpY2UtdGh1bWIgaW1nIHtcclxuICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDsgfVxyXG4gIC5zZXJ2aWNlLXNlY3Rpb24uaG9tZS03IC5zZWN0aW9uLWhlYWRlciBoNCBzcGFuIHtcclxuICAgIGNvbG9yOiAjZmYzMzcyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDsgfVxyXG4gIC5zZXJ2aWNlLXNlY3Rpb24uaG9tZS03IC5zZWN0aW9uLXdyYXBwZXIgLnNlcnZpY2UtaXRlbSAuc2VydmljZS1pbm5lcjpob3ZlciAuc2VydmljZS1jb250ZW50IGg1IHtcclxuICAgIGNvbG9yOiAjZmYzMzcyOyB9XHJcbiAgLnNlcnZpY2Utc2VjdGlvbi5ob21lLTcgLnNlY3Rpb24td3JhcHBlciAuc2VydmljZS1pdGVtIC5zZXJ2aWNlLWlubmVyIC5zaGFwZS1pbWFnZSB7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDsgfVxyXG4gIC5zZXJ2aWNlLXNlY3Rpb24uaG9tZS03IC5zZWN0aW9uLXdyYXBwZXIgLnNlcnZpY2UtaXRlbSAuc2VydmljZS1pbm5lciAuc2VydmljZS1jb250ZW50IGg1IHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7IH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SymptomsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-symptoms',
          templateUrl: './symptoms.component.html',
          styleUrls: ['./symptoms.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/virs-spreed/virs-spreed.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/virs-spreed/virs-spreed.component.ts ***!
    \******************************************************/

  /*! exports provided: VirsSpreedComponent */

  /***/
  function srcAppVirsSpreedVirsSpreedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VirsSpreedComponent", function () {
      return VirsSpreedComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var VirsSpreedComponent =
    /*#__PURE__*/
    function () {
      function VirsSpreedComponent() {
        _classCallCheck(this, VirsSpreedComponent);
      }

      _createClass(VirsSpreedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VirsSpreedComponent;
    }();

    VirsSpreedComponent.ɵfac = function VirsSpreedComponent_Factory(t) {
      return new (t || VirsSpreedComponent)();
    };

    VirsSpreedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VirsSpreedComponent,
      selectors: [["app-virs-spreed"]],
      decls: 40,
      vars: 0,
      consts: [["id", "about", 1, "about-section", "style-3", "bg-about", "padding-tb"], [1, "container"], [1, "row", "justify-content-center", "align-items-center"], ["data-wow-delay", "0.3s", 1, "col-lg-6", "col-12", "wow", "fadeInUp"], [1, "about-thumb"], ["src", "assets/images/about/home-3/01.png", "alt", "about"], ["data-wow-delay", "0.4s", 1, "col-lg-6", "col-12", "wow", "fadeInUp"], [1, "about-content"], [1, "ab-title"], [1, "lab-ul"], [1, "ab-thumb"], ["src", "assets/images/about/icon/home-3/01.jpg", "alt", "ab-thumb"], [1, "ab-content"], ["src", "assets/images/about/icon/home-3/02.jpg", "alt", "ab-thumb"], ["src", "assets/images/about/icon/home-3/03.jpg", "alt", "ab-thumb"]],
      template: function VirsSpreedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "How Virus Spread");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "How Contagion Coronavirus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Don\u2019t get shirty with mein owtto doing with me arse down the problems have it car boot happy days no biggie bevvy only awesome quid I,m goods info my theme flat the lttle rotter cheeky boot happy days");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Human Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Air Transmission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Contaminated Objects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".about-section[_ngcontent-%COMP%]{\r\n  padding-top:125px ;\r\n}\r\n  \r\n  .about-section[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px; }\r\n  .about-section[_ngcontent-%COMP%]   .about-shape[_ngcontent-%COMP%] {\r\n      right: 0; }\r\n  @media (max-width: 991px) {\r\n      .about-section[_ngcontent-%COMP%]   .about-thumb[_ngcontent-%COMP%] {\r\n        margin-bottom: 30px; } }\r\n  .about-section[_ngcontent-%COMP%]   .about-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      border-radius: 100%; }\r\n  .about-section[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .ab-title[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n      display: inline-block;\r\n      color: #ff3372;\r\n      font-size: 18px; }\r\n  .about-section[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .ab-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n      margin-top: 30px; }\r\n  .about-section[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .ab-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        justify-content: space-between;\r\n        padding: 15px 0; }\r\n  .about-section[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .ab-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ab-thumb[_ngcontent-%COMP%] {\r\n          width: 80px;\r\n          height: 80px;\r\n          text-align: center;\r\n          border-radius: 100%; }\r\n  .about-section[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .ab-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ab-content[_ngcontent-%COMP%] {\r\n          width: calc(100% - 95px); }\r\n  .about-section[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .ab-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ab-content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n            margin-bottom: 5px; }\r\n  @media (min-width: 576px) {\r\n              .about-section[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .ab-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ab-content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n                font-size: 20px; } }\r\n  .about-section[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .ab-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ab-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n            margin-bottom: 0; }\r\n  .about-section.style-2[_ngcontent-%COMP%]   .about-shape[_ngcontent-%COMP%] {\r\n      right: auto;\r\n      left: 0; }\r\n  .about-section.style-2[_ngcontent-%COMP%]   .lab-btn[_ngcontent-%COMP%] {\r\n      margin-top: 30px; }\r\n  .about-section.style-3[_ngcontent-%COMP%] {\r\n      margin-bottom: 0; }\r\n  .about-section.style-3[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .ab-title[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n        color: #00ff99; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlycy1zcHJlZWQvdmlycy1zcHJlZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjtFQUNFLDREQUE0RDtFQUM1RDtJQUNFLG1CQUFtQixFQUFFO0VBQ3JCO01BQ0UsUUFBUSxFQUFFO0VBQ1o7TUFDRTtRQUNFLG1CQUFtQixFQUFFLEVBQUU7RUFDM0I7TUFHRSxtQkFBbUIsRUFBRTtFQUN2QjtNQUNFLHFCQUFxQjtNQUNyQixjQUFjO01BQ2QsZUFBZSxFQUFFO0VBQ25CO01BQ0UsZ0JBQWdCLEVBQUU7RUFDbEI7UUFDRSw4QkFBOEI7UUFDOUIsZUFBZSxFQUFFO0VBQ2pCO1VBQ0UsV0FBVztVQUNYLFlBQVk7VUFDWixrQkFBa0I7VUFHbEIsbUJBQW1CLEVBQUU7RUFDdkI7VUFDRSx3QkFBd0IsRUFBRTtFQUMxQjtZQUNFLGtCQUFrQixFQUFFO0VBQ3BCO2NBQ0U7Z0JBQ0UsZUFBZSxFQUFFLEVBQUU7RUFDekI7WUFDRSxnQkFBZ0IsRUFBRTtFQUMxQjtNQUNFLFdBQVc7TUFDWCxPQUFPLEVBQUU7RUFDWDtNQUNFLGdCQUFnQixFQUFFO0VBQ3BCO01BQ0UsZ0JBQWdCLEVBQUU7RUFDbEI7UUFDRSxjQUFjLEVBQUUiLCJmaWxlIjoic3JjL2FwcC92aXJzLXNwcmVlZC92aXJzLXNwcmVlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0LXNlY3Rpb257XHJcbiAgcGFkZGluZy10b3A6MTI1cHggO1xyXG59XHJcbiAgLyogQEBAQEBAQEBAQEBAQCAgQWJvdXQgU2VjdGlvbiBTdGFydCBIZXJlICBAQEBAQEBAQEBAQEBAQCAqL1xyXG4gIC5hYm91dC1zZWN0aW9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7IH1cclxuICAgIC5hYm91dC1zZWN0aW9uIC5hYm91dC1zaGFwZSB7XHJcbiAgICAgIHJpZ2h0OiAwOyB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgLmFib3V0LXNlY3Rpb24gLmFib3V0LXRodW1iIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4OyB9IH1cclxuICAgIC5hYm91dC1zZWN0aW9uIC5hYm91dC10aHVtYiBpbWcge1xyXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTsgfVxyXG4gICAgLmFib3V0LXNlY3Rpb24gLmFib3V0LWNvbnRlbnQgLmFiLXRpdGxlID4gc3BhbiB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgY29sb3I6ICNmZjMzNzI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDsgfVxyXG4gICAgLmFib3V0LXNlY3Rpb24gLmFib3V0LWNvbnRlbnQgLmFiLXRpdGxlIHVsIHtcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDsgfVxyXG4gICAgICAuYWJvdXQtc2VjdGlvbiAuYWJvdXQtY29udGVudCAuYWItdGl0bGUgdWwgbGkge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDA7IH1cclxuICAgICAgICAuYWJvdXQtc2VjdGlvbiAuYWJvdXQtY29udGVudCAuYWItdGl0bGUgdWwgbGkgLmFiLXRodW1iIHtcclxuICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTsgfVxyXG4gICAgICAgIC5hYm91dC1zZWN0aW9uIC5hYm91dC1jb250ZW50IC5hYi10aXRsZSB1bCBsaSAuYWItY29udGVudCB7XHJcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gOTVweCk7IH1cclxuICAgICAgICAgIC5hYm91dC1zZWN0aW9uIC5hYm91dC1jb250ZW50IC5hYi10aXRsZSB1bCBsaSAuYWItY29udGVudCBoNiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDsgfVxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICAgICAgICAuYWJvdXQtc2VjdGlvbiAuYWJvdXQtY29udGVudCAuYWItdGl0bGUgdWwgbGkgLmFiLWNvbnRlbnQgaDYge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4OyB9IH1cclxuICAgICAgICAgIC5hYm91dC1zZWN0aW9uIC5hYm91dC1jb250ZW50IC5hYi10aXRsZSB1bCBsaSAuYWItY29udGVudCBwIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDsgfVxyXG4gICAgLmFib3V0LXNlY3Rpb24uc3R5bGUtMiAuYWJvdXQtc2hhcGUge1xyXG4gICAgICByaWdodDogYXV0bztcclxuICAgICAgbGVmdDogMDsgfVxyXG4gICAgLmFib3V0LXNlY3Rpb24uc3R5bGUtMiAubGFiLWJ0biB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7IH1cclxuICAgIC5hYm91dC1zZWN0aW9uLnN0eWxlLTMge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwOyB9XHJcbiAgICAgIC5hYm91dC1zZWN0aW9uLnN0eWxlLTMgLmFib3V0LWNvbnRlbnQgLmFiLXRpdGxlID4gc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICMwMGZmOTk7IH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VirsSpreedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-virs-spreed',
          templateUrl: './virs-spreed.component.html',
          styleUrls: ['./virs-spreed.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\route\Angular2\New folder\testcrona\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map