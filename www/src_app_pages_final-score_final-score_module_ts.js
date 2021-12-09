(self["webpackChunkLET_Exam_Reviewer"] = self["webpackChunkLET_Exam_Reviewer"] || []).push([["src_app_pages_final-score_final-score_module_ts"],{

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
                }
                else if (olddata[i].PartName === "ProfEd" && olddata[i].ExamId == getExamId) {
                    ped = (olddata[i].Score / totalitem) * 0.6;
                    this.scorePED = Math.floor(ped * 100);
                    initScoreProfEd = ped.toFixed(2);
                    console.log(initScoreProfEd);
                }
            }
            else if (examLevel.ExamLevel === "Secondary") {
                this.examlevel = true;
                if (olddata[i].PartName === "GenEd" && olddata[i].ExamId == getExamId) {
                    sge = (olddata[i].Score / totalitem) * 0.2;
                    this.scoreGE = Math.floor(sge * 100);
                    initScoreGe = sge.toFixed(2);
                    console.log(initScoreGe);
                }
                else if (olddata[i].PartName === "ProfEd" && olddata[i].ExamId == getExamId) {
                    ped = (olddata[i].Score / totalitem) * 0.4;
                    this.scorePED = Math.floor(ped * 100);
                    initScoreProfEd = ped.toFixed(2);
                    console.log(initScoreProfEd);
                }
                else if (olddata[i].PartName === "English" && olddata[i].ExamId == getExamId) {
                    aos = (olddata[i].Score / totalitem) * 0.4;
                    this.scoreAOS = Math.floor(aos * 100);
                    initScoreMajor = aos.toFixed(2);
                    console.log(initScoreMajor);
                }
                else if (olddata[i].PartName === "Filipino" && olddata[i].ExamId == getExamId) {
                    aos = (olddata[i].Score / totalitem) * 0.4;
                    this.scoreAOS = Math.floor(aos * 100);
                    initScoreMajor = aos.toFixed(2);
                    console.log(initScoreMajor);
                }
                else if (olddata[i].PartName === "Mathematics" && olddata[i].ExamId == getExamId) {
                    aos = (olddata[i].Score / totalitem) * 0.4;
                    this.scoreAOS = Math.floor(aos * 100);
                    initScoreMajor = aos.toFixed(2);
                    console.log(initScoreMajor);
                }
                else if (olddata[i].PartName === "Mapeh" && olddata[i].ExamId == getExamId) {
                    aos = (olddata[i].Score / totalitem) * 0.4;
                    this.scoreAOS = Math.floor(aos * 100);
                    initScoreMajor = aos.toFixed(2);
                    console.log(initScoreMajor);
                }
                else if (olddata[i].PartName === "Values_Education" && olddata[i].ExamId == getExamId) {
                    aos = (olddata[i].Score / totalitem) * 0.4;
                    this.scoreAOS = Math.floor(aos * 100);
                    initScoreMajor = aos.toFixed(2);
                    console.log(initScoreMajor);
                }
                else if (olddata[i].PartName === "Tecnology_and_LIvelihood_Education" && olddata[i].ExamId == getExamId) {
                    aos = (olddata[i].Score / totalitem) * 0.4;
                    this.scoreAOS = Math.floor(aos * 100);
                    initScoreMajor = aos.toFixed(2);
                    console.log(initScoreMajor);
                }
                else if (olddata[i].PartName === "Social_Science" && olddata[i].ExamId == getExamId) {
                    aos = (olddata[i].Score / totalitem) * 0.4;
                    this.scoreAOS = Math.floor(aos * 100);
                    initScoreMajor = aos.toFixed(2);
                    console.log(initScoreMajor);
                }
                else if (olddata[i].PartName === "Physical_Science" && olddata[i].ExamId == getExamId) {
                    aos = (olddata[i].Score / totalitem) * 0.4;
                    this.scoreAOS = Math.floor(aos * 100);
                    initScoreMajor = aos.toFixed(2);
                    console.log(initScoreMajor);
                }
                else if (olddata[i].PartName === "Biological_Science" && olddata[i].ExamId == getExamId) {
                    aos = (olddata[i].Score / totalitem) * 0.4;
                    this.scoreAOS = Math.floor(aos * 100);
                    initScoreMajor = aos.toFixed(2);
                    console.log(initScoreMajor);
                }
                else if (olddata[i].PartName === "Agriculture_and_Fishery_Art" && olddata[i].ExamId == getExamId) {
                    aos = (olddata[i].Score / totalitem) * 0.4;
                    this.scoreAOS = Math.floor(aos * 100);
                    initScoreMajor = aos.toFixed(2);
                    console.log(initScoreMajor);
                }
            }
        }
        if (examLevel.ExamLevel === "Elementary") {
            this.FinalAverage = (parseFloat(initScoreGe) + parseFloat(initScoreProfEd)) * 100;
            console.log((parseFloat(initScoreGe) + parseFloat(initScoreProfEd)) * 100);
        }
        else if (examLevel.ExamLevel === "Secondary") {
            this.FinalAverage = (parseFloat(initScoreGe) + parseFloat(initScoreProfEd) + parseFloat(initScoreMajor)) * 100;
            console.log((parseFloat(initScoreGe) + parseFloat(initScoreProfEd) + parseFloat(initScoreMajor)) * 100);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#pos {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: white;\n}\n\n.headtit {\n  text-align: center;\n}\n\n.bgbut {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  width: 45px;\n  height: 40px;\n  background-color: #53b2ff;\n  border-radius: 60%;\n}\n\n#headCol {\n  --background: linear-gradient(to right, rgb(11, 158, 216), rgb(4, 89, 247));\n  height: 120%;\n}\n\n.title {\n  font-weight: bold;\n  font-size: 25px;\n  color: black;\n  text-align: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\n.pageTitle {\n  text-align: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  color: #020202;\n  font-size: 1.5em;\n}\n\n.examContent {\n  margin-top: 5%;\n  height: 80%;\n  --background: #e0f1e7;\n}\n\n.questionAndAns {\n  height: 90%;\n}\n\n.examNum {\n  text-align: center;\n}\n\n.nextBtn {\n  text-align: center;\n  margin-bottom: 15px;\n}\n\n.nextBtn ion-button {\n  height: 40px;\n  width: 80px;\n}\n\n.pageContent {\n  --background: #0853faba;\n}\n\n.slides {\n  margin-top: 2%;\n  background: #e0f1e7;\n  padding: 1px 10px 20px 10px;\n  border-radius: 28px 28px 28px 28px;\n}\n\n.toolbars {\n  height: 12%;\n  --background: #ede900e0 ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmFsLXNjb3JlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0U7RUFDRSxrQkFBQTtBQUVKOztBQUFFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURFO0VBQ0UsMkVBQUE7RUFDQSxZQUFBO0FBSUo7O0FBRkU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzSEFBQTtBQUtKOztBQUhFO0VBQ0Usa0JBQUE7RUFDQSxzSEFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQU1KOztBQUpFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQU9KOztBQUxFO0VBQ0UsV0FBQTtBQVFKOztBQU5FO0VBQ0Usa0JBQUE7QUFTSjs7QUFQRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFVSjs7QUFUSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBV047O0FBUkU7RUFDRSx1QkFBQTtBQVdKOztBQVRFO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtBQVlGOztBQVRFO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0FBWUYiLCJmaWxlIjoiZmluYWwtc2NvcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Bvc3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuaGVhZHRpdHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmJnYnV0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MywgMTc4LCAyNTUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNjAlO1xyXG4gIH1cclxuICAjaGVhZENvbHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMTEsIDE1OCwgMjE2KSwgcmdiKDQsIDg5LCAyNDcpKTtcclxuICAgIGhlaWdodDogMTIwJTtcclxuICB9XHJcbiAgLnRpdGxle1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApOztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC5wYWdlVGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHJnYigyLCAyLCAyKTtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgfVxyXG4gIC5leGFtQ29udGVudHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNlMGYxZTc7XHJcbiAgfVxyXG4gIC5xdWVzdGlvbkFuZEFuc3tcclxuICAgIGhlaWdodDogOTAlO1xyXG4gIH1cclxuICAuZXhhbU51bXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLm5leHRCdG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICB3aWR0aDogODBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnBhZ2VDb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDg1M2ZhYmE7XHJcbiAgfVxyXG4gIC5zbGlkZXMge1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIGJhY2tncm91bmQ6ICNlMGYxZTc7XHJcbiAgcGFkZGluZzogMXB4IDEwcHggMjBweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI4cHggMjhweCAyOHB4IDI4cHg7XHJcbiAgLy8gaGVpZ2h0OiAyMCU7XHJcbiAgfVxyXG4gIC50b29sYmFyc3tcclxuICBoZWlnaHQ6IDEyJTtcclxuICAtLWJhY2tncm91bmQ6ICNlZGU5MDBlMFxyXG4gIH0iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar class=\"toolbars\">\n  <ion-buttons slot=\"start\">\n    <ion-menu-button menu=\"letexam-menu\" autoHide=\"false\"></ion-menu-button>\n  </ion-buttons>\n  <ion-buttons slot=\"secondary\">\n    <ion-button>\n      <ion-icon slot=\"icon-only\" name=\"star\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n  <h4 class=\"title\">Licensure Examination <br> for Teachers</h4>\n</ion-toolbar>\n\n<ion-content class=\"pageContent ion-padding\">\n<div class=\"slides ion-margin-bottom\">  \n<h4 class=\"pageTitle\">Final Score</h4>\n<ion-card class=\"questionAndAns\">\n  <ion-card-content class=\"answers__list\">\n    <ion-item>\n      <h2>GENERAL EDUCATION : {{scoreGE}} %</h2>\n    </ion-item>\n    <ion-item>\n      <h2>PROFESSIONAL EDUCATION : {{scorePED}} %</h2>\n    </ion-item>\n    <ion-item  *ngIf=\"examlevel\">\n      <h2>MAJORSHIP : {{scoreAOS}} %</h2>\n    </ion-item>\n    <ion-item>\n      <h2>Your Final LET Average : {{FinalAverage}}</h2>\n    </ion-item>\n    <ng-lottie [options]='options'></ng-lottie>\n  </ion-card-content>\n</ion-card>\n\n<ion-card>\n  <ion-card-content *ngIf=\"status\">\n    <ion-button class=\"btn btn--new\" (click)=\"retakeExam()\" href=\"general-education\" *ngIf=\"status\">Retake Exam</ion-button>\n    <ion-button href=\"home\" (click)=\"getBackHome()\" class=\"btn btn--new\" *ngIf=\"status\">No</ion-button>\n  </ion-card-content>\n</ion-card>\n</div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_final-score_final-score_module_ts.js.map