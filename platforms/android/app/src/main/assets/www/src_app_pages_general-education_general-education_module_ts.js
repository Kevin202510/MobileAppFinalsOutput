(self["webpackChunkLET_Exam_Reviewer"] = self["webpackChunkLET_Exam_Reviewer"] || []).push([["src_app_pages_general-education_general-education_module_ts"],{

/***/ 8146:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/general-education/general-education-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralEducationPageRoutingModule": () => (/* binding */ GeneralEducationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _general_education_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general-education.page */ 1328);




const routes = [
    {
        path: '',
        component: _general_education_page__WEBPACK_IMPORTED_MODULE_0__.GeneralEducationPage
    }
];
let GeneralEducationPageRoutingModule = class GeneralEducationPageRoutingModule {
};
GeneralEducationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GeneralEducationPageRoutingModule);



/***/ }),

/***/ 5293:
/*!*********************************************************************!*\
  !*** ./src/app/pages/general-education/general-education.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playerFactory": () => (/* binding */ playerFactory),
/* harmony export */   "GeneralEducationPageModule": () => (/* binding */ GeneralEducationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-lottie */ 534);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lottie-web */ 3052);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _general_education_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general-education-routing.module */ 8146);
/* harmony import */ var _general_education_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general-education.page */ 1328);









function playerFactory() {
    return (lottie_web__WEBPACK_IMPORTED_MODULE_1___default());
}
let GeneralEducationPageModule = class GeneralEducationPageModule {
};
GeneralEducationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            ngx_lottie__WEBPACK_IMPORTED_MODULE_0__.LottieModule.forRoot({ player: playerFactory }),
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _general_education_routing_module__WEBPACK_IMPORTED_MODULE_2__.GeneralEducationPageRoutingModule
        ],
        declarations: [_general_education_page__WEBPACK_IMPORTED_MODULE_3__.GeneralEducationPage]
    })
], GeneralEducationPageModule);



/***/ }),

/***/ 1328:
/*!*******************************************************************!*\
  !*** ./src/app/pages/general-education/general-education.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralEducationPage": () => (/* binding */ GeneralEducationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_general_education_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./general-education.page.html */ 3836);
/* harmony import */ var _general_education_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general-education.page.scss */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 5160);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);







let GeneralEducationPage = class GeneralEducationPage {
    constructor(router, datePipe) {
        this.router = router;
        this.datePipe = datePipe;
        this.quizzes = [];
        this.datas = [];
        this.myDate = new Date();
        this.answerSelected = false;
        this.correctAnswers = 0;
        this.incorrectAnswers = 0;
        this.prevAnswered = [];
        this.result = false;
        this.resultStatus = 'Show Result';
        this.selectedSegment = "Exam";
        this.options = {
            path: 'assets/welldone.json'
        };
        this.datenow = this.datePipe.transform(this.myDate, 'MMM-dd-yyyy');
    }
    ngOnInit() {
        fetch('./assets/GeneralEducationJsonData/QuestionAndAnswerLetExamReviewer.json').then(res => res.json())
            .then(content => {
            this.quizzes = content.GeneralEducationQuestionAndAnswer;
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
        if (localStorage.getItem("ionicGeneralEducationData") === null) {
            localStorage.setItem('ionicGeneralEducationData', '[]');
        }
        var olddata = JSON.parse(localStorage.getItem('ionicGeneralEducationData'));
        olddata.push({ Score: this.correctAnswers, DateTaken: this.datenow });
        localStorage.setItem('ionicGeneralEducationData', JSON.stringify(olddata));
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
        this.resultStatus = 'Show Result';
        this.prevAnswered = [];
        this.prevAnswered.push(this.getRandom());
        this.correctAnswers = 0;
        this.incorrectAnswers = 0;
    }
    segmentChanged(event) {
        this.selectedSegment = event.target.value;
        if (event.target.value == 'History') {
            console.log(this.datas = JSON.parse(localStorage.getItem('ionicGeneralEducationData')));
        }
    }
};
GeneralEducationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe }
];
GeneralEducationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-general-education',
        template: _raw_loader_general_education_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('answer', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('void => *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({ opacity: 0, transform: 'translateY(-3rem)' }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)(300)])
            ])
        ],
        styles: [_general_education_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GeneralEducationPage);



/***/ }),

/***/ 1817:
/*!*********************************************************************!*\
  !*** ./src/app/pages/general-education/general-education.page.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLWVkdWNhdGlvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 3836:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/general-education/general-education.page.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n      <h4>Licensure Examination for Teachers</h4>\n    <ion-buttons slot=\"start\"><ion-menu-button menu=\"letexam-menu\"></ion-menu-button></ion-buttons>\n    <!-- <img slot=\"end\" style=\"margin-right: 20px; border-radius: 13px;\" src=\"assets/icon/profile1.png\" width=\"50\"> -->\n    <ion-segment (ionChange)=\"segmentChanged($event)\">\n      <ion-segment-button value=\"Exam\">\n        <ion-label>Exam</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"History\">\n        <ion-label>History</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-segment (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"Exam\">\n      <ion-label>Exam</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"History\">\n      <ion-label>History</ion-label>\n    </ion-segment-button>\n  </ion-segment> -->\n  <ion-card *ngIf=\"prevAnswered.length < 51 && selectedSegment == 'Exam'\" class=\"answers\">\n    <ion-card-header>\n      <h4>{{ prevAnswered.length }} of {{ quizzes.length }}</h4>\n      <h4>{{ quizzes[currentQuiz]?.Questions }}</h4>\n    </ion-card-header>\n    <ion-card-content class=\"answers__list\" *ngFor=\"let quiz of quizzes[currentQuiz]?.MultipleChoice\">\n      <ion-radio-group (ionChange)=\"onAnswer(quiz.correct)\">\n      <ion-item>\n          <ion-label>{{ quiz.choices }}</ion-label>\n          <ion-radio value=\"{{ quiz.choices }}\" [disabled]=\"answerSelected\" ion slot=\"start\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-card-content>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button>Back</ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button>Next</ion-button>\n        </ion-col>\n      </ion-row>\n      </ion-grid>\n  </ion-card>\n  <ion-card *ngIf=\"prevAnswered.length >= 50 \">\n    <ion-card-header>\n        <h4 class=\"notedone\">Exam Was Done</h4>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-button (click)=\"showResult()\" *ngIf=\"resultStatus === 'Show Result'\">{{ resultStatus }}</ion-button>\n    <!-- <button class=\"btn btn--new\" (click)=\"playAgain()\" *ngIf=\"resultStatus !== 'Show Result'\">{{ resultStatus }}</button> -->\n    </ion-card-content>\n  </ion-card>   \n  <ion-card *ngIf=\"correctAnswers > 0 && resultStatus == 'Play Again!'\">\n    <ion-card-content>\n      <h2>You got {{correctAnswers}} over {{quizzes.length}}</h2>\n      <ng-lottie [options]='options'></ng-lottie>\n      <button class=\"btn btn--new\" (click)=\"playAgain()\" *ngIf=\"resultStatus !== 'Show Result'\">{{ resultStatus }}</button>\n    </ion-card-content>\n  </ion-card>\n  <ion-card *ngIf=\"selectedSegment=='History'\">\n    <h4>Score History</h4>\n    <ion-card-content *ngFor=\"let quiz of datas\">\n      <ion-item>\n        <ion-text>Score {{quiz.Score}} <br> Date Taken {{quiz.DateTaken}}</ion-text>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_general-education_general-education_module_ts.js.map