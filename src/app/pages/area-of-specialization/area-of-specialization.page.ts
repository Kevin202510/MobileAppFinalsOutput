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
  English = false;
  Filipino = false;
  Mathematics = false;
  Mapeh=false;
  Values_Education=false;
  Tecnology_and_LIvelihood_Education=false;
  Social_Science=false;
  Physical_Science=false;
  Biological_Science=false;
  Agriculture_and_Fishery_Art=false;

  currentQuiz:number;
  answerSelected = false;
  correctAnswers = 0;
  incorrectAnswers = 0;
  prevAnswered = [];
  
  result = false;
  resultStatus = 'Show Result';

  options:AnimationOptions = {
    path:'assets/welldone.json'
  }
  
  
    constructor(private router:Router) { }
  
    ngOnInit(): void {
    }
  

    takeQuiz(quiznum:number){
      if(quiznum==1){
        fetch('./assets/GeneralEducationJsonData/QuestionAndAnswerLetExamReviewer.json').then(res => res.json())
        .then(content => {
          this.quizzes = content.AreaOfSpecialization[0].English;
        });
        this.prevAnswered.length=0;
        this.English = true;
        this.Filipino = false;
        this.Mathematics = false;
        this.Mapeh = false;
        this.Values_Education=false;
        this.Tecnology_and_LIvelihood_Education = false;
        this.Social_Science = false;
        this.Physical_Science = false;
        this.Biological_Science = false;
        this.Agriculture_and_Fishery_Art = false;
      }else if(quiznum==2){
        fetch('./assets/GeneralEducationJsonData/QuestionAndAnswerLetExamReviewer.json').then(res => res.json())
        .then(content => {
          this.quizzes = content.AreaOfSpecialization[0].Filipino;
        });
        this.prevAnswered.length=0;
        this.Filipino = true;
        this.English = false;
        this.Mathematics = false;
        this.Mapeh = false;
        this.Values_Education=false;
        this.Tecnology_and_LIvelihood_Education = false;
        this.Social_Science = false;
        this.Physical_Science = false;
        this.Biological_Science = false;
        this.Agriculture_and_Fishery_Art = false;
       }else if(quiznum==3){
        fetch('./assets/GeneralEducationJsonData/QuestionAndAnswerLetExamReviewer.json').then(res => res.json())
        .then(content => {
          this.quizzes = content.AreaOfSpecialization[0].Mathematics;
        });
        this.prevAnswered.length=0;
        this.Mathematics = true;
        this.English = false;
        this.Filipino = false;
        this.Mapeh = false;
        this.Values_Education=false;
        this.Tecnology_and_LIvelihood_Education = false;
        this.Social_Science = false;
        this.Physical_Science = false;
        this.Biological_Science = false;
        this.Agriculture_and_Fishery_Art = false;
      }else if(quiznum==4){
        fetch('./assets/GeneralEducationJsonData/QuestionAndAnswerLetExamReviewer.json').then(res => res.json())
        .then(content => {
          this.quizzes = content.AreaOfSpecialization[0].Mapeh;
        });
        this.prevAnswered.length=0;
        this.Mapeh = true;
        this.English = false;
        this.Filipino = false;
        this.Mathematics = false;
        this.Values_Education=false;
        this.Tecnology_and_LIvelihood_Education = false;
        this.Social_Science = false;
        this.Physical_Science = false;
        this.Biological_Science = false;
        this.Agriculture_and_Fishery_Art = false;
     } else if(quiznum==5){
      fetch('./assets/GeneralEducationJsonData/QuestionAndAnswerLetExamReviewer.json').then(res => res.json())
      .then(content => {
        this.quizzes = content.AreaOfSpecialization[0].Values_Education;
      });
      this.prevAnswered.length=0;
      this.Values_Education=true;
      this.English = false;
      this.Filipino = false;
      this.Mathematics = false;
      this.Mapeh = false;
      this.Tecnology_and_LIvelihood_Education = false;
      this.Social_Science = false;
      this.Physical_Science = false;
      this.Biological_Science = false;
      this.Agriculture_and_Fishery_Art = false;
   }  else if(quiznum==6){
        fetch('./assets/GeneralEducationJsonData/QuestionAndAnswerLetExamReviewer.json').then(res => res.json())
        .then(content => {
          this.quizzes = content.AreaOfSpecialization[0].Tecnology_and_LIvelihood_Education;
        });
        this.prevAnswered.length=0;
        this.Tecnology_and_LIvelihood_Education = true;
        this.English = false;
        this.Filipino = false;
        this.Mathematics = false;
        this.Mapeh = false;
        this.Values_Education=false;
        this.Social_Science = false;
        this.Physical_Science = false;
        this.Biological_Science = false;
        this.Agriculture_and_Fishery_Art = false;
     }  else if(quiznum==7){
        fetch('./assets/GeneralEducationJsonData/QuestionAndAnswerLetExamReviewer.json').then(res => res.json())
        .then(content => {
          this.quizzes = content.AreaOfSpecialization[0].Social_Science;
        });
        this.prevAnswered.length=0;
        this.Social_Science = true;
        this.English = false;
        this.Filipino = false;
        this.Mathematics = false;
        this.Mapeh = false;
        this.Values_Education=false;
        this.Tecnology_and_LIvelihood_Education = false;
        this.Physical_Science = false;
        this.Biological_Science = false;
        this.Agriculture_and_Fishery_Art = false;
     }  else if(quiznum==8){
        fetch('./assets/GeneralEducationJsonData/QuestionAndAnswerLetExamReviewer.json').then(res => res.json())
        .then(content => {
          this.quizzes = content.AreaOfSpecialization[0].Physical_Science;
        });
        this.prevAnswered.length=0;
        this.Physical_Science = true;
        this.English = false;
        this.Filipino = false;
        this.Mathematics = false;
        this.Mapeh = false;
        this.Values_Education=false;
        this.Tecnology_and_LIvelihood_Education = false;
        this.Social_Science = false;
        this.Biological_Science = false;
        this.Agriculture_and_Fishery_Art = false;
     }  else if(quiznum==9){
        fetch('./assets/GeneralEducationJsonData/QuestionAndAnswerLetExamReviewer.json').then(res => res.json())
        .then(content => {
          this.quizzes = content.AreaOfSpecialization[0].Biological_Science;
        });
        this.prevAnswered.length=0;
        this.Biological_Science = true;
        this.English = false;
        this.Filipino = false;
        this.Mathematics = false;
        this.Mapeh = false;
        this.Values_Education=false;
        this.Tecnology_and_LIvelihood_Education = false;
        this.Social_Science = false;
        this.Physical_Science = false;
        this.Agriculture_and_Fishery_Art = false;
     }  else if(quiznum==10){
        fetch('./assets/GeneralEducationJsonData/QuestionAndAnswerLetExamReviewer.json').then(res => res.json())
        .then(content => {
          this.quizzes = content.AreaOfSpecialization[0].Mapeh;
        });
        this.prevAnswered.length=0;
        this.Agriculture_and_Fishery_Art = true;
        this.English = false;
        this.Filipino = false;
        this.Mathematics = false;
        this.Mapeh = false;
        this.Values_Education=false;
        this.Tecnology_and_LIvelihood_Education = false;
        this.Social_Science = false;
        this.Physical_Science = false;
        this.Biological_Science = false;
     }  
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
