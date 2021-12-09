(self["webpackChunkLET_Exam_Reviewer"] = self["webpackChunkLET_Exam_Reviewer"] || []).push([["src_app_home_home_module_ts"],{

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".gelogo {\n  text-align: center;\n}\n\n#hovthisGE {\n  height: 25%;\n}\n\n#hovthisGE #hovthisGE:hover {\n  border: 5px solid red;\n}\n\n#pos {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: white;\n}\n\n.bgbut {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  width: 45px;\n  height: 40px;\n  background-color: #53b2ff;\n  border-radius: 60%;\n}\n\n.toolbars {\n  height: 12%;\n  --background: rgb(109, 25, 25);\n}\n\n.title {\n  font-weight: bold;\n  font-size: 25px;\n  color: white;\n  text-align: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\n.letDescription {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  font-size: 1.3em;\n  text-align: center;\n  color: white;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\n.descr {\n  --background: #3772f1ba;\n}\n\n.pageContent {\n  --background: rgb(234, 218, 208);\n}\n\n.slides {\n  margin-top: 1%;\n  background: #e0f1e7;\n  padding: 1px 10px 20px 10px;\n  border-radius: 28px 28px 28px 28px;\n}\n\n.slides .tobetaken {\n  margin-top: 12%;\n  text-align: center;\n}\n\n.topbtn {\n  color: white;\n}\n\n.examContent {\n  margin-top: 5%;\n  height: 80%;\n  --background: #e0f1e7;\n}\n\n.takeExam {\n  text-align: center;\n}\n\n.takeExam ion-button {\n  width: 70%;\n  height: 70px;\n}\n\n.tobetakenper {\n  font-size: 1.1em;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7QUFFRjs7QUFBRTtFQUNFLHFCQUFBO0FBRUo7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUFBO0VBQ0UsV0FBQTtFQUNBLDhCQUFBO0FBR0Y7O0FBREE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzSEFBQTtBQUlGOztBQUZBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0hBQUE7QUFLRjs7QUFIQTtFQUNFLHVCQUFBO0FBTUY7O0FBSkE7RUFDRSxnQ0FBQTtBQU9GOztBQUxBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtBQVFGOztBQU5FO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBUUo7O0FBSkE7RUFDRSxZQUFBO0FBT0Y7O0FBTEE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBUUY7O0FBTkE7RUFDRSxrQkFBQTtBQVNGOztBQVBFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUFTSjs7QUFOQTtFQUNFLGdCQUFBO0VBQWlCLHNIQUFBO0FBVW5CIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdlbG9nb3tcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2hvdnRoaXNHRXtcbiAgaGVpZ2h0OiAyNSU7XG5cbiAgI2hvdnRoaXNHRTpob3ZlcntcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZWQ7XG4gIH1cblxufVxuI3Bvc3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uYmdidXR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICByaWdodDogMTVweDtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgzLCAxNzgsIDI1NSk7XG4gIGJvcmRlci1yYWRpdXM6IDYwJTtcbn1cbi50b29sYmFyc3tcbiAgaGVpZ2h0OiAxMiU7XG4gIC0tYmFja2dyb3VuZDogcmdiKDEwOSwgMjUsIDI1KTtcbn1cbi50aXRsZXtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuLmxldERlc2NyaXB0aW9ue1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDEuM2VtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cbi5kZXNjcntcbiAgLS1iYWNrZ3JvdW5kIDogIzM3NzJmMWJhO1xufVxuLnBhZ2VDb250ZW50e1xuICAtLWJhY2tncm91bmQ6IHJnYigyMzQsIDIxOCwgMjA4KTtcbn1cbi5zbGlkZXMge1xuICBtYXJnaW4tdG9wOiAxJTtcbiAgYmFja2dyb3VuZDogI2UwZjFlNztcbiAgcGFkZGluZzogMXB4IDEwcHggMjBweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAyOHB4IDI4cHggMjhweCAyOHB4O1xuXG4gIC50b2JldGFrZW57XG4gICAgbWFyZ2luLXRvcDogMTIlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG59XG4udG9wYnRue1xuICBjb2xvcjogd2hpdGU7XG59XG4uZXhhbUNvbnRlbnR7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBoZWlnaHQ6IDgwJTtcbiAgLS1iYWNrZ3JvdW5kOiAjZTBmMWU3O1xufVxuLnRha2VFeGFte1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgaW9uLWJ1dHRvbntcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogNzBweDtcbiAgfVxufVxuLnRvYmV0YWtlbnBlcntcbiAgZm9udC1zaXplOiAxLjFlbTtmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufSJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar class=\"toolbars\">\n  <ion-buttons slot=\"start\">\n    <ion-menu-button class=\"topbtn\" menu=\"letexam-menu\" autoHide=\"false\"></ion-menu-button>\n  </ion-buttons>\n  <ion-buttons slot=\"secondary\">\n    <ion-button>\n      <ion-icon class=\"topbtn\" slot=\"icon-only\" name=\"star\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n  <h4 class=\"title\">Licensure Examination <br> for Teachers</h4>\n</ion-toolbar>\n\n<ion-content class=\"pageContent ion-padding\">\n  <div class=\"slides ion-margin-bottom\">  \n  <ion-card class=\"examContent\">\n    <ion-card-content>\n      <ion-item class=\"descr\">\n        <p class=\"letDescription\">\n          Licensure Examination for Teachers (LET) is a test of the overall knowledge and proficiency of prospective teachers to provide a reliable structure, which the practice of prospective teachers can be measured and proven, and it gives access to continuing growth and development.\n        </p>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n    <h4 class=\"tobetaken\">LET EXAM Part to be Taken</h4>\n    <ion-card class=\"examContent\" id=\"hovthisGE\" class=\"ge\" (click)=\"goGEED()\">\n      <ion-card-header>\n        <ion-item><h4>General Education</h4></ion-item>\n        <ion-item><h4>Professional Education</h4></ion-item>\n        <ion-item><h4>Area Of Specialization</h4></ion-item>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <p class=\"tobetakenper\">\n          Generally, exam for elementary level covers topics from General Education (GenEd) 40% and Professional Education (ProfEd) 60%, while in secondary level, GenEd 20%, ProfEd 40% and area of specialization 40%.\n         </p>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n    <!-- <ion-card class=\"examContent\" id=\"hovthisGE\" class=\"pe\" (click)=\"goPEED()\">\n      <ion-card-header>\n        <h4>Professional Education</h4>\n      </ion-card-header>\n      <ion-card-content>\n        <h4>Professional Education</h4>\n      </ion-card-content>\n    </ion-card>\n    <ion-card class=\"examContent\" id=\"hovthisGE\" class=\"aos\" (click)=\"goAOS()\">\n      <ion-card-header>\n        <h4>Area Of Specialization</h4>\n      </ion-card-header>\n      <ion-card-content>\n        <h4>Area Of Specialization</h4>\n      </ion-card-content>\n    </ion-card> -->\n    <div class=\"takeExam\">\n      <ion-button (click)=\"takeExam()\">\n        Take Exam\n      </ion-button>\n    </div>\n    </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map