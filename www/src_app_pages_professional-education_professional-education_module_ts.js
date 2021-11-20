(self["webpackChunkLET_Exam_Reviewer"] = self["webpackChunkLET_Exam_Reviewer"] || []).push([["src_app_pages_professional-education_professional-education_module_ts"],{

/***/ 3082:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/professional-education/professional-education-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfessionalEducationPageRoutingModule": () => (/* binding */ ProfessionalEducationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _professional_education_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./professional-education.page */ 7930);




const routes = [
    {
        path: '',
        component: _professional_education_page__WEBPACK_IMPORTED_MODULE_0__.ProfessionalEducationPage
    }
];
let ProfessionalEducationPageRoutingModule = class ProfessionalEducationPageRoutingModule {
};
ProfessionalEducationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfessionalEducationPageRoutingModule);



/***/ }),

/***/ 7780:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/professional-education/professional-education.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playerFactory": () => (/* binding */ playerFactory),
/* harmony export */   "ProfessionalEducationPageModule": () => (/* binding */ ProfessionalEducationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-lottie */ 534);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lottie-web */ 3052);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _professional_education_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./professional-education-routing.module */ 3082);
/* harmony import */ var _professional_education_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./professional-education.page */ 7930);









function playerFactory() {
    return (lottie_web__WEBPACK_IMPORTED_MODULE_1___default());
}
let ProfessionalEducationPageModule = class ProfessionalEducationPageModule {
};
ProfessionalEducationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            ngx_lottie__WEBPACK_IMPORTED_MODULE_0__.LottieModule.forRoot({ player: playerFactory }),
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _professional_education_routing_module__WEBPACK_IMPORTED_MODULE_2__.ProfessionalEducationPageRoutingModule
        ],
        declarations: [_professional_education_page__WEBPACK_IMPORTED_MODULE_3__.ProfessionalEducationPage]
    })
], ProfessionalEducationPageModule);



/***/ }),

/***/ 7930:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/professional-education/professional-education.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfessionalEducationPage": () => (/* binding */ ProfessionalEducationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_professional_education_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./professional-education.page.html */ 2036);
/* harmony import */ var _professional_education_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./professional-education.page.scss */ 3092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 5160);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);







let ProfessionalEducationPage = class ProfessionalEducationPage {
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
            console.log(this.quizzes = content.ProfessionalEducation);
        });
        // this.quizzes = this.quizService.getQuizzes();
        this.currentQuiz = this.getRandom();
        this.prevAnswered.push(this.currentQuiz);
    }
    onAnswer(option) {
        this.answerSelected = true;
        setTimeout(() => {
            let newQuiz = this.getRandom();
            while (this.prevAnswered.includes(newQuiz) && this.prevAnswered.length < 15) {
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
        // if(localStorage.length==0){
        localStorage.setItem('ionicProfessionalEducationData', '[]');
        // }
        var olddata = JSON.parse(localStorage.getItem('ionicProfessionalEducationData'));
        olddata.push({ Score: this.correctAnswers, DateTaken: this.datenow });
        localStorage.setItem('ionicProfessionalEducationData', JSON.stringify(olddata));
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
    segmentChanged(event) {
        this.selectedSegment = event.target.value;
        if (event.target.value == 'History') {
            console.log(this.datas = JSON.parse(localStorage.getItem('ionicProfessionalEducationData')));
        }
    }
};
ProfessionalEducationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe }
];
ProfessionalEducationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-professional-education',
        template: _raw_loader_professional_education_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('answer', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('void => *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({ opacity: 0, transform: 'translateY(-3rem)' }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)(300)])
            ])
        ],
        styles: [_professional_education_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfessionalEducationPage);



/***/ }),

/***/ 3092:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/professional-education/professional-education.page.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9mZXNzaW9uYWwtZWR1Y2F0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 2036:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/professional-education/professional-education.page.html ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <center><h1>Professional Education</h1></center>\r\n    <ion-buttons slot=\"start\"><ion-menu-button menu=\"letexam-menu\"></ion-menu-button></ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-segment (ionChange)=\"segmentChanged($event)\">\r\n    <ion-segment-button value=\"Exam\">\r\n      <ion-label>Exam</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"History\">\r\n      <ion-label>History</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n  <ion-card *ngIf=\"prevAnswered.length < 51 && selectedSegment == 'Exam'\" class=\"answers\">\r\n    <ion-card-header>\r\n      <h4>{{ prevAnswered.length }} of {{ quizzes.length }}</h4>\r\n      <h4>{{ quizzes[currentQuiz]?.Questions }}</h4>\r\n    </ion-card-header>\r\n    <ion-card-content class=\"answers__list\" *ngFor=\"let quiz of quizzes[currentQuiz]?.MultipleChoice\">\r\n      <ion-radio-group (ionChange)=\"onAnswer(quiz.correct)\">\r\n      <ion-item>\r\n          <ion-label>{{ quiz.choices }}</ion-label>\r\n          <ion-radio value=\"{{ quiz.choices }}\" [disabled]=\"answerSelected\" ion slot=\"start\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card *ngIf=\"prevAnswered.length >50 \">\r\n    <ion-card-header>\r\n        <h4 class=\"notedone\">Exam Was Done</h4>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-button (click)=\"showResult()\" *ngIf=\"resultStatus === 'Show Result'\">{{ resultStatus }}</ion-button>\r\n    <!-- <button class=\"btn btn--new\" (click)=\"playAgain()\" *ngIf=\"resultStatus !== 'Show Result'\">{{ resultStatus }}</button> -->\r\n    </ion-card-content>\r\n  </ion-card>   \r\n  <ion-card *ngIf=\"correctAnswers > 0 && resultStatus == 'Play Again!'\">\r\n    <ion-card-content>\r\n      <h2>You got {{correctAnswers}} over {{quizzes.length}}</h2>\r\n      <ng-lottie [options]='options'></ng-lottie>\r\n      <button class=\"btn btn--new\" (click)=\"playAgain()\" *ngIf=\"resultStatus !== 'Show Result'\">Retake</button>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card *ngIf=\"selectedSegment=='History'\">\r\n    <h4>Score History</h4>\r\n    <ion-card-content *ngFor=\"let quiz of datas\">\r\n      <ion-item>\r\n        <ion-text>Score {{quiz.Score}} <br> Date Taken {{quiz.DateTaken}}</ion-text>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_professional-education_professional-education_module_ts.js.map