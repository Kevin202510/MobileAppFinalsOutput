import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-final-score',
  templateUrl: './final-score.page.html',
  styleUrls: ['./final-score.page.scss'],
})
export class FinalScorePage implements OnInit {

scoreGE:number;
scorePED:number;
scoreAOS:number;
FinalAverage:number;
status=false;
examlevel = false;

options:AnimationOptions = {
  path:'assets/congrats1.json'
}

  constructor() { }

  ngOnInit() {
    this.addScoreandGetPercentage();
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

  addScoreandGetPercentage(){
    var sge=0;
    var ped=0;
    var aos=0;
    var totalitem=50;
    var initScoreGe;
    var initScoreProfEd;
    var initScoreMajor;
    var olddata = JSON.parse(localStorage.getItem('ionicExamData'));
    var getGEScore = olddata[0].PartName;
    var getGEScore = olddata[0].PartName;
    var olddatas = JSON.parse(localStorage.getItem('ionicExamId'));
    var getExamId = olddatas.ExamId;
    var examLevel = JSON.parse(localStorage.getItem("ionicExamLevelData"));
    for(var i=0;i<olddata.length;i++){
      if(examLevel.ExamLevel==="Elementary"){
        if(olddata[i].PartName === "GenEd" && olddata[i].ExamId ==getExamId){
          sge = (olddata[i].Score/totalitem) * 0.4; 
          this.scoreGE = Math.floor(sge*100);
          initScoreGe = sge.toFixed(2);
          console.log(initScoreGe);
        }else if(olddata[i].PartName === "ProfEd" && olddata[i].ExamId ==getExamId){
          ped = (olddata[i].Score/totalitem) * 0.6; 
          this.scorePED = Math.floor(ped*100);
          initScoreProfEd = ped.toFixed(2);
          console.log(initScoreProfEd);
        }
      }else if(examLevel.ExamLevel==="Secondary"){
        this.examlevel = true;
        if(olddata[i].PartName === "GenEd" && olddata[i].ExamId ==getExamId){
          sge = (olddata[i].Score/totalitem) * 0.2; 
          this.scoreGE = Math.floor(sge*100);
          initScoreGe = sge.toFixed(2);
          console.log(initScoreGe);
        }else if(olddata[i].PartName === "ProfEd" && olddata[i].ExamId ==getExamId){
          ped = (olddata[i].Score/totalitem) * 0.4; 
          this.scorePED = Math.floor(ped*100);
          initScoreProfEd = ped.toFixed(2);
          console.log(initScoreProfEd);
        }else if(olddata[i].PartName === "English" && olddata[i].ExamId ==getExamId){
          aos = (olddata[i].Score/totalitem) * 0.4; 
          this.scoreAOS = Math.floor(aos*100);
          initScoreMajor = aos.toFixed(2);
          console.log(initScoreMajor);
        }else if(olddata[i].PartName === "Filipino" && olddata[i].ExamId ==getExamId){
          aos = (olddata[i].Score/totalitem) * 0.4; 
          this.scoreAOS = Math.floor(aos*100);
          initScoreMajor = aos.toFixed(2);
          console.log(initScoreMajor);
        }else if(olddata[i].PartName === "Mathematics" && olddata[i].ExamId ==getExamId){
          aos = (olddata[i].Score/totalitem) * 0.4; 
          this.scoreAOS = Math.floor(aos*100);
          initScoreMajor = aos.toFixed(2);
          console.log(initScoreMajor);
        }else if(olddata[i].PartName === "Mapeh" && olddata[i].ExamId ==getExamId){
          aos = (olddata[i].Score/totalitem) * 0.4; 
          this.scoreAOS = Math.floor(aos*100);
          initScoreMajor = aos.toFixed(2);
          console.log(initScoreMajor);
        }else if(olddata[i].PartName === "Values_Education" && olddata[i].ExamId ==getExamId){
          aos = (olddata[i].Score/totalitem) * 0.4; 
          this.scoreAOS = Math.floor(aos*100);
          initScoreMajor = aos.toFixed(2);
          console.log(initScoreMajor);
        }else if(olddata[i].PartName === "Tecnology_and_LIvelihood_Education" && olddata[i].ExamId ==getExamId){
          aos = (olddata[i].Score/totalitem) * 0.4; 
          this.scoreAOS = Math.floor(aos*100);
          initScoreMajor = aos.toFixed(2);
          console.log(initScoreMajor);
        }else if(olddata[i].PartName === "Social_Science" && olddata[i].ExamId ==getExamId){
          aos = (olddata[i].Score/totalitem) * 0.4; 
          this.scoreAOS = Math.floor(aos*100);
          initScoreMajor = aos.toFixed(2);
          console.log(initScoreMajor);
        }else if(olddata[i].PartName === "Physical_Science" && olddata[i].ExamId ==getExamId){
          aos = (olddata[i].Score/totalitem) * 0.4; 
          this.scoreAOS = Math.floor(aos*100);
          initScoreMajor = aos.toFixed(2);
          console.log(initScoreMajor);
        }else if(olddata[i].PartName === "Biological_Science" && olddata[i].ExamId ==getExamId){
          aos = (olddata[i].Score/totalitem) * 0.4; 
          this.scoreAOS = Math.floor(aos*100);
          initScoreMajor = aos.toFixed(2);
          console.log(initScoreMajor);
        }else if(olddata[i].PartName === "Agriculture_and_Fishery_Art" && olddata[i].ExamId ==getExamId){
          aos = (olddata[i].Score/totalitem) * 0.4; 
          this.scoreAOS = Math.floor(aos*100);
          initScoreMajor = aos.toFixed(2);
          console.log(initScoreMajor);
        }
      }
    }
    if(examLevel.ExamLevel==="Elementary"){
      this.FinalAverage = (parseFloat(initScoreGe) + parseFloat(initScoreProfEd))*100;
      console.log((parseFloat(initScoreGe) + parseFloat(initScoreProfEd))*100);
    }
    else if(examLevel.ExamLevel==="Secondary"){
      this.FinalAverage = (parseFloat(initScoreGe) + parseFloat(initScoreProfEd) + parseFloat(initScoreMajor))*100;
      console.log((parseFloat(initScoreGe) + parseFloat(initScoreProfEd) + parseFloat(initScoreMajor))*100);
    }
    this.status = true;

  }

}
