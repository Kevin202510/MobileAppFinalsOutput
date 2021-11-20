import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-area-of-specialization',
  templateUrl: './area-of-specialization.page.html',
  styleUrls: ['./area-of-specialization.page.scss'],
  animations:[  
    trigger('answer', [
      transition('void => *', [style({ opacity: 0, transform: 'translateY(-3rem)'}), animate(300)])
    ])
  ]
})
export class AreaOfSpecializationPage{
  quizzes = [];

  currentQuiz:number;
  answerSelected = false;
  correctAnswers = 0;
  incorrectAnswers = 0;
  prevAnswered = [];
  
  result = false;
  resultStatus = 'Show Result';

  options:AnimationOptions = {
    path:'assets/congrats1.json'
  }
  
  
    constructor(private router:Router) { }
  
    ngOnInit(): void {
      fetch('./assets/GeneralEducationJsonData/QuestionAndAnswerLetExamReviewer.json').then(res => res.json())
      .then(content => {
        this.quizzes = content.AreaOfSpecialization[0].English;
      });
      // this.quizzes = this.quizService.getQuizzes();
      this.currentQuiz = this.getRandom();
      
      this.prevAnswered.push(this.currentQuiz);
    }
  
    onAnswer(option: boolean){
      this.answerSelected = true;
      setTimeout(() => {
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
    playAgain(){
      this.prevAnswered = [];
      this.prevAnswered.push(this.getRandom());
      this.correctAnswers = 0;
      this.incorrectAnswers = 0;
    }
  

}
