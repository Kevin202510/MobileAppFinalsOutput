(self["webpackChunklet_exam_reviewer"] = self["webpackChunklet_exam_reviewer"] || []).push([["src_app_pages_area-of-specialization_tle_tle_module_ts"],{

/***/ 2863:
/*!************************************************************************!*\
  !*** ./src/app/pages/area-of-specialization/tle/tle-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TLEPageRoutingModule": () => (/* binding */ TLEPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tle_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tle.page */ 1941);




const routes = [
    {
        path: '',
        component: _tle_page__WEBPACK_IMPORTED_MODULE_0__.TLEPage
    }
];
let TLEPageRoutingModule = class TLEPageRoutingModule {
};
TLEPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TLEPageRoutingModule);



/***/ }),

/***/ 6106:
/*!****************************************************************!*\
  !*** ./src/app/pages/area-of-specialization/tle/tle.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playerFactory": () => (/* binding */ playerFactory),
/* harmony export */   "TLEPageModule": () => (/* binding */ TLEPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-lottie */ 534);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lottie-web */ 3052);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tle_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tle-routing.module */ 2863);
/* harmony import */ var _tle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tle.page */ 1941);









function playerFactory() {
    return (lottie_web__WEBPACK_IMPORTED_MODULE_1___default());
}
let TLEPageModule = class TLEPageModule {
};
TLEPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            ngx_lottie__WEBPACK_IMPORTED_MODULE_0__.LottieModule.forRoot({ player: playerFactory }),
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _tle_routing_module__WEBPACK_IMPORTED_MODULE_2__.TLEPageRoutingModule
        ],
        declarations: [_tle_page__WEBPACK_IMPORTED_MODULE_3__.TLEPage]
    })
], TLEPageModule);



/***/ }),

/***/ 1941:
/*!**************************************************************!*\
  !*** ./src/app/pages/area-of-specialization/tle/tle.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TLEPage": () => (/* binding */ TLEPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tle_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tle.page.html */ 8544);
/* harmony import */ var _tle_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tle.page.scss */ 6692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 5160);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);







let TLEPage = class TLEPage {
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
        this.resultStatus = false;
        this.selectedSegment = "Exam";
        this.status = false;
        this.stat = false;
        this.options = {
            path: 'assets/welldone.json'
        };
        this.olddata = JSON.parse(localStorage.getItem('ionicExamLevelData'));
        this.datenow = this.datePipe.transform(this.myDate, 'MMM-dd-yyyy');
    }
    ngOnInit() {
        fetch('./assets/GeneralEducationJsonData/QuestionAndAnswerLetExamReviewer.json').then(res => res.json())
            .then(content => {
            this.quizzes = content.AreaOfSpecialization[0].Tecnology_and_LIvelihood_Education;
        });
        // this.quizzes = this.quizService.getQuizzes();
        this.currentQuiz = this.getRandom();
        this.prevAnswered.push(this.currentQuiz);
        this.stat = this.olddata.Status;
    }
    getCorrectAns(ans) {
        this.answer = ans;
    }
    SubmitExam() {
        if (localStorage.getItem("ionicExamLevelData") != null) {
            if (this.olddata.Status) {
                this.saveScore();
                this.status = true;
                this.router.navigate(['final-score']);
            }
            else {
                this.diplayquestion = false;
                this.showResult();
            }
        }
    }
    saveScore() {
        if (localStorage.getItem("ionicExamData") === null) {
            localStorage.setItem('ionicExamData', '[]');
        }
        var olddata = JSON.parse(localStorage.getItem('ionicExamData'));
        var olddatas = JSON.parse(localStorage.getItem('ionicExamId'));
        olddata.push({ PartName: "Tecnology_and_LIvelihood_Education", Score: this.correctAnswers, ExamId: olddatas.ExamId, DateTaken: this.datenow });
        localStorage.setItem('ionicExamData', JSON.stringify(olddata));
    }
    getBackHome() {
        this.olddata.Status = false;
        localStorage.setItem('ionicExamLevelData', JSON.stringify(this.olddata));
    }
    retakeExam() {
        this.olddata.Status = true;
        localStorage.setItem('ionicExamLevelData', JSON.stringify(this.olddata));
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
        this.resultStatus = true;
    }
    playAgain() {
        this.resultStatus = false;
        this.prevAnswered = [];
        this.prevAnswered.push(this.getRandom());
        this.correctAnswers = 0;
        this.incorrectAnswers = 0;
        this.diplayquestion = true;
    }
};
TLEPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe }
];
TLEPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tle',
        template: _raw_loader_tle_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('answer', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('void => *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({ opacity: 0, transform: 'translateY(-3rem)' }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)(300)])
            ])
        ],
        styles: [_tle_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TLEPage);



/***/ }),

/***/ 6692:
/*!****************************************************************!*\
  !*** ./src/app/pages/area-of-specialization/tle/tle.page.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#pos {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: white;\n}\n\n.headtit {\n  text-align: center;\n}\n\n.bgbut {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  width: 45px;\n  height: 40px;\n  background-color: #53b2ff;\n  border-radius: 60%;\n}\n\n#headCol {\n  --background: linear-gradient(to right, rgb(11, 158, 216), rgb(4, 89, 247));\n  height: 120%;\n}\n\n.title {\n  font-weight: bold;\n  font-size: 25px;\n  color: #f8f7f7;\n  text-align: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\n.pageTitle {\n  text-align: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  color: #020202;\n  font-size: 1.5em;\n}\n\n.examContent {\n  margin-top: 5%;\n  height: 80%;\n  --background: #e0f1e7;\n}\n\n.questionAndAns {\n  height: 90%;\n}\n\n.examNum {\n  text-align: center;\n}\n\n.nextBtn {\n  text-align: center;\n  margin-bottom: 15px;\n}\n\n.nextBtn ion-button {\n  height: 40px;\n  width: 80px;\n}\n\n.pageContent {\n  --background: rgb(234, 218, 208);\n}\n\n.slides {\n  margin-top: 2%;\n  background: #e0f1e7;\n  padding: 1px 10px 20px 10px;\n  border-radius: 28px 28px 28px 28px;\n}\n\n.toolbars {\n  height: 12%;\n  --background:rgb(216, 135, 135);\n}\n\n.return {\n  font-size: 30px;\n  margin-left: 15px;\n}\n\n.topbtn {\n  font-size: 30px;\n  margin-left: 15px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFEQTtFQUNFLDJFQUFBO0VBQ0EsWUFBQTtBQUlGOztBQUZBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0hBQUE7QUFLRjs7QUFIQTtFQUNFLGtCQUFBO0VBQ0Esc0hBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFNRjs7QUFKQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFPRjs7QUFMQTtFQUNFLFdBQUE7QUFRRjs7QUFOQTtFQUNFLGtCQUFBO0FBU0Y7O0FBUEE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBVUY7O0FBVEU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQVdKOztBQVJBO0VBQ0UsZ0NBQUE7QUFXRjs7QUFUQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7QUFZQTs7QUFUQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtBQVlBOztBQVZBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBYUY7O0FBVkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBYUYiLCJmaWxlIjoidGxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwb3N7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICByaWdodDogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmhlYWR0aXR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5iZ2J1dHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIHdpZHRoOiA0NXB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODMsIDE3OCwgMjU1KTtcclxuICBib3JkZXItcmFkaXVzOiA2MCU7XHJcbn1cclxuI2hlYWRDb2x7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigxMSwgMTU4LCAyMTYpLCByZ2IoNCwgODksIDI0NykpO1xyXG4gIGhlaWdodDogMTIwJTtcclxufVxyXG4udGl0bGV7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiByZ2IoMjQ4LCAyNDcsIDI0Nyk7O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5wYWdlVGl0bGV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHJnYigyLCAyLCAyKTtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcbi5leGFtQ29udGVudHtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBoZWlnaHQ6IDgwJTtcclxuICAtLWJhY2tncm91bmQ6ICNlMGYxZTc7XHJcbn1cclxuLnF1ZXN0aW9uQW5kQW5ze1xyXG4gIGhlaWdodDogOTAlO1xyXG59XHJcbi5leGFtTnVte1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubmV4dEJ0bntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBpb24tYnV0dG9ue1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgfVxyXG59XHJcbi5wYWdlQ29udGVudHtcclxuICAtLWJhY2tncm91bmQ6IHJnYigyMzQsIDIxOCwgMjA4KTtcclxufVxyXG4uc2xpZGVzIHtcclxubWFyZ2luLXRvcDogMiU7XHJcbmJhY2tncm91bmQ6ICNlMGYxZTc7XHJcbnBhZGRpbmc6IDFweCAxMHB4IDIwcHggMTBweDtcclxuYm9yZGVyLXJhZGl1czogMjhweCAyOHB4IDI4cHggMjhweDtcclxuLy8gaGVpZ2h0OiAyMCU7XHJcbn1cclxuLnRvb2xiYXJze1xyXG5oZWlnaHQ6IDEyJTtcclxuLS1iYWNrZ3JvdW5kOnJnYigyMTYsIDEzNSwgMTM1KTtcclxufVxyXG4ucmV0dXJue1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBcclxufVxyXG4udG9wYnRue1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */");

/***/ }),

/***/ 8544:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/area-of-specialization/tle/tle.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar class=\"toolbars\">\r\n  <ion-buttons *ngIf=\"stat\" slot=\"start\">\r\n    <ion-menu-button class=\"topbtn\" menu=\"letexam-menu\" autoHide=\"false\"></ion-menu-button>\r\n  </ion-buttons>\r\n  <ion-icon *ngIf=\"!stat\" class=\"return\" slot=\"start\" class=\"topbtn\"name=\"return-up-back\"  routerLink=\"/area-of-specialization\"></ion-icon>\r\n  <h4 class=\"title\">Licensure Examination <br> for Teachers</h4>\r\n</ion-toolbar>\r\n\r\n<ion-content class=\"pageContent ion-padding\">\r\n<div class=\"slides ion-margin-bottom\">  \r\n<h4 class=\"pageTitle\">Tecnology And LIvelihood Education</h4>\r\n<ion-card *ngIf=\"prevAnswered.length <= 51 && diplayquestion && selectedSegment == 'Exam'\" class=\"questionAndAns\">\r\n  <ion-card-header>\r\n    <div class=\"examNum\">\r\n      <h4>{{ prevAnswered.length }} of {{ quizzes.length }}</h4>\r\n    </div>\r\n    <h4>{{ quizzes[currentQuiz]?.Questions }}</h4>\r\n  </ion-card-header>\r\n  <ion-card-content class=\"answers__list\">\r\n    <ion-radio-group>\r\n      <ion-item *ngFor=\"let quiz of quizzes[currentQuiz]?.MultipleChoice\">\r\n          <ion-label text-wrap>{{ quiz.choices }}</ion-label>\r\n          <ion-radio value=\"{{ quiz.choices }}\" (click)=\"getCorrectAns(quiz.correct)\" slot=\"start\"></ion-radio>\r\n      </ion-item>\r\n      </ion-radio-group>\r\n  </ion-card-content>\r\n</ion-card>\r\n      <div  class=\"nextBtn\" *ngIf=\"prevAnswered.length >= 50 && diplayquestion\">\r\n        <ion-button (click)=\"SubmitExam()\">Submit</ion-button>\r\n      </div>\r\n      <div class=\"nextBtn\">\r\n        <ion-button *ngIf=\"prevAnswered.length < 50 && diplayquestion\" (click)=\"onAnswer(answer)\">Next</ion-button>\r\n      </div>\r\n  <ion-card *ngIf=\"correctAnswers >= 0 && resultStatus\">\r\n    <ion-card-content>\r\n      <h2>You got {{correctAnswers}} over {{quizzes.length}}</h2>\r\n      <ng-lottie [options]='options'></ng-lottie>\r\n      <ion-button class=\"btn btn--new\" (click)=\"playAgain()\" *ngIf=\"resultStatus && !status\">Retake</ion-button>\r\n      <ion-button class=\"btn btn--new\" (click)=\"retakeExam()\" href=\"general-education\" *ngIf=\"resultStatus && status\">Retake Exam</ion-button>\r\n      <ion-button href=\"home\" (click)=\"getBackHome()\" class=\"btn btn--new\" *ngIf=\"resultStatus && status\">No</ion-button>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_area-of-specialization_tle_tle_module_ts.js.map