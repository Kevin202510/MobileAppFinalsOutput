(self["webpackChunkLET_Exam_Reviewer"] = self["webpackChunkLET_Exam_Reviewer"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



const routes = [
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_lottie-web_build_player_lottie_js-node_modules_ngx-lottie___ivy_ngcc___f-10f315"), __webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'general-education',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_lottie-web_build_player_lottie_js-node_modules_ngx-lottie___ivy_ngcc___f-10f315"), __webpack_require__.e("default-node_modules_angular_animations_fesm2020_animations_mjs"), __webpack_require__.e("src_app_pages_general-education_general-education_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/general-education/general-education.module */ 5293)).then(m => m.GeneralEducationPageModule)
    },
    {
        path: 'professional-education',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_lottie-web_build_player_lottie_js-node_modules_ngx-lottie___ivy_ngcc___f-10f315"), __webpack_require__.e("default-node_modules_angular_animations_fesm2020_animations_mjs"), __webpack_require__.e("src_app_pages_professional-education_professional-education_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/professional-education/professional-education.module */ 7780)).then(m => m.ProfessionalEducationPageModule)
    },
    {
        path: 'area-of-specialization',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_lottie-web_build_player_lottie_js-node_modules_ngx-lottie___ivy_ngcc___f-10f315"), __webpack_require__.e("default-node_modules_angular_animations_fesm2020_animations_mjs"), __webpack_require__.e("src_app_pages_area-of-specialization_area-of-specialization_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/area-of-specialization/area-of-specialization.module */ 2131)).then(m => m.AreaOfSpecializationPageModule)
    },
    {
        path: 'authentication',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("src_app_pages_Authentication_authentication_authentication_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Authentication/authentication/authentication.module */ 5211)).then(m => m.AuthenticationPageModule)
    },
    {
        path: 'register',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_Authentication_register_register_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Authentication/register/register.module */ 730)).then(m => m.RegisterPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage-angular */ 4925);








let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule.forRoot(), _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__.IonicStorageModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		6034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".sidebg {\n  --ion-background-color: #447fffba;\n}\n\n.menu-header-bg {\n  height: 180px;\n  width: 350px;\n  background-color: #0853faba;\n  transform: rotate(-15deg);\n  border-radius: 10px 10px 10px 50px;\n  margin-left: -18px;\n  margin-top: -50px;\n  margin-bottom: 60px;\n}\n\n.lab {\n  --color: white;\n  font-weight: bold;\n}\n\n.iconn {\n  color: white;\n}\n\n.lalag {\n  height: 80px;\n  --background: #447fffba;\n}\n\n.lalag:hover {\n  --background: #3474ff;\n}\n\n.listbg {\n  --background: #0853faba;\n}\n\n.header-content {\n  position: absolute;\n  top: 30px;\n  left: 15px;\n  display: flex;\n  align-items: center;\n}\n\n.header-content img {\n  width: 100px;\n  height: 90px;\n  border-radius: 50%;\n  margin-right: 10px;\n  border: 7px solid #5e7ccc;\n}\n\n.header-content .uname {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlDQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBR0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7QUFHSjs7QUFEQTtFQUNJLHFCQUFBO0FBSUo7O0FBRkE7RUFDSSx1QkFBQTtBQUtKOztBQUhBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQU1KOztBQUpJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFNUjs7QUFISTtFQUNJLGlCQUFBO0FBS1IiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViZ3tcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM0NDdmZmZiYTtcclxufVxyXG4ubWVudS1oZWFkZXItYmd7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4NTNmYWJhO1xyXG4gICAgLy8gYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoOTBkZWcgLCMwZmE1ZWIgMCUsIzA0NGY3MiAxMDAlKTtcclxuICAgIC8vIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCByZ2JhKDk4LDE0MCwyNTUsMC41KTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG59XHJcbi5sYWJ7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5pY29ubntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubGFsYWd7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM0NDdmZmZiYTtcclxufVxyXG4ubGFsYWc6aG92ZXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMzNDc0ZmY7XHJcbn1cclxuLmxpc3RiZ3tcclxuICAgIC0tYmFja2dyb3VuZDogIzA4NTNmYWJhO1xyXG59XHJcbi5oZWFkZXItY29udGVudHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzBweDtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGJvcmRlcjogN3B4IHNvbGlkICM1ZTdjY2M7XHJcbiAgICB9XHJcblxyXG4gICAgLnVuYW1le1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-menu class=\"sidebg ion-padding\" side=\"start\" menuId=\"letexam-menu\" contentId=\"mainmenu\">\n    <ion-content color=\"primary\">\n      <div class=\"menu-header-bg\"></div>\n      <div class=\"header-content\">\n        <img src=\"assets/logs/vin.jpg\">\n        <ion-label>\n          <h2 class=\"uname\">Kevin Felix Caluag</h2>\n        </ion-label>\n    </div>\n      <ion-list>\n        <ion-menu-toggle>\n          <ion-item class=\"lalag\" href=\"/home\">\n            <ion-icon class=\"iconn\" name=\"home\" slot=\"start\"></ion-icon>\n            <ion-label class=\"lab\">Home</ion-label>\n          </ion-item>\n        </ion-menu-toggle> \n        <ion-menu-toggle>\n          <ion-item class=\"lalag\" routerLink=\"/general-education\">\n            <ion-icon class=\"iconn\" name=\"bookmarks\" slot=\"start\"></ion-icon>\n            <ion-label class=\"lab\">General Education</ion-label>\n          </ion-item>\n        </ion-menu-toggle> \n        <ion-menu-toggle>\n          <ion-item class=\"lalag\" routerLink=\"/professional-education\">\n            <ion-icon class=\"iconn\" name=\"bookmarks\" slot=\"start\"></ion-icon>\n            <ion-label class=\"lab\">Professional Education</ion-label>\n          </ion-item>\n        </ion-menu-toggle> \n        <ion-menu-toggle>\n          <ion-item class=\"lalag\" routerLink=\"/area-of-specialization\">\n            <ion-icon class=\"iconn\" name=\"bookmarks\" slot=\"start\"></ion-icon>\n            <ion-label class=\"lab\">Majorship</ion-label>\n          </ion-item>\n        </ion-menu-toggle> \n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"mainmenu\"></ion-router-outlet>\n</ion-app>\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map