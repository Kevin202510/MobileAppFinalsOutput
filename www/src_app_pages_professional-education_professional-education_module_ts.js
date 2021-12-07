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
        this.diplayquestion = true;
        this.correctAnswers = 0;
        this.incorrectAnswers = 0;
        this.prevAnswered = [];
        this.result = false;
        this.resultStatus = 'Show Result';
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
            this.quizzes = content.ProfessionalEducation;
        });
        var olddata = JSON.parse(localStorage.getItem('ionicExamData'));
        console.log(olddata[0].PartName);
        console.log(olddata);
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
            this.status = true;
            if (localStorage.getItem('ionicAOS') != null) {
                this.saveScore();
                var olddata = JSON.parse(localStorage.getItem('ionicAOS'));
                if (olddata.AOS === "English") {
                    this.router.navigate(['area-of-specialization/english']);
                }
                else if (olddata.AOS === "Filipino") {
                    this.router.navigate(['area-of-specialization/filipino']);
                }
                else if (olddata.AOS === "Mathematics") {
                    this.router.navigate(['area-of-specialization/mathematics']);
                }
                else if (olddata.AOS === "Mapeh") {
                    this.router.navigate(['area-of-specialization/mapeh']);
                }
                else if (olddata.AOS === "Values_Education") {
                    this.router.navigate(['area-of-specialization/values-education']);
                }
                else if (olddata.AOS === "Tecnology_and_LIvelihood_Education") {
                    this.router.navigate(['area-of-specialization/tle']);
                }
                else if (olddata.AOS === "Social_Science") {
                    this.router.navigate(['area-of-specialization/social-science']);
                }
                else if (olddata.AOS === "Physical_Science") {
                    this.router.navigate(['area-of-specialization/physical-science']);
                }
                else if (olddata.AOS === "Biological_Science") {
                    this.router.navigate(['area-of-specialization/biological-science']);
                }
                else if (olddata.AOS === "Agriculture_and_Fishery_Art") {
                    this.router.navigate(['area-of-specialization/afa']);
                }
            }
            else {
                this.diplayquestion = false;
                this.showResult();
            }
        }
        else {
            this.diplayquestion = false;
            this.showResult();
        }
    }
    onAnswer(option) {
        // this.answerSelected = true;
        setTimeout(() => {
            // console.log(this.prevAnswered);
            // console.log("CA " + this.correctAnswers);
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
    getBackHome() {
        this.olddata.Status = false;
        localStorage.setItem('ionicExamLevelData', JSON.stringify(this.olddata));
    }
    retakeExam() {
        this.olddata.Status = true;
        localStorage.setItem('ionicExamLevelData', JSON.stringify(this.olddata));
    }
    saveScore() {
        if (localStorage.getItem("ionicExamData") === null) {
            localStorage.setItem('ionicExamData', '[]');
        }
        var olddata = JSON.parse(localStorage.getItem('ionicExamData'));
        var olddatas = JSON.parse(localStorage.getItem('ionicExamId'));
        olddata.push({ PartName: "ProfEd", Score: this.correctAnswers, ExamId: olddatas.ExamId, DateTaken: this.datenow });
        localStorage.setItem('ionicExamData', JSON.stringify(olddata));
    }
    playAgain() {
        this.resultStatus = 'Show Result';
        this.prevAnswered = [];
        this.prevAnswered.push(this.getRandom());
        this.correctAnswers = 0;
        this.incorrectAnswers = 0;
        this.diplayquestion = true;
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#pos {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: white;\n}\n\n.headtit {\n  text-align: center;\n}\n\n.bgbut {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  width: 45px;\n  height: 40px;\n  background-color: #53b2ff;\n  border-radius: 60%;\n}\n\n#headCol {\n  --background: linear-gradient(to right, rgb(11, 158, 216), rgb(4, 89, 247));\n  height: 120%;\n}\n\n.title {\n  font-weight: bold;\n  font-size: 25px;\n  color: black;\n  text-align: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\n.pageTitle {\n  text-align: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  color: #020202;\n  font-size: 1.5em;\n}\n\n.examContent {\n  margin-top: 5%;\n  height: 80%;\n  --background: #e0f1e7;\n}\n\n.questionAndAns {\n  height: 90%;\n}\n\n.examNum {\n  text-align: center;\n}\n\n.nextBtn {\n  text-align: center;\n  margin-bottom: 15px;\n}\n\n.nextBtn ion-button {\n  height: 40px;\n  width: 80px;\n}\n\n.pageContent {\n  --background: #0853faba;\n}\n\n.slides {\n  margin-top: 2%;\n  background: #e0f1e7;\n  padding: 1px 10px 20px 10px;\n  border-radius: 28px 28px 28px 28px;\n}\n\n.toolbars {\n  height: 12%;\n  --background: #ede900e0 ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2Zlc3Npb25hbC1lZHVjYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBREE7RUFDRSwyRUFBQTtFQUNBLFlBQUE7QUFJRjs7QUFGQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNIQUFBO0FBS0Y7O0FBSEE7RUFDRSxrQkFBQTtFQUNBLHNIQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBTUY7O0FBSkE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBT0Y7O0FBTEE7RUFDRSxXQUFBO0FBUUY7O0FBTkE7RUFDRSxrQkFBQTtBQVNGOztBQVBBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQVVGOztBQVRFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFXSjs7QUFSQTtFQUNFLHVCQUFBO0FBV0Y7O0FBVEE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0FBWUE7O0FBVEE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7QUFZQSIsImZpbGUiOiJwcm9mZXNzaW9uYWwtZWR1Y2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwb3N7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICByaWdodDogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmhlYWR0aXR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5iZ2J1dHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIHdpZHRoOiA0NXB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODMsIDE3OCwgMjU1KTtcclxuICBib3JkZXItcmFkaXVzOiA2MCU7XHJcbn1cclxuI2hlYWRDb2x7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigxMSwgMTU4LCAyMTYpLCByZ2IoNCwgODksIDI0NykpO1xyXG4gIGhlaWdodDogMTIwJTtcclxufVxyXG4udGl0bGV7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5wYWdlVGl0bGV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHJnYigyLCAyLCAyKTtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcbi5leGFtQ29udGVudHtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBoZWlnaHQ6IDgwJTtcclxuICAtLWJhY2tncm91bmQ6ICNlMGYxZTc7XHJcbn1cclxuLnF1ZXN0aW9uQW5kQW5ze1xyXG4gIGhlaWdodDogOTAlO1xyXG59XHJcbi5leGFtTnVte1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubmV4dEJ0bntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBpb24tYnV0dG9ue1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgfVxyXG59XHJcbi5wYWdlQ29udGVudHtcclxuICAtLWJhY2tncm91bmQ6ICMwODUzZmFiYTtcclxufVxyXG4uc2xpZGVzIHtcclxubWFyZ2luLXRvcDogMiU7XHJcbmJhY2tncm91bmQ6ICNlMGYxZTc7XHJcbnBhZGRpbmc6IDFweCAxMHB4IDIwcHggMTBweDtcclxuYm9yZGVyLXJhZGl1czogMjhweCAyOHB4IDI4cHggMjhweDtcclxuLy8gaGVpZ2h0OiAyMCU7XHJcbn1cclxuLnRvb2xiYXJze1xyXG5oZWlnaHQ6IDEyJTtcclxuLS1iYWNrZ3JvdW5kOiAjZWRlOTAwZTBcclxufSJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar class=\"toolbars\">\r\n  <ion-buttons slot=\"start\">\r\n    <ion-menu-button menu=\"letexam-menu\" autoHide=\"false\"></ion-menu-button>\r\n  </ion-buttons>\r\n  <ion-buttons slot=\"secondary\">\r\n    <ion-button>\r\n      <ion-icon slot=\"icon-only\" name=\"star\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <h4 class=\"title\">Licensure Examination <br> for Teachers</h4>\r\n</ion-toolbar>\r\n\r\n<ion-content class=\"pageContent ion-padding\">\r\n<div class=\"slides ion-margin-bottom\">  \r\n<h4 class=\"pageTitle\">PROFESSIONAL EDUCATION</h4>\r\n<ion-card class=\"examContent\">\r\n<ion-card *ngIf=\"prevAnswered.length <= 51 && diplayquestion && selectedSegment == 'Exam'\" class=\"questionAndAns\">\r\n  <ion-card-header>\r\n    <div class=\"examNum\">\r\n      <h4>{{ prevAnswered.length }} of {{ quizzes.length }}</h4>\r\n    </div>\r\n    <h4>{{ quizzes[currentQuiz]?.Questions }}</h4>\r\n  </ion-card-header>\r\n  <ion-card-content class=\"answers__list\">\r\n    <ion-radio-group>\r\n    <ion-item *ngFor=\"let quiz of quizzes[currentQuiz]?.MultipleChoice\">\r\n        <ion-label>{{ quiz.choices }}</ion-label>\r\n        <ion-radio value=\"{{ quiz.choices }}\" (click)=\"getCorrectAns(quiz.correct)\" slot=\"start\"></ion-radio>\r\n    </ion-item>\r\n    </ion-radio-group>\r\n  </ion-card-content>\r\n</ion-card>\r\n<ion-grid *ngIf=\"prevAnswered.length < 51 && diplayquestion\" >\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-button (click)=\"ReviewExam()\">Review</ion-button>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-button (click)=\"SubmitExam()\">Submit</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  </ion-grid>\r\n  <div class=\"nextBtn\">\r\n    <ion-button *ngIf=\"prevAnswered.length <= 51 && diplayquestion\" (click)=\"onAnswer(answer)\">Next</ion-button>\r\n  </div>\r\n</ion-card>\r\n\r\n<ion-card *ngIf=\"correctAnswers >= 0 && resultStatus == 'Play Again!'\">\r\n  <ion-card-content>\r\n    <h2>You got {{correctAnswers}} over {{quizzes.length}}</h2>\r\n    <ng-lottie [options]='options'></ng-lottie>\r\n    <button class=\"btn btn--new\" (click)=\"playAgain()\" *ngIf=\"resultStatus !== 'Show Result'\">Retake</button>\r\n    <ion-button class=\"btn btn--new\" (click)=\"retakeExam()\" href=\"general-education\" *ngIf=\"resultStatus !== 'Show Result' && status\">Retake Exam</ion-button>\r\n    <ion-button href=\"home\" (click)=\"getBackHome()\" class=\"btn btn--new\" *ngIf=\"resultStatus !== 'Show Result' && status\">No</ion-button>\r\n  </ion-card-content>\r\n</ion-card>\r\n</div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_professional-education_professional-education_module_ts.js.map