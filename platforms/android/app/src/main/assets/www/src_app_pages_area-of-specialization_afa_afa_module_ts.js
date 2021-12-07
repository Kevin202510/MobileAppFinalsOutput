(self["webpackChunkLET_Exam_Reviewer"] = self["webpackChunkLET_Exam_Reviewer"] || []).push([["src_app_pages_area-of-specialization_afa_afa_module_ts"],{

/***/ 5851:
/*!************************************************************************!*\
  !*** ./src/app/pages/area-of-specialization/afa/afa-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AFAPageRoutingModule": () => (/* binding */ AFAPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _afa_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./afa.page */ 8161);




const routes = [
    {
        path: '',
        component: _afa_page__WEBPACK_IMPORTED_MODULE_0__.AFAPage
    }
];
let AFAPageRoutingModule = class AFAPageRoutingModule {
};
AFAPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AFAPageRoutingModule);



/***/ }),

/***/ 2414:
/*!****************************************************************!*\
  !*** ./src/app/pages/area-of-specialization/afa/afa.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playerFactory": () => (/* binding */ playerFactory),
/* harmony export */   "AFAPageModule": () => (/* binding */ AFAPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-lottie */ 534);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lottie-web */ 3052);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _afa_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./afa-routing.module */ 5851);
/* harmony import */ var _afa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./afa.page */ 8161);









function playerFactory() {
    return (lottie_web__WEBPACK_IMPORTED_MODULE_1___default());
}
let AFAPageModule = class AFAPageModule {
};
AFAPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            ngx_lottie__WEBPACK_IMPORTED_MODULE_0__.LottieModule.forRoot({ player: playerFactory }),
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _afa_routing_module__WEBPACK_IMPORTED_MODULE_2__.AFAPageRoutingModule
        ],
        declarations: [_afa_page__WEBPACK_IMPORTED_MODULE_3__.AFAPage]
    })
], AFAPageModule);



/***/ }),

/***/ 8161:
/*!**************************************************************!*\
  !*** ./src/app/pages/area-of-specialization/afa/afa.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AFAPage": () => (/* binding */ AFAPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_afa_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./afa.page.html */ 2239);
/* harmony import */ var _afa_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./afa.page.scss */ 6826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 5160);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);







let AFAPage = class AFAPage {
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
            this.quizzes = content.AreaOfSpecialization[0].Agriculture_and_Fishery_Art;
        });
        // this.quizzes = this.quizService.getQuizzes();
        this.currentQuiz = this.getRandom();
        this.prevAnswered.push(this.currentQuiz);
    }
    getCorrectAns(ans) {
        this.answer = ans;
    }
    SubmitExam() {
        this.diplayquestion = false;
        this.showResult();
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
        this.diplayquestion = true;
    }
    segmentChanged(event) {
        this.selectedSegment = event.target.value;
        if (event.target.value == 'History') {
            console.log(this.datas = JSON.parse(localStorage.getItem('ionicGeneralEducationData')));
        }
    }
};
AFAPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe }
];
AFAPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-afa',
        template: _raw_loader_afa_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('answer', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('void => *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({ opacity: 0, transform: 'translateY(-3rem)' }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)(300)])
            ])
        ],
        styles: [_afa_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AFAPage);



/***/ }),

/***/ 6826:
/*!****************************************************************!*\
  !*** ./src/app/pages/area-of-specialization/afa/afa.page.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#pos {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: white;\n}\n\n.headtit {\n  text-align: center;\n}\n\n.bgbut {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  width: 45px;\n  height: 40px;\n  background-color: #53b2ff;\n  border-radius: 60%;\n}\n\n#headCol {\n  --background: linear-gradient(to right, rgb(11, 158, 216), rgb(4, 89, 247));\n}\n\n.title {\n  font-weight: bold;\n  font-size: 25px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFmYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNFO0VBQ0Usa0JBQUE7QUFFSjs7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFERTtFQUNFLDJFQUFBO0FBSUo7O0FBRkU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBS0oiLCJmaWxlIjoiYWZhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwb3N7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLmhlYWR0aXR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5iZ2J1dHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTVweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODMsIDE3OCwgMjU1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDYwJTtcclxuICB9XHJcbiAgI2hlYWRDb2x7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDExLCAxNTgsIDIxNiksIHJnYig0LCA4OSwgMjQ3KSk7XHJcbiAgfVxyXG4gIC50aXRsZXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ 2239:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/area-of-specialization/afa/afa.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar id=\"headCol\">\n    <div class=\"headtit\">\n      <h4 class=\"title\">Licensure Examination <br> for Teachers</h4>\n    </div>\n    <div class=\"bgbut\"></div>\n    <ion-buttons slot=\"end\" id=\"pos\"><ion-menu-button menu=\"letexam-menu\"><ion-icon name=\"list-outline\"></ion-icon></ion-menu-button></ion-buttons>\n    <!-- <img slot=\"end\" style=\"margin-right: 20px; border-radius: 13px;\" src=\"assets/icon/profile1.png\" width=\"50\"> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-toolbar>\n  <ion-segment (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"Exam\">\n      <ion-label>Exam</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"History\">\n      <ion-label>History</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-toolbar>\n\n\n  <ion-card *ngIf=\"prevAnswered.length <= 51 && diplayquestion && selectedSegment == 'Exam'\" class=\"answers\">\n    <ion-card-header>\n      <h4>{{ prevAnswered.length }} of {{ quizzes.length }}</h4>\n      <h4>{{ quizzes[currentQuiz]?.Questions }}</h4>\n    </ion-card-header>\n    <ion-card-content class=\"answers__list\">\n      <ion-radio-group>\n      <ion-item *ngFor=\"let quiz of quizzes[currentQuiz]?.MultipleChoice\">\n          <ion-label>{{ quiz.choices }}</ion-label>\n          <ion-radio value=\"{{ quiz.choices }}\" (click)=\"getCorrectAns(quiz.correct)\" slot=\"start\"></ion-radio>\n      </ion-item>\n      </ion-radio-group>\n    </ion-card-content>\n  </ion-card>\n  <ion-grid *ngIf=\"prevAnswered.length > 51 && diplayquestion\" >\n    <ion-row>\n      <ion-col>\n        <ion-button (click)=\"ReviewExam()\">Review</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button (click)=\"SubmitExam()\">Submit</ion-button>\n      </ion-col>\n    </ion-row>\n    </ion-grid>\n    <ion-button *ngIf=\"prevAnswered.length <= 51 && diplayquestion\"  (click)=\"onAnswer(answer)\">Next</ion-button>\n  \n  <ion-card *ngIf=\"correctAnswers > 0 && resultStatus == 'Play Again!'\">\n    <ion-card-content>\n      <h2>You got {{correctAnswers}} over {{quizzes.length}}</h2>\n      <ng-lottie [options]='options'></ng-lottie>\n      <button class=\"btn btn--new\" (click)=\"playAgain()\" *ngIf=\"resultStatus !== 'Show Result'\">{{ resultStatus }}</button>\n    </ion-card-content>\n  </ion-card>\n  <ion-card *ngIf=\"selectedSegment=='History'\">\n    <h4>Score History</h4>\n    <ion-card-content *ngFor=\"let quiz of datas\">\n      <ion-item>\n        <ion-text>Score {{quiz.Score}} <br> Date Taken {{quiz.DateTaken}}</ion-text>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_area-of-specialization_afa_afa_module_ts.js.map