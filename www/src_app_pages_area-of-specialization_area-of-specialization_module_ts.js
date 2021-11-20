(self["webpackChunkLET_Exam_Reviewer"] = self["webpackChunkLET_Exam_Reviewer"] || []).push([["src_app_pages_area-of-specialization_area-of-specialization_module_ts"],{

/***/ 3477:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/area-of-specialization/area-of-specialization-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreaOfSpecializationPageRoutingModule": () => (/* binding */ AreaOfSpecializationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _area_of_specialization_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area-of-specialization.page */ 4255);




const routes = [
    {
        path: '',
        component: _area_of_specialization_page__WEBPACK_IMPORTED_MODULE_0__.AreaOfSpecializationPage
    }
];
let AreaOfSpecializationPageRoutingModule = class AreaOfSpecializationPageRoutingModule {
};
AreaOfSpecializationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AreaOfSpecializationPageRoutingModule);



/***/ }),

/***/ 2131:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/area-of-specialization/area-of-specialization.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playerFactory": () => (/* binding */ playerFactory),
/* harmony export */   "AreaOfSpecializationPageModule": () => (/* binding */ AreaOfSpecializationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _area_of_specialization_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area-of-specialization-routing.module */ 3477);
/* harmony import */ var _area_of_specialization_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area-of-specialization.page */ 4255);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-lottie */ 534);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lottie-web */ 3052);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_3__);









function playerFactory() {
    return (lottie_web__WEBPACK_IMPORTED_MODULE_3___default());
}
let AreaOfSpecializationPageModule = class AreaOfSpecializationPageModule {
};
AreaOfSpecializationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            ngx_lottie__WEBPACK_IMPORTED_MODULE_2__.LottieModule.forRoot({ player: playerFactory }),
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _area_of_specialization_routing_module__WEBPACK_IMPORTED_MODULE_0__.AreaOfSpecializationPageRoutingModule
        ],
        declarations: [_area_of_specialization_page__WEBPACK_IMPORTED_MODULE_1__.AreaOfSpecializationPage]
    })
], AreaOfSpecializationPageModule);



/***/ }),

/***/ 4255:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/area-of-specialization/area-of-specialization.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreaOfSpecializationPage": () => (/* binding */ AreaOfSpecializationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_area_of_specialization_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./area-of-specialization.page.html */ 9522);
/* harmony import */ var _area_of_specialization_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area-of-specialization.page.scss */ 6545);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 5160);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);






let AreaOfSpecializationPage = class AreaOfSpecializationPage {
    constructor(router) {
        this.router = router;
        this.quizzes = [];
        this.answerSelected = false;
        this.correctAnswers = 0;
        this.incorrectAnswers = 0;
        this.prevAnswered = [];
        this.result = false;
        this.resultStatus = 'Show Result';
        this.options = {
            path: 'assets/welldone.json'
        };
    }
    ngOnInit() {
        fetch('./assets/GeneralEducationJsonData/QuestionAndAnswerLetExamReviewer.json').then(res => res.json())
            .then(content => {
            this.quizzes = content.AreaOfSpecialization[0].English;
        });
        // this.quizzes = this.quizService.getQuizzes();
        this.currentQuiz = this.getRandom();
        this.prevAnswered.push(this.currentQuiz);
    }
    onAnswer(option) {
        this.answerSelected = true;
        setTimeout(() => {
            let newQuiz = this.getRandom();
            while (this.prevAnswered.includes(newQuiz) && this.prevAnswered.length < 50) {
                newQuiz = this.getRandom();
            }
            this.currentQuiz = newQuiz;
            this.prevAnswered.push(this.currentQuiz);
            this.answerSelected = false;
        }, 300);
        if (option) {
            this.correctAnswers++;
        }
        else {
            this.incorrectAnswers++;
        }
    }
    getRandom() {
        return Math.floor(Math.random() * this.quizzes.length);
    }
    showResult() {
        this.result = true;
        this.resultStatus = 'Play Again!';
        // Swal.fire({
        //   title: this.correctAnswers + " out of " + this.quizzes.length,
        //   showDenyButton: true,
        //   showCancelButton: true,
        //   confirmButtonText: 'Retake',
        //   denyButtonText: `Cancel`,
        // }).then((results) => {
        //   if (results.isConfirmed) {
        //     this.resultStatus = "Show Result";
        //     this.playAgain();
        //   } else if (results.isDenied) {
        //     Swal.fire('nice', '', 'info')
        //     this.resultStatus = "Show Result";
        //     this.router.navigate(['']);
        //   }
        // }) 
    }
    playAgain() {
        this.prevAnswered = [];
        this.prevAnswered.push(this.getRandom());
        this.correctAnswers = 0;
        this.incorrectAnswers = 0;
    }
};
AreaOfSpecializationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
AreaOfSpecializationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-area-of-specialization',
        template: _raw_loader_area_of_specialization_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('answer', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('void => *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ opacity: 0, transform: 'translateY(-3rem)' }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)(300)])
            ])
        ],
        styles: [_area_of_specialization_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AreaOfSpecializationPage);



/***/ }),

/***/ 6545:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/area-of-specialization/area-of-specialization.page.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmVhLW9mLXNwZWNpYWxpemF0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 9522:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/area-of-specialization/area-of-specialization.page.html ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>AreaOfSpecialization</ion-title>\n    <ion-buttons slot=\"start\"><ion-menu-button menu=\"letexam-menu\"></ion-menu-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngIf=\"prevAnswered.length < 51\" class=\"answers\">\n    <ion-card-header>\n      <h4>{{ prevAnswered.length }} of {{ quizzes.length }}</h4>\n      <h4>{{ quizzes[currentQuiz]?.Questions }}</h4>\n    </ion-card-header>\n    <ion-card-content class=\"answers__list\" *ngFor=\"let quiz of quizzes[currentQuiz]?.MultipleChoice\">\n      <ion-radio-group (ionChange)=\"onAnswer(quiz.correct)\">\n      <ion-item>\n          <ion-label>{{ quiz.choices }}</ion-label>\n          <ion-radio value=\"{{ quiz.choices }}\" [disabled]=\"answerSelected\" ion slot=\"start\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-card-content>\n  </ion-card>\n  \n  <ion-card *ngIf=\"prevAnswered.length >= 50 \">\n    <ion-card-header>\n        <h4 class=\"notedone\">Exam Was Done</h4>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-button (click)=\"showResult()\" *ngIf=\"resultStatus === 'Show Result'\">{{ resultStatus }}</ion-button>\n    <!-- <button class=\"btn btn--new\" (click)=\"playAgain()\" *ngIf=\"resultStatus !== 'Show Result'\">{{ resultStatus }}</button> -->\n    </ion-card-content>\n  </ion-card>   \n  <ion-card *ngIf=\"correctAnswers > 0 && resultStatus == 'Play Again!'\">\n    <ion-card-content>\n      <h2>You got {{correctAnswers}} over {{quizzes.length}}</h2>\n      <ng-lottie [options]='options'></ng-lottie>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_area-of-specialization_area-of-specialization_module_ts.js.map