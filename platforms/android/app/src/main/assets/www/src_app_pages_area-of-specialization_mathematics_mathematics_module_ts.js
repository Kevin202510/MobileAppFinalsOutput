(self["webpackChunklet_exam_reviewer"] = self["webpackChunklet_exam_reviewer"] || []).push([["src_app_pages_area-of-specialization_mathematics_mathematics_module_ts"],{

/***/ 779:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/area-of-specialization/mathematics/mathematics-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MathematicsPageRoutingModule": () => (/* binding */ MathematicsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _mathematics_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mathematics.page */ 4572);




const routes = [
    {
        path: '',
        component: _mathematics_page__WEBPACK_IMPORTED_MODULE_0__.MathematicsPage
    }
];
let MathematicsPageRoutingModule = class MathematicsPageRoutingModule {
};
MathematicsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MathematicsPageRoutingModule);



/***/ }),

/***/ 6370:
/*!********************************************************************************!*\
  !*** ./src/app/pages/area-of-specialization/mathematics/mathematics.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playerFactory": () => (/* binding */ playerFactory),
/* harmony export */   "MathematicsPageModule": () => (/* binding */ MathematicsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-lottie */ 534);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lottie-web */ 3052);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mathematics_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mathematics-routing.module */ 779);
/* harmony import */ var _mathematics_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mathematics.page */ 4572);









function playerFactory() {
    return (lottie_web__WEBPACK_IMPORTED_MODULE_1___default());
}
let MathematicsPageModule = class MathematicsPageModule {
};
MathematicsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            ngx_lottie__WEBPACK_IMPORTED_MODULE_0__.LottieModule.forRoot({ player: playerFactory }),
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _mathematics_routing_module__WEBPACK_IMPORTED_MODULE_2__.MathematicsPageRoutingModule
        ],
        declarations: [_mathematics_page__WEBPACK_IMPORTED_MODULE_3__.MathematicsPage]
    })
], MathematicsPageModule);



/***/ }),

/***/ 4572:
/*!******************************************************************************!*\
  !*** ./src/app/pages/area-of-specialization/mathematics/mathematics.page.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MathematicsPage": () => (/* binding */ MathematicsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_mathematics_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./mathematics.page.html */ 4942);
/* harmony import */ var _mathematics_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mathematics.page.scss */ 6527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 5160);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);







let MathematicsPage = class MathematicsPage {
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
            this.quizzes = content.AreaOfSpecialization[0].Mathematics;
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
        olddata.push({ PartName: "Mathematics", Score: this.correctAnswers, ExamId: olddatas.ExamId, DateTaken: this.datenow });
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
MathematicsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe }
];
MathematicsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-mathematics',
        template: _raw_loader_mathematics_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('answer', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('void => *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({ opacity: 0, transform: 'translateY(-3rem)' }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)(300)])
            ])
        ],
        styles: [_mathematics_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MathematicsPage);



/***/ }),

/***/ 6527:
/*!********************************************************************************!*\
  !*** ./src/app/pages/area-of-specialization/mathematics/mathematics.page.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#pos {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: white;\n}\n\n.headtit {\n  text-align: center;\n}\n\n.bgbut {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  width: 45px;\n  height: 40px;\n  background-color: #53b2ff;\n  border-radius: 60%;\n}\n\n#headCol {\n  --background: linear-gradient(to right, rgb(11, 158, 216), rgb(4, 89, 247));\n  height: 120%;\n}\n\n.title {\n  font-weight: bold;\n  font-size: 25px;\n  color: #f8f7f7;\n  text-align: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\n.pageTitle {\n  text-align: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  color: #020202;\n  font-size: 1.5em;\n}\n\n.examContent {\n  margin-top: 5%;\n  height: 80%;\n  --background: #e0f1e7;\n}\n\n.questionAndAns {\n  height: 90%;\n}\n\n.examNum {\n  text-align: center;\n}\n\n.nextBtn {\n  text-align: center;\n  margin-bottom: 15px;\n}\n\n.nextBtn ion-button {\n  height: 40px;\n  width: 80px;\n}\n\n.pageContent {\n  --background: rgb(234, 218, 208);\n}\n\n.slides {\n  margin-top: 2%;\n  background: #e0f1e7;\n  padding: 1px 10px 20px 10px;\n  border-radius: 28px 28px 28px 28px;\n}\n\n.toolbars {\n  height: 12%;\n  --background:rgb(216, 135, 135);\n}\n\n.return {\n  font-size: 30px;\n  margin-left: 15px;\n}\n\n.topbtn {\n  font-size: 30px;\n  margin-left: 15px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGhlbWF0aWNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUdGOztBQURBO0VBQ0UsMkVBQUE7RUFDQSxZQUFBO0FBSUY7O0FBRkE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzSEFBQTtBQUtGOztBQUhBO0VBQ0Usa0JBQUE7RUFDQSxzSEFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQU1GOztBQUpBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQU9GOztBQUxBO0VBQ0UsV0FBQTtBQVFGOztBQU5BO0VBQ0Usa0JBQUE7QUFTRjs7QUFQQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFVRjs7QUFURTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBV0o7O0FBUkE7RUFDRSxnQ0FBQTtBQVdGOztBQVRBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtBQVlBOztBQVRBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0FBWUE7O0FBVkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFhRjs7QUFWQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFhRiIsImZpbGUiOiJtYXRoZW1hdGljcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcG9ze1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5oZWFkdGl0e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYmdidXR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTVweDtcclxuICByaWdodDogMTVweDtcclxuICB3aWR0aDogNDVweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgzLCAxNzgsIDI1NSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNjAlO1xyXG59XHJcbiNoZWFkQ29se1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMTEsIDE1OCwgMjE2KSwgcmdiKDQsIDg5LCAyNDcpKTtcclxuICBoZWlnaHQ6IDEyMCU7XHJcbn1cclxuLnRpdGxle1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjb2xvcjogcmdiKDI0OCwgMjQ3LCAyNDcpOztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG4ucGFnZVRpdGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiByZ2IoMiwgMiwgMik7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG4uZXhhbUNvbnRlbnR7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZTBmMWU3O1xyXG59XHJcbi5xdWVzdGlvbkFuZEFuc3tcclxuICBoZWlnaHQ6IDkwJTtcclxufVxyXG4uZXhhbU51bXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm5leHRCdG57XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgaW9uLWJ1dHRvbntcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gIH1cclxufVxyXG4ucGFnZUNvbnRlbnR7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjM0LCAyMTgsIDIwOCk7XHJcbn1cclxuLnNsaWRlcyB7XHJcbm1hcmdpbi10b3A6IDIlO1xyXG5iYWNrZ3JvdW5kOiAjZTBmMWU3O1xyXG5wYWRkaW5nOiAxcHggMTBweCAyMHB4IDEwcHg7XHJcbmJvcmRlci1yYWRpdXM6IDI4cHggMjhweCAyOHB4IDI4cHg7XHJcbi8vIGhlaWdodDogMjAlO1xyXG59XHJcbi50b29sYmFyc3tcclxuaGVpZ2h0OiAxMiU7XHJcbi0tYmFja2dyb3VuZDpyZ2IoMjE2LCAxMzUsIDEzNSk7XHJcbn1cclxuLnJldHVybntcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgXHJcbn1cclxuLnRvcGJ0bntcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59Il19 */");

/***/ }),

/***/ 4942:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/area-of-specialization/mathematics/mathematics.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar class=\"toolbars\">\r\n  <ion-buttons *ngIf=\"stat\" slot=\"start\">\r\n    <ion-menu-button class=\"topbtn\" menu=\"letexam-menu\" autoHide=\"false\"></ion-menu-button>\r\n  </ion-buttons>\r\n  <ion-icon *ngIf=\"!stat\" class=\"return\" slot=\"start\" class=\"topbtn\"name=\"return-up-back\"  routerLink=\"/area-of-specialization\"></ion-icon>\r\n  <h4 class=\"title\">Licensure Examination <br> for Teachers</h4>\r\n</ion-toolbar>\r\n\r\n<ion-content class=\"pageContent ion-padding\">\r\n<div class=\"slides ion-margin-bottom\">  \r\n<h4 class=\"pageTitle\">MATHEMATICS</h4>\r\n<ion-card *ngIf=\"prevAnswered.length <= 51 && diplayquestion && selectedSegment == 'Exam'\" class=\"questionAndAns\">\r\n  <ion-card-header>\r\n    <div class=\"examNum\">\r\n      <h4>{{ prevAnswered.length }} of {{ quizzes.length }}</h4>\r\n    </div>\r\n    <h4>{{ quizzes[currentQuiz]?.Questions }}</h4>\r\n  </ion-card-header>\r\n  <ion-card-content class=\"answers__list\">\r\n    <ion-radio-group>\r\n      <ion-item *ngFor=\"let quiz of quizzes[currentQuiz]?.MultipleChoice\">\r\n          <ion-label text-wrap>{{ quiz.choices }}</ion-label>\r\n          <ion-radio value=\"{{ quiz.choices }}\" (click)=\"getCorrectAns(quiz.correct)\" slot=\"start\"></ion-radio>\r\n      </ion-item>\r\n      </ion-radio-group>\r\n  </ion-card-content>\r\n</ion-card>\r\n    <div  class=\"nextBtn\" *ngIf=\"prevAnswered.length >= 50 && diplayquestion\">\r\n      <ion-button (click)=\"SubmitExam()\">Submit</ion-button>\r\n    </div>\r\n    <div class=\"nextBtn\">\r\n      <ion-button *ngIf=\"prevAnswered.length < 50 && diplayquestion\" (click)=\"onAnswer(answer)\">Next</ion-button>\r\n    </div>\r\n  <ion-card *ngIf=\"correctAnswers >= 0 && resultStatus\">\r\n    <ion-card-content>\r\n      <h2>You got {{correctAnswers}} over {{quizzes.length}}</h2>\r\n      <ng-lottie [options]='options'></ng-lottie>\r\n      <ion-button class=\"btn btn--new\" (click)=\"playAgain()\" *ngIf=\"resultStatus && !status\">Retake</ion-button>\r\n      <ion-button class=\"btn btn--new\" (click)=\"retakeExam()\" href=\"general-education\" *ngIf=\"resultStatus && status\">Retake Exam</ion-button>\r\n      <ion-button href=\"home\" (click)=\"getBackHome()\" class=\"btn btn--new\" *ngIf=\"resultStatus && status\">No</ion-button>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_area-of-specialization_mathematics_mathematics_module_ts.js.map