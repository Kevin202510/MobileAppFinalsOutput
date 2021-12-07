(self["webpackChunkLET_Exam_Reviewer"] = self["webpackChunkLET_Exam_Reviewer"] || []).push([["src_app_pages_area-of-specialization_area-of-specialization_module_ts"],{

/***/ 3477:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/area-of-specialization/area-of-specialization-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreaOfSpecializationPageRoutingModule": () => (/* binding */ AreaOfSpecializationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _area_of_specialization_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area-of-specialization.page */ 4255);




const routes = [
    {
        path: '',
        component: _area_of_specialization_page__WEBPACK_IMPORTED_MODULE_0__.AreaOfSpecializationPage
    },
    {
        path: 'english',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_area-of-specialization_english_english_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./english/english.module */ 5343)).then(m => m.EnglishPageModule)
    },
    {
        path: 'filipino',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_area-of-specialization_filipino_filipino_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./filipino/filipino.module */ 9018)).then(m => m.FilipinoPageModule)
    },
    {
        path: 'mathematics',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_area-of-specialization_mathematics_mathematics_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mathematics/mathematics.module */ 6370)).then(m => m.MathematicsPageModule)
    },
    {
        path: 'mapeh',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_area-of-specialization_mapeh_mapeh_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mapeh/mapeh.module */ 3106)).then(m => m.MapehPageModule)
    },
    {
        path: 'values-education',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_area-of-specialization_values-education_values-education_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./values-education/values-education.module */ 1954)).then(m => m.ValuesEducationPageModule)
    },
    {
        path: 'tle',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_area-of-specialization_tle_tle_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tle/tle.module */ 6106)).then(m => m.TLEPageModule)
    },
    {
        path: 'social-science',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_area-of-specialization_social-science_social-science_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./social-science/social-science.module */ 8612)).then(m => m.SocialSciencePageModule)
    },
    {
        path: 'physical-science',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_area-of-specialization_physical-science_physical-science_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./physical-science/physical-science.module */ 3616)).then(m => m.PhysicalSciencePageModule)
    },
    {
        path: 'biological-science',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_area-of-specialization_biological-science_biological-science_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./biological-science/biological-science.module */ 3478)).then(m => m.BiologicalSciencePageModule)
    },
    {
        path: 'afa',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_area-of-specialization_afa_afa_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./afa/afa.module */ 2414)).then(m => m.AFAPageModule)
    }
];
let AreaOfSpecializationPageRoutingModule = class AreaOfSpecializationPageRoutingModule {
};
AreaOfSpecializationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AreaOfSpecializationPageRoutingModule);



/***/ }),

/***/ 2131:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/area-of-specialization/area-of-specialization.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playerFactory": () => (/* binding */ playerFactory),
/* harmony export */   "AreaOfSpecializationPageModule": () => (/* binding */ AreaOfSpecializationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _area_of_specialization_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area-of-specialization-routing.module */ 3477);
/* harmony import */ var _area_of_specialization_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area-of-specialization.page */ 4255);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-lottie */ 534);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lottie-web */ 3052);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_3__);









function playerFactory() {
    return (lottie_web__WEBPACK_IMPORTED_MODULE_3___default());
}
let AreaOfSpecializationPageModule = class AreaOfSpecializationPageModule {
};
AreaOfSpecializationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            ngx_lottie__WEBPACK_IMPORTED_MODULE_2__.LottieModule.forRoot({ player: playerFactory }),
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _area_of_specialization_routing_module__WEBPACK_IMPORTED_MODULE_0__.AreaOfSpecializationPageRoutingModule
        ],
        declarations: [_area_of_specialization_page__WEBPACK_IMPORTED_MODULE_1__.AreaOfSpecializationPage]
    })
], AreaOfSpecializationPageModule);



/***/ }),

/***/ 4255:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/area-of-specialization/area-of-specialization.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreaOfSpecializationPage": () => (/* binding */ AreaOfSpecializationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_area_of_specialization_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./area-of-specialization.page.html */ 9522);
/* harmony import */ var _area_of_specialization_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area-of-specialization.page.scss */ 6545);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 5160);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);






let AreaOfSpecializationPage = class AreaOfSpecializationPage {
    constructor(router) {
        this.router = router;
        this.quizzes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.English = false;
        this.Filipino = false;
        this.Mathematics = false;
        this.Mapeh = false;
        this.Values_Education = false;
        this.Tecnology_and_LIvelihood_Education = false;
        this.Social_Science = false;
        this.Physical_Science = false;
        this.Biological_Science = false;
        this.Agriculture_and_Fishery_Art = false;
        this.answerSelected = false;
        this.correctAnswers = 0;
        this.incorrectAnswers = 0;
        this.prevAnswered = [];
        this.pageval = 0;
        this.result = false;
        this.resultStatus = 'Show Result';
        this.options = {
            path: 'assets/welldone.json'
        };
    }
    ngOnInit() {
        let count = 0;
        for (count = 0; count < this.quizzes.length; count++) {
            console.log(this.prevAnswered.push(count));
        }
        // alert(this.prevAnswered);
    }
    takeQuiz(quiznum) {
        if (quiznum == 1) {
            fetch('./assets/GeneralEducationJsonData/QuestionAndAnswerLetExamReviewer.json').then(res => res.json())
                .then(content => {
                this.quizzes = content.AreaOfSpecialization[0].English;
            });
            this.prevAnswered.length = 0;
            this.English = true;
            this.Filipino = false;
            this.Mathematics = false;
            this.Mapeh = false;
            this.Values_Education = false;
            this.Tecnology_and_LIvelihood_Education = false;
            this.Social_Science = false;
            this.Physical_Science = false;
            this.Biological_Science = false;
            this.Agriculture_and_Fishery_Art = false;
        }
        else if (quiznum == 2) {
            fetch('./assets/GeneralEducationJsonData/QuestionAndAnswerLetExamReviewer.json').then(res => res.json())
                .then(content => {
                this.quizzes = content.AreaOfSpecialization[0].Filipino;
            });
            this.prevAnswered.length = 0;
            this.Filipino = true;
            this.English = false;
            this.Mathematics = false;
            this.Mapeh = false;
            this.Values_Education = false;
            this.Tecnology_and_LIvelihood_Education = false;
            this.Social_Science = false;
            this.Physical_Science = false;
            this.Biological_Science = false;
            this.Agriculture_and_Fishery_Art = false;
        }
        else if (quiznum == 3) {
            fetch('./assets/GeneralEducationJsonData/QuestionAndAnswerLetExamReviewer.json').then(res => res.json())
                .then(content => {
                this.quizzes = content.AreaOfSpecialization[0].Mathematics;
            });
            this.prevAnswered.length = 0;
            this.Mathematics = true;
            this.English = false;
            this.Filipino = false;
            this.Mapeh = false;
            this.Values_Education = false;
            this.Tecnology_and_LIvelihood_Education = false;
            this.Social_Science = false;
            this.Physical_Science = false;
            this.Biological_Science = false;
            this.Agriculture_and_Fishery_Art = false;
        }
        else if (quiznum == 4) {
            fetch('./assets/GeneralEducationJsonData/QuestionAndAnswerLetExamReviewer.json').then(res => res.json())
                .then(content => {
                this.quizzes = content.AreaOfSpecialization[0].Mapeh;
            });
            this.prevAnswered.length = 0;
            this.Mapeh = true;
            this.English = false;
            this.Filipino = false;
            this.Mathematics = false;
            this.Values_Education = false;
            this.Tecnology_and_LIvelihood_Education = false;
            this.Social_Science = false;
            this.Physical_Science = false;
            this.Biological_Science = false;
            this.Agriculture_and_Fishery_Art = false;
        }
        else if (quiznum == 5) {
            fetch('./assets/GeneralEducationJsonData/QuestionAndAnswerLetExamReviewer.json').then(res => res.json())
                .then(content => {
                this.quizzes = content.AreaOfSpecialization[0].Values_Education;
            });
            this.prevAnswered.length = 0;
            this.Values_Education = true;
            this.English = false;
            this.Filipino = false;
            this.Mathematics = false;
            this.Mapeh = false;
            this.Tecnology_and_LIvelihood_Education = false;
            this.Social_Science = false;
            this.Physical_Science = false;
            this.Biological_Science = false;
            this.Agriculture_and_Fishery_Art = false;
        }
        else if (quiznum == 6) {
            fetch('./assets/GeneralEducationJsonData/QuestionAndAnswerLetExamReviewer.json').then(res => res.json())
                .then(content => {
                this.quizzes = content.AreaOfSpecialization[0].Tecnology_and_LIvelihood_Education;
            });
            this.prevAnswered.length = 0;
            this.Tecnology_and_LIvelihood_Education = true;
            this.English = false;
            this.Filipino = false;
            this.Mathematics = false;
            this.Mapeh = false;
            this.Values_Education = false;
            this.Social_Science = false;
            this.Physical_Science = false;
            this.Biological_Science = false;
            this.Agriculture_and_Fishery_Art = false;
        }
        else if (quiznum == 7) {
            fetch('./assets/GeneralEducationJsonData/QuestionAndAnswerLetExamReviewer.json').then(res => res.json())
                .then(content => {
                this.quizzes = content.AreaOfSpecialization[0].Social_Science;
            });
            this.prevAnswered.length = 0;
            this.Social_Science = true;
            this.English = false;
            this.Filipino = false;
            this.Mathematics = false;
            this.Mapeh = false;
            this.Values_Education = false;
            this.Tecnology_and_LIvelihood_Education = false;
            this.Physical_Science = false;
            this.Biological_Science = false;
            this.Agriculture_and_Fishery_Art = false;
        }
        else if (quiznum == 8) {
            fetch('./assets/GeneralEducationJsonData/QuestionAndAnswerLetExamReviewer.json').then(res => res.json())
                .then(content => {
                this.quizzes = content.AreaOfSpecialization[0].Physical_Science;
            });
            this.prevAnswered.length = 0;
            this.Physical_Science = true;
            this.English = false;
            this.Filipino = false;
            this.Mathematics = false;
            this.Mapeh = false;
            this.Values_Education = false;
            this.Tecnology_and_LIvelihood_Education = false;
            this.Social_Science = false;
            this.Biological_Science = false;
            this.Agriculture_and_Fishery_Art = false;
        }
        else if (quiznum == 9) {
            fetch('./assets/GeneralEducationJsonData/QuestionAndAnswerLetExamReviewer.json').then(res => res.json())
                .then(content => {
                this.quizzes = content.AreaOfSpecialization[0].Biological_Science;
            });
            this.prevAnswered.length = 0;
            this.Biological_Science = true;
            this.English = false;
            this.Filipino = false;
            this.Mathematics = false;
            this.Mapeh = false;
            this.Values_Education = false;
            this.Tecnology_and_LIvelihood_Education = false;
            this.Social_Science = false;
            this.Physical_Science = false;
            this.Agriculture_and_Fishery_Art = false;
        }
        else if (quiznum == 10) {
            fetch('./assets/GeneralEducationJsonData/QuestionAndAnswerLetExamReviewer.json').then(res => res.json())
                .then(content => {
                this.quizzes = content.AreaOfSpecialization[0].Mapeh;
            });
            this.prevAnswered.length = 0;
            this.Agriculture_and_Fishery_Art = true;
            this.English = false;
            this.Filipino = false;
            this.Mathematics = false;
            this.Mapeh = false;
            this.Values_Education = false;
            this.Tecnology_and_LIvelihood_Education = false;
            this.Social_Science = false;
            this.Physical_Science = false;
            this.Biological_Science = false;
        }
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
    navigateToNewPage(pagenum) {
        if (pagenum == 0) {
            this.router.navigate(['area-of-specialization/english']);
        }
        else if (pagenum == 1) {
            this.router.navigate(['area-of-specialization/filipino']);
        }
        else if (pagenum == 2) {
            this.router.navigate(['area-of-specialization/mathematics']);
        }
        else if (pagenum == 3) {
            this.router.navigate(['area-of-specialization/mapeh']);
        }
        else if (pagenum == 4) {
            this.router.navigate(['area-of-specialization/values-education']);
        }
        else if (pagenum == 5) {
            this.router.navigate(['area-of-specialization/tle']);
        }
        else if (pagenum == 6) {
            this.router.navigate(['area-of-specialization/social-science']);
        }
        else if (pagenum == 7) {
            this.router.navigate(['area-of-specialization/physical-science']);
        }
        else if (pagenum == 8) {
            this.router.navigate(['area-of-specialization/biological-science']);
        }
        else if (pagenum == 9) {
            this.router.navigate(['area-of-specialization/afa']);
        }
    }
};
AreaOfSpecializationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
AreaOfSpecializationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-area-of-specialization',
        template: _raw_loader_area_of_specialization_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('answer', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('void => *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ opacity: 0, transform: 'translateY(-3rem)' }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)(300)])
            ])
        ],
        styles: [_area_of_specialization_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AreaOfSpecializationPage);



/***/ }),

/***/ 6545:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/area-of-specialization/area-of-specialization.page.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#pos {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: white;\n}\n\n.headtit {\n  text-align: center;\n}\n\n.bgbut {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  width: 45px;\n  height: 40px;\n  background-color: #53b2ff;\n  border-radius: 60%;\n}\n\n#headCol {\n  --background: linear-gradient(to right, rgb(11, 158, 216), rgb(4, 89, 247));\n  height: 120%;\n}\n\n.title {\n  font-weight: bold;\n  font-size: 25px;\n  color: black;\n  text-align: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\n.pageTitle {\n  text-align: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  color: #020202;\n  font-size: 1.5em;\n}\n\n.examContent {\n  margin-top: 5%;\n  height: 80%;\n  --background: #e0f1e7;\n}\n\n.questionAndAns {\n  height: 90%;\n}\n\n.examNum {\n  text-align: center;\n}\n\n.nextBtn {\n  text-align: center;\n  margin-bottom: 15px;\n}\n\n.nextBtn ion-button {\n  height: 40px;\n  width: 80px;\n}\n\n.pageContent {\n  --background: #0853faba;\n}\n\n.slides {\n  margin-top: 2%;\n  background: #e0f1e7;\n  padding: 1px 10px 20px 10px;\n  border-radius: 28px 28px 28px 28px;\n}\n\n.toolbars {\n  height: 12%;\n  --background: #ede900e0 ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFyZWEtb2Ytc3BlY2lhbGl6YXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBREE7RUFDRSwyRUFBQTtFQUNBLFlBQUE7QUFJRjs7QUFGQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNIQUFBO0FBS0Y7O0FBSEE7RUFDRSxrQkFBQTtFQUNBLHNIQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBTUY7O0FBSkE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBT0Y7O0FBTEE7RUFDRSxXQUFBO0FBUUY7O0FBTkE7RUFDRSxrQkFBQTtBQVNGOztBQVBBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQVVGOztBQVRFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFXSjs7QUFSQTtFQUNFLHVCQUFBO0FBV0Y7O0FBVEE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0FBWUE7O0FBVEE7RUFDRSxXQUFBO0VBQ0Esd0JBQUE7QUFZRiIsImZpbGUiOiJhcmVhLW9mLXNwZWNpYWxpemF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwb3N7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICByaWdodDogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmhlYWR0aXR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5iZ2J1dHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIHdpZHRoOiA0NXB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODMsIDE3OCwgMjU1KTtcclxuICBib3JkZXItcmFkaXVzOiA2MCU7XHJcbn1cclxuI2hlYWRDb2x7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigxMSwgMTU4LCAyMTYpLCByZ2IoNCwgODksIDI0NykpO1xyXG4gIGhlaWdodDogMTIwJTtcclxufVxyXG4udGl0bGV7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5wYWdlVGl0bGV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHJnYigyLCAyLCAyKTtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcbi5leGFtQ29udGVudHtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBoZWlnaHQ6IDgwJTtcclxuICAtLWJhY2tncm91bmQ6ICNlMGYxZTc7XHJcbn1cclxuLnF1ZXN0aW9uQW5kQW5ze1xyXG4gIGhlaWdodDogOTAlO1xyXG59XHJcbi5leGFtTnVte1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubmV4dEJ0bntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBpb24tYnV0dG9ue1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgfVxyXG59XHJcbi5wYWdlQ29udGVudHtcclxuICAtLWJhY2tncm91bmQ6ICMwODUzZmFiYTtcclxufVxyXG4uc2xpZGVzIHtcclxubWFyZ2luLXRvcDogMiU7XHJcbmJhY2tncm91bmQ6ICNlMGYxZTc7XHJcbnBhZGRpbmc6IDFweCAxMHB4IDIwcHggMTBweDtcclxuYm9yZGVyLXJhZGl1czogMjhweCAyOHB4IDI4cHggMjhweDtcclxuLy8gaGVpZ2h0OiAyMCU7XHJcbn1cclxuLnRvb2xiYXJze1xyXG4gIGhlaWdodDogMTIlO1xyXG4gIC0tYmFja2dyb3VuZDogI2VkZTkwMGUwXHJcbn0iXX0= */");

/***/ }),

/***/ 9522:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/area-of-specialization/area-of-specialization.page.html ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar class=\"toolbars\">\n  <ion-buttons slot=\"start\">\n    <ion-menu-button menu=\"letexam-menu\" autoHide=\"false\"></ion-menu-button>\n  </ion-buttons>\n  <ion-buttons slot=\"secondary\">\n    <ion-button>\n      <ion-icon slot=\"icon-only\" name=\"star\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n  <h4 class=\"title\">Licensure Examination <br> for Teachers</h4>\n</ion-toolbar>\n\n<ion-content>\n\n  <ion-card id=\"hovthisGE\" class=\"ge\" *ngFor=\"let quiz of quizzes\" (click)=\"navigateToNewPage(prevAnswered[quiz])\">\n    <ion-card-header>\n      <img src=\"assets/logs/gened.png\" class=\"gelogo\">\n    </ion-card-header>\n    <ion-card-content>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_area-of-specialization_area-of-specialization_module_ts.js.map