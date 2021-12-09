import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-professional-education',
  templateUrl: './professional-education.page.html',
  styleUrls: ['./professional-education.page.scss'],
  providers: [DatePipe],
  animations:[  
    trigger('answer', [
      transition('void => *', [style({ opacity: 0, transform: 'translateY(-3rem)'}), animate(300)])
    ])
  ]
})
export class ProfessionalEducationPage implements OnInit {
  quizzes = [];
  datas=[];

  myDate = new Date();
  datenow:string;

  currentQuiz:number;
  answerSelected = false;
  diplayquestion = true;
  correctAnswers = 0;
  incorrectAnswers = 0;
  prevAnswered = [];
  
  result = false;
  resultStatus = false;
  selectedSegment: string = "Exam";
  answer:boolean;
  status = false;


  options:AnimationOptions = {
    path:'assets/welldone.json'
  }
  
  
    constructor(private router:Router,private datePipe: DatePipe) {
      this.datenow = this.datePipe.transform(this.myDate, 'MMM-dd-yyyy');
     }
  
    ngOnInit() {
      fetch('./assets/GeneralEducationJsonData/QuestionAndAnswerLetExamReviewer.json').then(res => res.json())
      .then(content => {
        this.quizzes = content.ProfessionalEducation;
      });
      // var olddata = JSON.parse(localStorage.getItem('ionicExamData'));
      // console.log(olddata[0].PartName);
      // console.log(olddata);
      // this.quizzes = this.quizService.getQuizzes();
      this.currentQuiz = this.getRandom();
      
      this.prevAnswered.push(this.currentQuiz);
    }

    getCorrectAns(ans:boolean){
      this.answer = ans;
    }

    SubmitExam(){
      var olddata = JSON.parse(localStorage.getItem('ionicExamLevelData'));
      if(olddata.Status){
        this.status = true;
        if(localStorage.getItem('ionicAOS')!=null && olddata.ExamLevel==="Secondary"){
          this.saveScore();
          var olddata = JSON.parse(localStorage.getItem('ionicAOS'));
          if(olddata.AOS==="English"){
            this.router.navigate(['area-of-specialization/english']);
          }else if(olddata.AOS==="Filipino"){
            this.router.navigate(['area-of-specialization/filipino']);
          }else if(olddata.AOS==="Mathematics"){
            this.router.navigate(['area-of-specialization/mathematics']);
          }else if(olddata.AOS==="Mapeh"){
            this.router.navigate(['area-of-specialization/mapeh']);
          }else if(olddata.AOS==="Values_Education"){
            this.router.navigate(['area-of-specialization/values-education']);
          }else if(olddata.AOS==="Tecnology_and_LIvelihood_Education"){
            this.router.navigate(['area-of-specialization/tle']);
          }else if(olddata.AOS==="[Social_Science]"){
            this.router.navigate(['area-of-specialization/social-science']);
          }else if(olddata.AOS==="Physical_Science"){
            this.router.navigate(['area-of-specialization/physical-science']);
          }else if(olddata.AOS==="Biological_Science"){
            this.router.navigate(['area-of-specialization/biological-science']);
          }else if(olddata.AOS==="Agriculture_and_Fishery_Art"){
            this.router.navigate(['area-of-specialization/afa']);
          }
        }else{
          this.saveScore();
          this.router.navigate(['final-score']);
        }
      }else{
        this.diplayquestion = false;
        this.showResult();
      }
    }
  
    onAnswer(option: boolean){
      // this.answerSelected = true;
      setTimeout(() => {
        // console.log(this.prevAnswered);
        // console.log("CA " + this.correctAnswers);
        let newQuiz = this.getRandom();
         while(this.prevAnswered.includes(newQuiz) && this.prevAnswered.length < 50){
          newQuiz = this.getRandom();
         }
         this.currentQuiz = newQuiz;
          this.prevAnswered.push(this.currentQuiz);
        
          this.answerSelected = false;
      }, 300);
  
      if(option){
        this.correctAnswers++;
      }else{
        this.incorrectAnswers++;
      }
      
    }

    getRandom(){
      return Math.floor(Math.random() * this.quizzes.length);
    }
  
    showResult(){
      this.result = true;
      this.resultStatus = true;  
    }

    olddata = JSON.parse(localStorage.getItem('ionicExamLevelData'));

    getBackHome(){
      this.olddata.Status = false;
      localStorage.setItem('ionicExamLevelData',JSON.stringify(this.olddata));
    }
    
    retakeExam(){
      this.olddata.Status = true;
      localStorage.setItem('ionicExamLevelData',JSON.stringify(this.olddata));
    }

    saveScore(){
      if(localStorage.getItem("ionicExamData")===null){
        localStorage.setItem('ionicExamData','[]');
      }
      var olddata = JSON.parse(localStorage.getItem('ionicExamData'));
      var olddatas = JSON.parse(localStorage.getItem('ionicExamId'));
      olddata.push({PartName:"ProfEd",Score:this.correctAnswers,ExamId:olddatas.ExamId,DateTaken:this.datenow});
      localStorage.setItem('ionicExamData',JSON.stringify(olddata));
    }

    // addTwoSubScore(){
    //   var olddata = JSON.parse(localStorage.getItem('ionicExamData'));
    //   var getGEScore = olddata[0].PartName;
    //   var getGEScore = olddata[0].PartName;
    //   var olddatas = JSON.parse(localStorage.getItem('ionicExamId'));
    //   var getExamId = olddatas.ExamId;
    //   var initScoreGe;
    //   var initScoreProfEd;
    //   for(var i=0;i<olddata.length;i++){
    //     if(olddata[i].PartName === "GenEd" && olddata[i].ExamId ==getExamId){
    //       initScoreGe = olddata[i].Score; 
    //     }else if(olddata[i].PartName === "ProfEd" && olddata[i].ExamId ==getExamId){
    //       initScoreProfEd = olddata[i].Score; 
    //     }
    //   }
    //   console.log("GE : " + initScoreGe);
    //    console.log("Prof Ed : " + initScoreProfEd);
    // }
    
    playAgain(){
      this.resultStatus = false;
      this.prevAnswered = [];
      this.prevAnswered.push(this.getRandom());
      this.correctAnswers = 0;
      this.incorrectAnswers = 0;
      this.diplayquestion = true;
  }
  

}
