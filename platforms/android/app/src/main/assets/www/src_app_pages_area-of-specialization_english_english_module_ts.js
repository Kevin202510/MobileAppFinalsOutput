(self["webpackChunklet_exam_reviewer"] = self["webpackChunklet_exam_reviewer"] || []).push([["src_app_pages_area-of-specialization_english_english_module_ts"],{

/***/ 7291:
/*!********************************************************************************!*\
  !*** ./src/app/pages/area-of-specialization/english/english-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnglishPageRoutingModule": () => (/* binding */ EnglishPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _english_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./english.page */ 4625);




const routes = [
    {
        path: '',
        component: _english_page__WEBPACK_IMPORTED_MODULE_0__.EnglishPage
    }
];
let EnglishPageRoutingModule = class EnglishPageRoutingModule {
};
EnglishPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EnglishPageRoutingModule);



/***/ }),

/***/ 5343:
/*!************************************************************************!*\
  !*** ./src/app/pages/area-of-specialization/english/english.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playerFactory": () => (/* binding */ playerFactory),
/* harmony export */   "EnglishPageModule": () => (/* binding */ EnglishPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-lottie */ 534);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lottie-web */ 3052);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _english_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./english-routing.module */ 7291);
/* harmony import */ var _english_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./english.page */ 4625);









function playerFactory() {
    return (lottie_web__WEBPACK_IMPORTED_MODULE_1___default());
}
let EnglishPageModule = class EnglishPageModule {
};
EnglishPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            ngx_lottie__WEBPACK_IMPORTED_MODULE_0__.LottieModule.forRoot({ player: playerFactory }),
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _english_routing_module__WEBPACK_IMPORTED_MODULE_2__.EnglishPageRoutingModule
        ],
        declarations: [_english_page__WEBPACK_IMPORTED_MODULE_3__.EnglishPage]
    })
], EnglishPageModule);



/***/ }),

/***/ 4625:
/*!**********************************************************************!*\
  !*** ./src/app/pages/area-of-specialization/english/english.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnglishPage": () => (/* binding */ EnglishPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_english_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./english.page.html */ 1238);
/* harmony import */ var _english_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./english.page.scss */ 519);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 5160);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);







let EnglishPage = class EnglishPage {
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
        this.stat = false;
        this.result = false;
        this.resultStatus = false;
        this.selectedSegment = "Exam";
        this.status = false;
        this.options = {
            path: 'assets/welldone.json'
        };
        this.olddata = JSON.parse(localStorage.getItem('ionicExamLevelData'));
        this.datenow = this.datePipe.transform(this.myDate, 'MMM-dd-yyyy');
    }
    ngOnInit() {
        fetch('./assets/GeneralEducationJsonData/QuestionAndAnswerLetExamReviewer.json').then(res => res.json())
            .then(content => {
            this.quizzes = content.AreaOfSpecialization[0].English;
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
                this.status = true;
                this.saveScore();
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
        olddata.push({ PartName: "English", Score: this.correctAnswers, ExamId: olddatas.ExamId, DateTaken: this.datenow });
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
EnglishPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe }
];
EnglishPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-english',
        template: _raw_loader_english_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('answer', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('void => *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({ opacity: 0, transform: 'translateY(-3rem)' }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)(300)])
            ])
        ],
        styles: [_english_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EnglishPage);



/***/ }),

/***/ 519:
/*!************************************************************************!*\
  !*** ./src/app/pages/area-of-specialization/english/english.page.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#pos {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: white;\n}\n\n.headtit {\n  text-align: center;\n}\n\n.bgbut {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  width: 45px;\n  height: 40px;\n  background-color: #53b2ff;\n  border-radius: 60%;\n}\n\n#headCol {\n  --background: linear-gradient(to right, rgb(11, 158, 216), rgb(4, 89, 247));\n  height: 120%;\n}\n\n.title {\n  font-weight: bold;\n  font-size: 25px;\n  color: #f8f7f7;\n  text-align: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\n.pageTitle {\n  text-align: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  color: #020202;\n  font-size: 1.5em;\n}\n\n.examContent {\n  margin-top: 5%;\n  height: 80%;\n  --background: #e0f1e7;\n}\n\n.questionAndAns {\n  height: 90%;\n}\n\n.examNum {\n  text-align: center;\n}\n\n.nextBtn {\n  text-align: center;\n  margin-bottom: 15px;\n}\n\n.nextBtn ion-button {\n  height: 40px;\n  width: 80px;\n}\n\n.pageContent {\n  --background: rgb(234, 218, 208);\n}\n\n.slides {\n  margin-top: 2%;\n  background: #e0f1e7;\n  padding: 1px 10px 20px 10px;\n  border-radius: 28px 28px 28px 28px;\n}\n\n.toolbars {\n  height: 12%;\n  --background:rgb(216, 135, 135);\n}\n\n.return {\n  font-size: 30px;\n  margin-left: 15px;\n}\n\n.topbtn {\n  font-size: 30px;\n  margin-left: 15px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZ2xpc2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBREE7RUFDRSwyRUFBQTtFQUNBLFlBQUE7QUFJRjs7QUFGQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNIQUFBO0FBS0Y7O0FBSEE7RUFDRSxrQkFBQTtFQUNBLHNIQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBTUY7O0FBSkE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBT0Y7O0FBTEE7RUFDRSxXQUFBO0FBUUY7O0FBTkE7RUFDRSxrQkFBQTtBQVNGOztBQVBBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQVVGOztBQVRFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFXSjs7QUFSQTtFQUNFLGdDQUFBO0FBV0Y7O0FBVEE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0FBWUE7O0FBVEE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7QUFZQTs7QUFWQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQWFGOztBQVZBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQWFGIiwiZmlsZSI6ImVuZ2xpc2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Bvc3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uaGVhZHRpdHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJnYnV0e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE1cHg7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgd2lkdGg6IDQ1cHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4MywgMTc4LCAyNTUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDYwJTtcclxufVxyXG4jaGVhZENvbHtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDExLCAxNTgsIDIxNiksIHJnYig0LCA4OSwgMjQ3KSk7XHJcbiAgaGVpZ2h0OiAxMjAlO1xyXG59XHJcbi50aXRsZXtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6IHJnYigyNDgsIDI0NywgMjQ3KTs7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnBhZ2VUaXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogcmdiKDIsIDIsIDIpO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuLmV4YW1Db250ZW50e1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIGhlaWdodDogODAlO1xyXG4gIC0tYmFja2dyb3VuZDogI2UwZjFlNztcclxufVxyXG4ucXVlc3Rpb25BbmRBbnN7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbn1cclxuLmV4YW1OdW17XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5uZXh0QnRue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGlvbi1idXR0b257XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogODBweDtcclxuICB9XHJcbn1cclxuLnBhZ2VDb250ZW50e1xyXG4gIC0tYmFja2dyb3VuZDogcmdiKDIzNCwgMjE4LCAyMDgpO1xyXG59XHJcbi5zbGlkZXMge1xyXG5tYXJnaW4tdG9wOiAyJTtcclxuYmFja2dyb3VuZDogI2UwZjFlNztcclxucGFkZGluZzogMXB4IDEwcHggMjBweCAxMHB4O1xyXG5ib3JkZXItcmFkaXVzOiAyOHB4IDI4cHggMjhweCAyOHB4O1xyXG4vLyBoZWlnaHQ6IDIwJTtcclxufVxyXG4udG9vbGJhcnN7XHJcbmhlaWdodDogMTIlO1xyXG4tLWJhY2tncm91bmQ6cmdiKDIxNiwgMTM1LCAxMzUpO1xyXG59XHJcbi5yZXR1cm57XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIFxyXG59XHJcbi50b3BidG57XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */");

/***/ }),

/***/ 1238:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/area-of-specialization/english/english.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar class=\"toolbars\">\r\n  <ion-buttons *ngIf=\"stat\" slot=\"start\">\r\n    <ion-menu-button class=\"topbtn\" menu=\"letexam-menu\" autoHide=\"false\"></ion-menu-button>\r\n  </ion-buttons>\r\n  <ion-icon *ngIf=\"!stat\" class=\"return\" slot=\"start\" class=\"topbtn\"name=\"return-up-back\"  routerLink=\"/area-of-specialization\"></ion-icon>\r\n  <h4 class=\"title\">Licensure Examination <br> for Teachers</h4>\r\n</ion-toolbar>\r\n\r\n<ion-content class=\"pageContent ion-padding\">\r\n<div class=\"slides ion-margin-bottom\">  \r\n<h4 class=\"pageTitle\">ENGLISH</h4>\r\n<ion-card *ngIf=\"prevAnswered.length <= 51 && diplayquestion && selectedSegment == 'Exam'\" class=\"questionAndAns\">\r\n  <ion-card-header>\r\n    <div class=\"examNum\">\r\n      <h4>{{ prevAnswered.length }} of {{ quizzes.length }}</h4>\r\n    </div>\r\n    <h4>{{ quizzes[currentQuiz]?.Questions }}</h4>\r\n  </ion-card-header>\r\n  <ion-card-content class=\"answers__list\">\r\n    <ion-radio-group>\r\n      <ion-item *ngFor=\"let quiz of quizzes[currentQuiz]?.MultipleChoice\">\r\n          <ion-label text-wrap>{{ quiz.choices }}</ion-label>\r\n          <ion-radio value=\"{{ quiz.choices }}\" (click)=\"getCorrectAns(quiz.correct)\" slot=\"start\"></ion-radio>\r\n      </ion-item>\r\n      </ion-radio-group>\r\n  </ion-card-content>\r\n    </ion-card>\r\n    <div  class=\"nextBtn\" *ngIf=\"prevAnswered.length >= 50 && diplayquestion\">\r\n      <ion-button (click)=\"SubmitExam()\">Submit</ion-button>\r\n    </div>\r\n    <div class=\"nextBtn\">\r\n      <ion-button *ngIf=\"prevAnswered.length < 50 && diplayquestion\" (click)=\"onAnswer(answer)\">Next</ion-button>\r\n    </div>\r\n  <ion-card *ngIf=\"correctAnswers >= 0 && resultStatus\">\r\n    <ion-card-content>\r\n      <h2>You got {{correctAnswers}} over {{quizzes.length}}</h2>\r\n      <ng-lottie [options]='options'></ng-lottie>\r\n      <ion-button class=\"btn btn--new\" (click)=\"playAgain()\" *ngIf=\"resultStatus && !status\">Retake</ion-button>\r\n      <ion-button class=\"btn btn--new\" (click)=\"retakeExam()\" href=\"general-education\" *ngIf=\"resultStatus && status\">Retake Exam</ion-button>\r\n      <ion-button href=\"home\" (click)=\"getBackHome()\" class=\"btn btn--new\" *ngIf=\"resultStatus && status\">No</ion-button>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_area-of-specialization_english_english_module_ts.js.map