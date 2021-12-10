(self["webpackChunklet_exam_reviewer"] = self["webpackChunklet_exam_reviewer"] || []).push([["src_app_pages_final-score_final-score_module_ts"],{

/***/ 1612:
/*!*****************************************************************!*\
  !*** ./src/app/pages/final-score/final-score-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinalScorePageRoutingModule": () => (/* binding */ FinalScorePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _final_score_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./final-score.page */ 9317);




const routes = [
    {
        path: '',
        component: _final_score_page__WEBPACK_IMPORTED_MODULE_0__.FinalScorePage
    }
];
let FinalScorePageRoutingModule = class FinalScorePageRoutingModule {
};
FinalScorePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FinalScorePageRoutingModule);



/***/ }),

/***/ 1317:
/*!*********************************************************!*\
  !*** ./src/app/pages/final-score/final-score.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playerFactory": () => (/* binding */ playerFactory),
/* harmony export */   "FinalScorePageModule": () => (/* binding */ FinalScorePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-lottie */ 534);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lottie-web */ 3052);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _final_score_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./final-score-routing.module */ 1612);
/* harmony import */ var _final_score_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./final-score.page */ 9317);









function playerFactory() {
    return (lottie_web__WEBPACK_IMPORTED_MODULE_1___default());
}
let FinalScorePageModule = class FinalScorePageModule {
};
FinalScorePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            ngx_lottie__WEBPACK_IMPORTED_MODULE_0__.LottieModule.forRoot({ player: playerFactory }),
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _final_score_routing_module__WEBPACK_IMPORTED_MODULE_2__.FinalScorePageRoutingModule
        ],
        declarations: [_final_score_page__WEBPACK_IMPORTED_MODULE_3__.FinalScorePage]
    })
], FinalScorePageModule);



/***/ }),

/***/ 9317:
/*!*******************************************************!*\
  !*** ./src/app/pages/final-score/final-score.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinalScorePage": () => (/* binding */ FinalScorePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_final_score_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./final-score.page.html */ 8381);
/* harmony import */ var _final_score_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./final-score.page.scss */ 1128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let FinalScorePage = class FinalScorePage {
    constructor() {
        this.status = false;
        this.examlevel = false;
        this.options = {
            path: 'assets/congrats1.json'
        };
        this.optionss = {
            path: 'assets/welldone.json'
        };
        this.olddata = JSON.parse(localStorage.getItem('ionicExamLevelData'));
    }
    ngOnInit() {
        this.addScoreandGetPercentage();
    }
    getBackHome() {
        this.olddata.Status = false;
        localStorage.setItem('ionicExamLevelData', JSON.stringify(this.olddata));
    }
    retakeExam() {
        this.olddata.Status = true;
        localStorage.setItem('ionicExamLevelData', JSON.stringify(this.olddata));
    }
    addScoreandGetPercentage() {
        var sge = 0;
        var ped = 0;
        var aos = 0;
        var totalitem = 50;
        var initScoreGe;
        var initScoreProfEd;
        var initScoreMajor;
        var olddata = JSON.parse(localStorage.getItem('ionicExamData'));
        var getGEScore = olddata[0].PartName;
        var getGEScore = olddata[0].PartName;
        var olddatas = JSON.parse(localStorage.getItem('ionicExamId'));
        var getExamId = olddatas.ExamId;
        var examLevel = JSON.parse(localStorage.getItem("ionicExamLevelData"));
        for (var i = 0; i < olddata.length; i++) {
            if (examLevel.ExamLevel === "Elementary") {
                if (olddata[i].PartName === "GenEd" && olddata[i].ExamId == getExamId) {
                    sge = (olddata[i].Score / totalitem) * 0.4;
                    this.scoreGE = Math.floor(sge * 100);
                    initScoreGe = sge.toFixed(2);
                    console.log(initScoreGe);
                    this.examscoreGE = olddata[i].Score;
                }
                else if (olddata[i].PartName === "ProfEd" && olddata[i].ExamId == getExamId) {
                    ped = (olddata[i].Score / totalitem) * 0.6;
                    this.scorePED = Math.floor(ped * 100);
                    initScoreProfEd = ped.toFixed(2);
                    console.log(initScoreProfEd);
                    this.examscorePED = olddata[i].Score;
                }
            }
            else if (examLevel.ExamLevel === "Secondary") {
                this.examlevel = true;
                if (olddata[i].PartName === "GenEd" && olddata[i].ExamId == getExamId) {
                    sge = (olddata[i].Score / totalitem) * 0.2;
                    this.scoreGE = Math.floor(sge * 100);
                    initScoreGe = sge.toFixed(2);
                    console.log(initScoreGe);
                    this.examscoreGE = olddata[i].Score;
                }
                else if (olddata[i].PartName === "ProfEd" && olddata[i].ExamId == getExamId) {
                    ped = (olddata[i].Score / totalitem) * 0.4;
                    this.scorePED = Math.floor(ped * 100);
                    initScoreProfEd = ped.toFixed(2);
                    console.log(initScoreProfEd);
                    this.examscorePED = olddata[i].Score;
                }
                else if (olddata[i].PartName === "English" && olddata[i].ExamId == getExamId) {
                    aos = (olddata[i].Score / totalitem) * 0.4;
                    this.scoreAOS = Math.floor(aos * 100);
                    initScoreMajor = aos.toFixed(2);
                    console.log(initScoreMajor);
                    this.examscoreAOS = olddata[i].Score;
                }
                else if (olddata[i].PartName === "Filipino" && olddata[i].ExamId == getExamId) {
                    aos = (olddata[i].Score / totalitem) * 0.4;
                    this.scoreAOS = Math.floor(aos * 100);
                    initScoreMajor = aos.toFixed(2);
                    console.log(initScoreMajor);
                    this.examscoreAOS = olddata[i].Score;
                }
                else if (olddata[i].PartName === "Mathematics" && olddata[i].ExamId == getExamId) {
                    aos = (olddata[i].Score / totalitem) * 0.4;
                    this.scoreAOS = Math.floor(aos * 100);
                    initScoreMajor = aos.toFixed(2);
                    console.log(initScoreMajor);
                    this.examscoreAOS = olddata[i].Score;
                }
                else if (olddata[i].PartName === "Mapeh" && olddata[i].ExamId == getExamId) {
                    aos = (olddata[i].Score / totalitem) * 0.4;
                    this.scoreAOS = Math.floor(aos * 100);
                    initScoreMajor = aos.toFixed(2);
                    console.log(initScoreMajor);
                    this.examscoreAOS = olddata[i].Score;
                }
                else if (olddata[i].PartName === "Values_Education" && olddata[i].ExamId == getExamId) {
                    aos = (olddata[i].Score / totalitem) * 0.4;
                    this.scoreAOS = Math.floor(aos * 100);
                    initScoreMajor = aos.toFixed(2);
                    console.log(initScoreMajor);
                    this.examscoreAOS = olddata[i].Score;
                }
                else if (olddata[i].PartName === "Tecnology_and_LIvelihood_Education" && olddata[i].ExamId == getExamId) {
                    aos = (olddata[i].Score / totalitem) * 0.4;
                    this.scoreAOS = Math.floor(aos * 100);
                    initScoreMajor = aos.toFixed(2);
                    console.log(initScoreMajor);
                    this.examscoreAOS = olddata[i].Score;
                }
                else if (olddata[i].PartName === "Social_Science" && olddata[i].ExamId == getExamId) {
                    aos = (olddata[i].Score / totalitem) * 0.4;
                    this.scoreAOS = Math.floor(aos * 100);
                    initScoreMajor = aos.toFixed(2);
                    console.log(initScoreMajor);
                    this.examscoreAOS = olddata[i].Score;
                }
                else if (olddata[i].PartName === "Physical_Science" && olddata[i].ExamId == getExamId) {
                    aos = (olddata[i].Score / totalitem) * 0.4;
                    this.scoreAOS = Math.floor(aos * 100);
                    initScoreMajor = aos.toFixed(2);
                    console.log(initScoreMajor);
                    this.examscoreAOS = olddata[i].Score;
                }
                else if (olddata[i].PartName === "Biological_Science" && olddata[i].ExamId == getExamId) {
                    aos = (olddata[i].Score / totalitem) * 0.4;
                    this.scoreAOS = Math.floor(aos * 100);
                    initScoreMajor = aos.toFixed(2);
                    console.log(initScoreMajor);
                    this.examscoreAOS = olddata[i].Score;
                }
                else if (olddata[i].PartName === "Agriculture_and_Fishery_Art" && olddata[i].ExamId == getExamId) {
                    aos = (olddata[i].Score / totalitem) * 0.4;
                    this.scoreAOS = Math.floor(aos * 100);
                    initScoreMajor = aos.toFixed(2);
                    console.log(initScoreMajor);
                    this.examscoreAOS = olddata[i].Score;
                }
            }
        }
        if (examLevel.ExamLevel === "Elementary") {
            this.FinalAverage = (parseFloat(initScoreGe) + parseFloat(initScoreProfEd)) * 100;
            // console.log((parseFloat(initScoreGe) + parseFloat(initScoreProfEd))*100);
        }
        else if (examLevel.ExamLevel === "Secondary") {
            this.FinalAverage = (parseFloat(initScoreGe) + parseFloat(initScoreProfEd) + parseFloat(initScoreMajor)) * 100;
            // console.log((parseFloat(initScoreGe) + parseFloat(initScoreProfEd) + parseFloat(initScoreMajor))*100);
        }
        this.status = true;
    }
};
FinalScorePage.ctorParameters = () => [];
FinalScorePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-final-score',
        template: _raw_loader_final_score_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_final_score_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FinalScorePage);



/***/ }),

/***/ 1128:
/*!*********************************************************!*\
  !*** ./src/app/pages/final-score/final-score.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#pos {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: white;\n}\n\n* {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.headtit {\n  text-align: center;\n}\n\n.bgbut {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  width: 45px;\n  height: 40px;\n  background-color: #53b2ff;\n  border-radius: 60%;\n}\n\n#headCol {\n  --background: linear-gradient(to right, rgb(11, 158, 216), rgb(4, 89, 247));\n  height: 120%;\n}\n\n.title {\n  font-weight: bold;\n  font-size: 25px;\n  color: black;\n  text-align: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\n.pageTitle {\n  text-align: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  color: #020202;\n  font-size: 1.5em;\n}\n\n.examContent {\n  margin-top: 5%;\n  height: 80%;\n  --background: #e0f1e7;\n}\n\n.questionAndAns {\n  height: 90%;\n}\n\n.examNum {\n  text-align: center;\n}\n\n.nextBtn {\n  text-align: center;\n  margin-bottom: 15px;\n}\n\n.nextBtn ion-button {\n  height: 40px;\n  width: 80px;\n}\n\n.pageContent {\n  --background: #0853faba;\n}\n\n.slides {\n  margin-top: 2%;\n  background: #e0f1e7;\n  padding: 1px 10px 20px 10px;\n  border-radius: 28px 28px 28px 28px;\n}\n\n.toolbars {\n  height: 12%;\n  --background: #ede900e0 ;\n}\n\n.failed {\n  background-color: #ec0f0f;\n}\n\n.failed h2 {\n  font-size: 20px;\n  text-align: center;\n}\n\n.pass {\n  background-color: #30bbfc;\n}\n\n.pass h2 {\n  font-size: 20px;\n  text-align: center;\n}\n\n.btnfunct {\n  text-align: center;\n}\n\n.result h3 {\n  font-size: 20px;\n}\n\n.result h2 {\n  line-height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmFsLXNjb3JlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0U7RUFDRSxnREFBQTtBQUVKOztBQUFFO0VBQ0Usa0JBQUE7QUFHSjs7QUFERTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFGRTtFQUNFLDJFQUFBO0VBQ0EsWUFBQTtBQUtKOztBQUhFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0hBQUE7QUFNSjs7QUFKRTtFQUNFLGtCQUFBO0VBQ0Esc0hBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFPSjs7QUFMRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFRSjs7QUFORTtFQUNFLFdBQUE7QUFTSjs7QUFQRTtFQUNFLGtCQUFBO0FBVUo7O0FBUkU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBV0o7O0FBVkk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQVlOOztBQVRFO0VBQ0UsdUJBQUE7QUFZSjs7QUFWRTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7QUFhRjs7QUFWRTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtBQWFGOztBQVhFO0VBQ0UseUJBQUE7QUFjSjs7QUFiSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQWVOOztBQVpFO0VBQ0UseUJBQUE7QUFlSjs7QUFkSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQWdCTjs7QUFiRTtFQUNFLGtCQUFBO0FBZ0JKOztBQWJJO0VBQ0UsZUFBQTtBQWdCTjs7QUFkSTtFQUNFLGlCQUFBO0FBZ0JOIiwiZmlsZSI6ImZpbmFsLXNjb3JlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwb3N7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgKntcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLmhlYWR0aXR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5iZ2J1dHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTVweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODMsIDE3OCwgMjU1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDYwJTtcclxuICB9XHJcbiAgI2hlYWRDb2x7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDExLCAxNTgsIDIxNiksIHJnYig0LCA4OSwgMjQ3KSk7XHJcbiAgICBoZWlnaHQ6IDEyMCU7XHJcbiAgfVxyXG4gIC50aXRsZXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTs7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAucGFnZVRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiByZ2IoMiwgMiwgMik7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gIH1cclxuICAuZXhhbUNvbnRlbnR7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZTBmMWU3O1xyXG4gIH1cclxuICAucXVlc3Rpb25BbmRBbnN7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICB9XHJcbiAgLmV4YW1OdW17XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5uZXh0QnRue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wYWdlQ29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogIzA4NTNmYWJhO1xyXG4gIH1cclxuICAuc2xpZGVzIHtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxuICBiYWNrZ3JvdW5kOiAjZTBmMWU3O1xyXG4gIHBhZGRpbmc6IDFweCAxMHB4IDIwcHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAyOHB4IDI4cHggMjhweCAyOHB4O1xyXG4gIC8vIGhlaWdodDogMjAlO1xyXG4gIH1cclxuICAudG9vbGJhcnN7XHJcbiAgaGVpZ2h0OiAxMiU7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZWRlOTAwZTBcclxuICB9XHJcbiAgLmZhaWxlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDE1LCAxNSk7XHJcbiAgICBoMntcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wYXNze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LCAxODcsIDI1Mik7XHJcbiAgICBoMntcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5idG5mdW5jdHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnJlc3VsdHtcclxuICAgIGgze1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBoMntcclxuICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 8381:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/final-score/final-score.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar class=\"toolbars\">\n  <ion-buttons slot=\"start\">\n    <ion-menu-button menu=\"letexam-menu\" autoHide=\"false\"></ion-menu-button>\n  </ion-buttons>\n  <ion-buttons slot=\"secondary\">\n    <ion-button>\n      <ion-icon slot=\"icon-only\" name=\"star\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n  <h4 class=\"title\">Licensure Examination <br> for Teachers</h4>\n</ion-toolbar>\n\n<ion-content class=\"pageContent ion-padding\">\n<div class=\"slides ion-margin-bottom\">  \n<h4 class=\"pageTitle\">Final Score</h4>\n<ion-card class=\"questionAndAns\">\n  <ion-card-content class=\"answers__list\"> \n    <div class=\"ion-text-center result\">\n      <h2>GENERAL EDUCATION</h2>\n      <h3>{{examscoreGE}} out of 50</h3>\n      <h3>{{scoreGE}} %</h3>\n    </div>\n    <div class=\"ion-text-center result\">\n      <h2>PROFESSIONAL EDUCATION</h2>\n      <h3>{{examscorePED}} out of 50</h3>\n      <h3>{{scorePED}} %</h3>\n    </div>\n\n    <div class=\"ion-text-center result\" *ngIf=\"examlevel\">\n      <h2>MAJORSHIP</h2>\n      <h3>{{examscorePED}} out of 50</h3>\n      <h3>{{scorePED}} %</h3>\n    </div>\n\n    <div class=\"ion-text-center result\">\n      <h2>Your Final LET Average</h2>\n      <h3>{{FinalAverage}} %</h3>\n    </div>\n    <br>\n    <div class=\"ion-text-center pass\" *ngIf=\"FinalAverage >=75\">\n      <h2>You Passed The LET Exam</h2>\n    </div>\n    <div class=\"ion-text-center failed\" *ngIf=\"FinalAverage <75\">\n      <h2>You Failed The LET Exam</h2>\n    </div>\n    <ng-lottie *ngIf=\"FinalAverage >=75\" [options]='options'></ng-lottie>\n    <ng-lottie *ngIf=\"FinalAverage <75\" [options]='optionss'></ng-lottie>\n  </ion-card-content>\n\n  <ion-card-content class=\"btnfunct\" *ngIf=\"status\">\n    <ion-button class=\"btn btn--new\" (click)=\"retakeExam()\" href=\"general-education\" *ngIf=\"status\">Retake Exam</ion-button><br>\n    <ion-button href=\"home\" (click)=\"getBackHome()\" class=\"btn btn--new\" *ngIf=\"status\">Finish</ion-button>\n  </ion-card-content>\n  \n</ion-card>\n\n<!-- <ion-card>\n  <ion-card-content class=\"btnfunct\" *ngIf=\"status\">\n    <ion-button class=\"btn btn--new\" (click)=\"retakeExam()\" href=\"general-education\" *ngIf=\"status\">Retake Exam</ion-button><br>\n    <ion-button href=\"home\" (click)=\"getBackHome()\" class=\"btn btn--new\" *ngIf=\"status\">Finish</ion-button>\n  </ion-card-content>\n</ion-card> -->\n</div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_final-score_final-score_module_ts.js.map