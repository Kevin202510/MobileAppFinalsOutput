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
        this.diplayquestion = true;
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
    getCorrectAns(ans) {
        this.answer = ans;
    }
    SubmitExam() {
        var olddata = JSON.parse(localStorage.getItem('ionicExamLevelData'));
        if (olddata.Status) {
            this.saveScore();
            this.router.navigate(['professional-education']);
        }
        else {
            this.diplayquestion = false;
            this.showResult();
        }
    }
    onAnswer(option) {
        // this.answerSelected = true;
        setTimeout(() => {
            console.log(this.prevAnswered);
            console.log("CA " + this.correctAnswers);
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
        var olddata = JSON.parse(localStorage.getItem('ionicExamLevelData'));
        if (olddata.Status) {
            this.saveScore();
        }
    }
    saveScore() {
        if (localStorage.getItem("ionicExamData") === null) {
            localStorage.setItem('ionicExamData', '[]');
        }
        var olddata = JSON.parse(localStorage.getItem('ionicExamData'));
        var olddatas = JSON.parse(localStorage.getItem('ionicExamId'));
        olddata.push({ PartName: "GenEd", Score: this.correctAnswers, ExamId: olddatas.ExamId, DateTaken: this.datenow });
        localStorage.setItem('ionicExamData', JSON.stringify(olddata));
    }
    retake() {
        this.resultStatus = 'Show Result';
        this.prevAnswered = [];
        this.prevAnswered.push(this.getRandom());
        this.correctAnswers = 0;
        this.incorrectAnswers = 0;
        this.diplayquestion = true;
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#pos {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: white;\n}\n\n.headtit {\n  text-align: center;\n}\n\n.bgbut {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  width: 45px;\n  height: 40px;\n  background-color: #53b2ff;\n  border-radius: 60%;\n}\n\n#headCol {\n  --background: linear-gradient(to right, rgb(11, 158, 216), rgb(4, 89, 247));\n  height: 120%;\n}\n\n.title {\n  font-weight: bold;\n  font-size: 25px;\n  color: black;\n  text-align: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\n.pageTitle {\n  text-align: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  color: #020202;\n  font-size: 1.5em;\n}\n\n.examContent {\n  margin-top: 5%;\n  height: 80%;\n  --background: #e0f1e7;\n}\n\n.questionAndAns {\n  height: 90%;\n}\n\n.examNum {\n  text-align: center;\n}\n\n.nextBtn {\n  text-align: center;\n  margin-bottom: 15px;\n}\n\n.nextBtn ion-button {\n  height: 40px;\n  width: 80px;\n}\n\n.pageContent {\n  --background: #0853faba;\n}\n\n.slides {\n  margin-top: 2%;\n  background: #e0f1e7;\n  padding: 1px 10px 20px 10px;\n  border-radius: 28px 28px 28px 28px;\n}\n\n.toolbars {\n  height: 12%;\n  --background: #ede900e0 ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYWwtZWR1Y2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0U7RUFDRSxrQkFBQTtBQUVKOztBQUFFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURFO0VBQ0UsMkVBQUE7RUFDQSxZQUFBO0FBSUo7O0FBRkU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzSEFBQTtBQUtKOztBQUhFO0VBQ0Usa0JBQUE7RUFDQSxzSEFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQU1KOztBQUpFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQU9KOztBQUxFO0VBQ0UsV0FBQTtBQVFKOztBQU5FO0VBQ0Usa0JBQUE7QUFTSjs7QUFQRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFVSjs7QUFUSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBV047O0FBUkU7RUFDRSx1QkFBQTtBQVdKOztBQVRBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtBQVlGOztBQVRBO0VBQ0UsV0FBQTtFQUNBLHdCQUFBO0FBWUYiLCJmaWxlIjoiZ2VuZXJhbC1lZHVjYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Bvc3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuaGVhZHRpdHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmJnYnV0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MywgMTc4LCAyNTUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNjAlO1xyXG4gIH1cclxuICAjaGVhZENvbHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMTEsIDE1OCwgMjE2KSwgcmdiKDQsIDg5LCAyNDcpKTtcclxuICAgIGhlaWdodDogMTIwJTtcclxuICB9XHJcbiAgLnRpdGxle1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApOztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC5wYWdlVGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHJnYigyLCAyLCAyKTtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgfVxyXG4gIC5leGFtQ29udGVudHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNlMGYxZTc7XHJcbiAgfVxyXG4gIC5xdWVzdGlvbkFuZEFuc3tcclxuICAgIGhlaWdodDogOTAlO1xyXG4gIH1cclxuICAuZXhhbU51bXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLm5leHRCdG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICB3aWR0aDogODBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnBhZ2VDb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDg1M2ZhYmE7XHJcbiAgfVxyXG4uc2xpZGVzIHtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxuICBiYWNrZ3JvdW5kOiAjZTBmMWU3O1xyXG4gIHBhZGRpbmc6IDFweCAxMHB4IDIwcHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAyOHB4IDI4cHggMjhweCAyOHB4O1xyXG4gIC8vIGhlaWdodDogMjAlO1xyXG59XHJcbi50b29sYmFyc3tcclxuICBoZWlnaHQ6IDEyJTtcclxuICAtLWJhY2tncm91bmQ6ICNlZGU5MDBlMFxyXG59Il19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (" <ion-toolbar class=\"toolbars\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"letexam-menu\" autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"secondary\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"star\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <h4 class=\"title\">Licensure Examination <br> for Teachers</h4>\n  </ion-toolbar>\n\n<ion-content class=\"pageContent ion-padding\">\n  <div class=\"slides ion-margin-bottom\">  \n  <h4 class=\"pageTitle\">GENERAL EDUCATION</h4>\n<ion-card class=\"examContent\">\n  <ion-card *ngIf=\"prevAnswered.length <= 51 && diplayquestion && selectedSegment == 'Exam'\" class=\"questionAndAns\">\n    <ion-card-header>\n      <div class=\"examNum\">\n        <h4>{{ prevAnswered.length }} of {{ quizzes.length }}</h4>\n      </div>\n      <h4>{{ quizzes[currentQuiz]?.Questions }}</h4>\n    </ion-card-header>\n    <ion-card-content class=\"answers__list\">\n      <ion-radio-group>\n      <ion-item *ngFor=\"let quiz of quizzes[currentQuiz]?.MultipleChoice\">\n          <ion-label>{{ quiz.choices }}</ion-label>\n          <ion-radio value=\"{{ quiz.choices }}\" (click)=\"getCorrectAns(quiz.correct)\" slot=\"start\"></ion-radio>\n      </ion-item>\n      </ion-radio-group>\n    </ion-card-content>\n  </ion-card>\n  <ion-grid *ngIf=\"prevAnswered.length < 51 && diplayquestion\" >\n    <ion-row>\n      <ion-col>\n        <ion-button (click)=\"ReviewExam()\">Review</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button (click)=\"SubmitExam()\">Submit</ion-button>\n      </ion-col>\n    </ion-row>\n    </ion-grid>\n    <div class=\"nextBtn\">\n      <ion-button *ngIf=\"prevAnswered.length <= 51 && diplayquestion\" (click)=\"onAnswer(answer)\">Next</ion-button>\n    </div>\n  </ion-card>\n  \n  <ion-card *ngIf=\"correctAnswers >= 0 && resultStatus == 'Play Again!'\">\n    <ion-card-content>\n      <h2>You got {{correctAnswers}} over {{quizzes.length}}</h2>\n      <ng-lottie [options]='options'></ng-lottie>\n      <button class=\"btn btn--new\" (click)=\"retake()\" *ngIf=\"resultStatus !== 'Show Result'\">Retake</button>\n    </ion-card-content>\n  </ion-card>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_general-education_general-education_module_ts.js.map