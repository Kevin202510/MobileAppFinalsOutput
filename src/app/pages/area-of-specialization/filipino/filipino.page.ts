import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-filipino',
  templateUrl: './filipino.page.html',
  styleUrls: ['./filipino.page.scss'],
  providers: [DatePipe],
  animations:[  
    trigger('answer', [
      transition('void => *', [style({ opacity: 0, transform: 'translateY(-3rem)'}), animate(300)])
    ])
  ]
})
export class FilipinoPage implements OnInit {
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
        this.quizzes = content.AreaOfSpecialization[0].Filipino;
      });
      // this.quizzes = this.quizService.getQuizzes();
      this.currentQuiz = this.getRandom();
      
      this.prevAnswered.push(this.currentQuiz);
    }

    getCorrectAns(ans:boolean){
      this.answer = ans;
    }

    
    olddata = JSON.parse(localStorage.getItem('ionicExamLevelData'));

    SubmitExam(){
      if(localStorage.getItem("ionicExamLevelData")!=null){
        if(this.olddata.Status){
          this.saveScore();
          this.status = true;
          this.router.navigate(['final-score']);
        }else{
          this.diplayquestion = false;
          this.showResult();
        }
      }
    }

    saveScore(){
      if(localStorage.getItem("ionicExamData")===null){
        localStorage.setItem('ionicExamData','[]');
      }
      var olddata = JSON.parse(localStorage.getItem('ionicExamData'));
      var olddatas = JSON.parse(localStorage.getItem('ionicExamId'));
      olddata.push({PartName:"Filipino",Score:this.correctAnswers,ExamId:olddatas.ExamId,DateTaken:this.datenow});
      localStorage.setItem('ionicExamData',JSON.stringify(olddata));
    }

    getBackHome(){
      this.olddata.Status = false;
      localStorage.setItem('ionicExamLevelData',JSON.stringify(this.olddata));
    }

    retakeExam(){
      this.olddata.Status = true;
      localStorage.setItem('ionicExamLevelData',JSON.stringify(this.olddata));
    }
  
    onAnswer(option: boolean){
      // this.answerSelected = true;
      setTimeout(() => {
        console.log(this.prevAnswered);
        console.log("CA " + this.correctAnswers);
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
    playAgain(){
      this.resultStatus = false;
      this.prevAnswered = [];
      this.prevAnswered.push(this.getRandom());
      this.correctAnswers = 0;
      this.incorrectAnswers = 0;
      this.diplayquestion = true;
    }
}
