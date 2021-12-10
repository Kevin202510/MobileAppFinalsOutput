(self["webpackChunklet_exam_reviewer"] = self["webpackChunklet_exam_reviewer"] || []).push([["src_app_pages_Authentication_authentication_authentication_module_ts"],{

/***/ 9118:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/Authentication/authentication/authentication-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationPageRoutingModule": () => (/* binding */ AuthenticationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _authentication_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.page */ 3692);




const routes = [
    {
        path: '',
        component: _authentication_page__WEBPACK_IMPORTED_MODULE_0__.AuthenticationPage
    }
];
let AuthenticationPageRoutingModule = class AuthenticationPageRoutingModule {
};
AuthenticationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AuthenticationPageRoutingModule);



/***/ }),

/***/ 5211:
/*!******************************************************************************!*\
  !*** ./src/app/pages/Authentication/authentication/authentication.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationPageModule": () => (/* binding */ AuthenticationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication-routing.module */ 9118);
/* harmony import */ var _authentication_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.page */ 3692);







let AuthenticationPageModule = class AuthenticationPageModule {
};
AuthenticationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthenticationPageRoutingModule
        ],
        declarations: [_authentication_page__WEBPACK_IMPORTED_MODULE_1__.AuthenticationPage]
    })
], AuthenticationPageModule);



/***/ }),

/***/ 3692:
/*!****************************************************************************!*\
  !*** ./src/app/pages/Authentication/authentication/authentication.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationPage": () => (/* binding */ AuthenticationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_authentication_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./authentication.page.html */ 1900);
/* harmony import */ var _authentication_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.page.scss */ 3960);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 8259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);






let AuthenticationPage = class AuthenticationPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    validateForm() {
        if (this.username == null && this.password == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                position: 'center',
                icon: 'warning',
                title: 'All Fields Are Required',
                showConfirmButton: false,
                timer: 1500
            });
        }
        else {
            return true;
        }
    }
    Login() {
        if (this.validateForm()) {
            // if(localStorage.getItem("ionicAuthenticationData")===null){
            //   localStorage.setItem('ionicAuthenticationData','[]');
            //   var olddata = JSON.parse(localStorage.getItem('ionicAuthenticationData'));
            //   olddata.push({Username:this.username,Password:this.password});
            //   localStorage.setItem('ionicAuthenticationData',JSON.stringify(olddata));
            //   this.router.navigate(['home']);
            // }else{
            var authData = JSON.parse(localStorage.getItem('ionicAuthenticationData'));
            if (localStorage.getItem('ionicAuthenticationData') !== null) {
                // console.log(this.authData);
                for (let i = 0; i < authData.length; i++) {
                    if (authData[i]['Username'] == this.username && authData[i]['Password'] == this.password) {
                        if (localStorage.getItem("ionicAuthenticationDataUserId") === null) {
                            let data = { UserId: authData[i].UserId, LoginStatus: 0 };
                            localStorage.setItem('ionicAuthenticationDataUserId', JSON.stringify(data));
                        }
                        else {
                            var ddata = JSON.parse(localStorage.getItem('ionicAuthenticationDataUserId'));
                            ddata.UserId = authData[i].UserId;
                            ddata.LoginStatus = 0;
                            localStorage.setItem('ionicAuthenticationDataUserId', JSON.stringify(ddata));
                        }
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Login Sucessfully',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        location.href = "home";
                        // this.router.navigate(['home']);
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                            position: 'center',
                            icon: 'warning',
                            title: 'Login Failed',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                    // } 
                }
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    position: 'center',
                    icon: 'warning',
                    title: 'Login Failed',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }
};
AuthenticationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
AuthenticationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-authentication',
        template: _raw_loader_authentication_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_authentication_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AuthenticationPage);



/***/ }),

/***/ 3960:
/*!******************************************************************************!*\
  !*** ./src/app/pages/Authentication/authentication/authentication.page.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".icardhead {\n  text-align: center;\n  font-size: 30px;\n}\n\n.logbtn1 {\n  --border-radius: 100px;\n  margin-top: 15px;\n  width: 70%;\n}\n\n.logbtn {\n  --border-radius: 100px;\n  margin-top: 10px;\n  width: 70%;\n}\n\n.cent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.cent1 {\n  margin-top: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.logcard {\n  margin-top: 20%;\n  height: 80%;\n}\n\n.gradcap {\n  border-radius: 110px;\n  height: 150px;\n}\n\n.swal2-popup {\n  width: 20em !important;\n  max-width: 80% !important;\n}\n\n.pageContent {\n  --background: rgb(234, 218, 208);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhlbnRpY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFFSjs7QUFEQztFQUNHLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBSUo7O0FBRkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUtKOztBQUhBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTUo7O0FBSkE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQU9KOztBQUxBO0VBQ0ksb0JBQUE7RUFDQSxhQUFBO0FBUUo7O0FBTkE7RUFDSSxzQkFBQTtFQUNBLHlCQUFBO0FBU0o7O0FBUkM7RUFDRyxnQ0FBQTtBQVdKIiwiZmlsZSI6ImF1dGhlbnRpY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY2FyZGhlYWR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLmxvZ2J0bjF7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbn0ubG9nYnRue1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB3aWR0aDogNzAlO1xyXG59XHJcbi5jZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uY2VudDF7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5sb2djYXJke1xyXG4gICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbn1cclxuLmdyYWRjYXB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbn1cclxuLnN3YWwyLXBvcHVwe1xyXG4gICAgd2lkdGg6IDIwZW0gIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbn0ucGFnZUNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyMzQsIDIxOCwgMjA4KTtcclxufSJdfQ== */");

/***/ }),

/***/ 1900:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Authentication/authentication/authentication.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"pageContent\">\n    <ion-card class=\"logcard\">\n      <ion-card-header class=\"icardhead\">\n        <img class=\"gradcap\" src=\"assets/icon/gradcap.png\">\n        <h4>LET Exam Reviewer</h4>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\" required>Username</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"username\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\" required>Password</ion-label>\n          <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n        </ion-item>\n        <div class=\"cent\">\n          <ion-button class=\"logbtn1\" (click)=\"Login()\" expand=\"block\" >Login</ion-button>\n        </div>\n        <div class=\"cent1\">\n          <ion-button class=\"logbtn\" routerLink=\"/register\" expand=\"block\" >Register</ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_Authentication_authentication_authentication_module_ts.js.map