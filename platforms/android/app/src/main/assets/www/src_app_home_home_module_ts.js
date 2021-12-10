(self["webpackChunklet_exam_reviewer"] = self["webpackChunklet_exam_reviewer"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playerFactory": () => (/* binding */ playerFactory),
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-lottie */ 534);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lottie-web */ 3052);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ 2003);









function playerFactory() {
    return (lottie_web__WEBPACK_IMPORTED_MODULE_2___default());
}
let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            ngx_lottie__WEBPACK_IMPORTED_MODULE_1__.LottieModule.forRoot({ player: playerFactory }),
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_3__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ 1628);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 8259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);







let HomePage = class HomePage {
    constructor(router, storage) {
        this.router = router;
        this.storage = storage;
        this.init();
    }
    init() {
        if (localStorage.getItem("ionicAuthenticationData") === null) {
            this.router.navigate(['authentication']);
        }
        else {
            var ddata = JSON.parse(localStorage.getItem('ionicAuthenticationDataUserId'));
            var stat = ddata.LoginStatus;
            if (stat == 1) {
                this.router.navigate(['authentication']);
            }
        }
        this.initLocalStorage();
    }
    takeExam() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
            title: 'Choose Exam Coverage Level',
            showDenyButton: true,
            confirmButtonText: 'Elementary Level',
            denyButtonText: `Secondary Level`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                this.checkExamId();
                this.saveExamLevel("Elementary");
                this.router.navigate(['general-education']);
            }
            else if (result.isDenied) {
                this.checkExamId();
                this.saveExamLevel("Secondary");
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                    title: 'Submit your Github username',
                    input: 'select',
                    inputOptions: {
                        'English': 'English',
                        'Filipino': 'Filipino',
                        'Mathematics': 'Mathematics',
                        'Mapeh': 'Mapeh',
                        'Values_Education': 'Values_Education',
                        'Tecnology_and_LIvelihood_Education': 'Tecnology_and_LIvelihood_Education',
                        'Social_Science': 'Social_Science',
                        'Physical_Science': 'Physical_Science',
                        'Biological_Science': 'Biological_Science',
                        'Agriculture_and_Fishery_Art': 'Agriculture_and_Fishery_Art'
                    },
                    confirmButtonText: 'Go',
                    showLoaderOnConfirm: true,
                }).then((result) => {
                    if (localStorage.getItem("ionicAOS") === null) {
                        let data = { AOS: result.value };
                        localStorage.setItem('ionicAOS', JSON.stringify(data));
                    }
                    else {
                        var olddata = JSON.parse(localStorage.getItem('ionicAOS'));
                        olddata.AOS = result.value;
                        localStorage.setItem('ionicAOS', JSON.stringify(olddata));
                    }
                });
            }
        });
    }
    checkExamId() {
        if (localStorage.getItem("ionicExamId") === null) {
            let data = { ExamId: 0 };
            localStorage.setItem('ionicExamId', JSON.stringify(data));
        }
        else {
            var olddata = JSON.parse(localStorage.getItem('ionicExamId'));
            olddata.ExamId = olddata.ExamId + 1;
            localStorage.setItem('ionicExamId', JSON.stringify(olddata));
        }
    }
    initLocalStorage() {
        if (localStorage.getItem("ionicExamLevelData") === null) {
            let data = { ExamLevel: "level", Status: false };
            localStorage.setItem('ionicExamLevelData', JSON.stringify(data));
        }
        this.checkExamId();
    }
    saveExamLevel(level) {
        if (localStorage.getItem("ionicExamLevelData") === null) {
            let data = { ExamLevel: level, Status: true };
            localStorage.setItem('ionicExamLevelData', JSON.stringify(data));
        }
        else {
            // alert(localStorage.getItem('ionicExamLevelData').length);
            if (localStorage.getItem('ionicExamLevelData').length == 2) {
                var olddata = JSON.parse(localStorage.getItem('ionicExamLevelData'));
                olddata.push({ ExamLevel: level, Status: true });
                localStorage.setItem('ionicExamLevelData', JSON.stringify(olddata));
            }
            else {
                var olddata = JSON.parse(localStorage.getItem('ionicExamLevelData'));
                olddata.ExamLevel = level;
                olddata.Status = true;
                localStorage.setItem('ionicExamLevelData', JSON.stringify(olddata));
            }
        }
        this.router.navigate(['general-education']);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Storage }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".gelogo {\n  text-align: center;\n}\n\n#hovthisGE {\n  height: 25%;\n}\n\n#hovthisGE #hovthisGE:hover {\n  border: 5px solid red;\n}\n\n#pos {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: white;\n}\n\n.bgbut {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  width: 45px;\n  height: 40px;\n  background-color: #53b2ff;\n  border-radius: 60%;\n}\n\n.toolbars {\n  height: 12%;\n  --background: rgb(216, 135, 135);\n}\n\n.title {\n  font-weight: bold;\n  font-size: 25px;\n  color: white;\n  text-align: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\n.prclogo {\n  text-align: center;\n}\n\n.letDescription {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  font-size: 1.3em;\n  text-align: center;\n  color: black;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\n.descr {\n  --background: #e0f1e7;\n}\n\n.pageContent {\n  --background: rgb(234, 218, 208);\n}\n\n.slides {\n  margin-top: 1%;\n  background: #e0f1e7;\n  padding: 1px 10px 20px 10px;\n  border-radius: 28px 28px 28px 28px;\n}\n\n.slides .tobetaken {\n  margin-top: 12%;\n  text-align: center;\n}\n\n.topbtn {\n  color: white;\n}\n\n.examContent {\n  margin-top: 5%;\n  height: 80%;\n  --background: #e0f1e7;\n}\n\n.takeExam {\n  text-align: center;\n}\n\n.takeExam ion-button {\n  width: 70%;\n  height: 70px;\n}\n\n.tobetakenper {\n  font-size: 1.1em;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7QUFFRjs7QUFBRTtFQUNFLHFCQUFBO0FBRUo7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUFBO0VBQ0UsV0FBQTtFQUNBLGdDQUFBO0FBR0Y7O0FBREE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzSEFBQTtBQUlGOztBQUZBO0VBQ0Usa0JBQUE7QUFLRjs7QUFIQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNIQUFBO0FBTUY7O0FBSkE7RUFDRSxxQkFBQTtBQU9GOztBQUxBO0VBQ0UsZ0NBQUE7QUFRRjs7QUFOQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7QUFTRjs7QUFQRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQVNKOztBQUxBO0VBQ0UsWUFBQTtBQVFGOztBQU5BO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQVNGOztBQVBBO0VBQ0Usa0JBQUE7QUFVRjs7QUFSRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBVUo7O0FBUEE7RUFDRSxnQkFBQTtFQUFpQixzSEFBQTtBQVduQiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nZWxvZ297XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNob3Z0aGlzR0V7XG4gIGhlaWdodDogMjUlO1xuXG4gICNob3Z0aGlzR0U6aG92ZXJ7XG4gICAgYm9yZGVyOiA1cHggc29saWQgcmVkO1xuICB9XG5cbn1cbiNwb3N7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmJnYnV0e1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4MywgMTc4LCAyNTUpO1xuICBib3JkZXItcmFkaXVzOiA2MCU7XG59XG4udG9vbGJhcnN7XG4gIGhlaWdodDogMTIlO1xuICAtLWJhY2tncm91bmQ6IHJnYigyMTYsIDEzNSwgMTM1KTtcbn1cbi50aXRsZXtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuLnByY2xvZ297XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sZXREZXNjcmlwdGlvbntcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG4uZGVzY3J7XG4gIC0tYmFja2dyb3VuZCA6ICNlMGYxZTc7XG59XG4ucGFnZUNvbnRlbnR7XG4gIC0tYmFja2dyb3VuZDogcmdiKDIzNCwgMjE4LCAyMDgpO1xufVxuLnNsaWRlcyB7XG4gIG1hcmdpbi10b3A6IDElO1xuICBiYWNrZ3JvdW5kOiAjZTBmMWU3O1xuICBwYWRkaW5nOiAxcHggMTBweCAyMHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI4cHggMjhweCAyOHB4IDI4cHg7XG5cbiAgLnRvYmV0YWtlbntcbiAgICBtYXJnaW4tdG9wOiAxMiU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbn1cbi50b3BidG57XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5leGFtQ29udGVudHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGhlaWdodDogODAlO1xuICAtLWJhY2tncm91bmQ6ICNlMGYxZTc7XG59XG4udGFrZUV4YW17XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBpb24tYnV0dG9ue1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICB9XG59XG4udG9iZXRha2VucGVye1xuICBmb250LXNpemU6IDEuMWVtO2ZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59Il19 */");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar class=\"toolbars\">\n  <ion-buttons slot=\"start\">\n    <ion-menu-button class=\"topbtn\" menu=\"letexam-menu\" autoHide=\"false\"></ion-menu-button>\n  </ion-buttons>\n  <h4 class=\"title\">Licensure Examination <br> for Teachers</h4>\n</ion-toolbar>\n\n<ion-content class=\"pageContent ion-padding\">\n  <div class=\"slides ion-margin-bottom\">  \n  <ion-card class=\"examContent\">\n    <ion-card-header class=\"prclogo\">\n      <img src=\"assets/icon/prclogo.png\">\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item class=\"descr\">\n        <p class=\"letDescription\">\n          Licensure Examination for Teachers (LET) is a test of the overall knowledge and proficiency of prospective teachers to provide a reliable structure, which the practice of prospective teachers can be measured and proven, and it gives access to continuing growth and development.\n        </p>\n      </ion-item>\n      <br>\n      <ion-item class=\"descr\">\n        <ion-text>\n          <h4 class=\"tobetaken\">LET EXAM Part to be Taken</h4>\n          <ion-item class=\"descr\"><h4>General Education</h4></ion-item>\n          <ion-item class=\"descr\"><h4>Professional Education</h4></ion-item>\n          <ion-item class=\"descr\"><h4>Area Of Specialization</h4></ion-item>\n        </ion-text>\n      </ion-item>\n      <br>\n      <ion-item class=\"descr\">\n        <p class=\"tobetakenper\">\n        Generally, exam for elementary level covers topics from General Education (GenEd) 40% and Professional Education (ProfEd) 60%, while in secondary level, GenEd 20%, ProfEd 40% and area of specialization 40%.\n       </p>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n    \n    <!-- <ion-card class=\"examContent\" id=\"hovthisGE\" class=\"ge\" (click)=\"goGEED()\">\n      <ion-card-header>\n        <ion-item><h4>General Education</h4></ion-item>\n        <ion-item><h4>Professional Education</h4></ion-item>\n        <ion-item><h4>Area Of Specialization</h4></ion-item>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <p class=\"tobetakenper\">\n          Generally, exam for elementary level covers topics from General Education (GenEd) 40% and Professional Education (ProfEd) 60%, while in secondary level, GenEd 20%, ProfEd 40% and area of specialization 40%.\n         </p>\n        </ion-item>\n      </ion-card-content>\n    </ion-card> -->\n    <!-- <ion-card class=\"examContent\" id=\"hovthisGE\" class=\"pe\" (click)=\"goPEED()\">\n      <ion-card-header>\n        <h4>Professional Education</h4>\n      </ion-card-header>\n      <ion-card-content>\n        <h4>Professional Education</h4>\n      </ion-card-content>\n    </ion-card>\n    <ion-card class=\"examContent\" id=\"hovthisGE\" class=\"aos\" (click)=\"goAOS()\">\n      <ion-card-header>\n        <h4>Area Of Specialization</h4>\n      </ion-card-header>\n      <ion-card-content>\n        <h4>Area Of Specialization</h4>\n      </ion-card-content>\n    </ion-card> -->\n    <div class=\"takeExam\">\n      <ion-button (click)=\"takeExam()\">\n        Take Exam\n      </ion-button>\n    </div>\n    </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map