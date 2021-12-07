import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-final-score',
  templateUrl: './final-score.page.html',
  styleUrls: ['./final-score.page.scss'],
})
export class FinalScorePage implements OnInit {

initScoreGe:string;
initScoreProfEd:string;

  constructor() { }

  ngOnInit() {
    this.addTwoSubScore();
  }

  addTwoSubScore(){
    var sge=0;
    var ped=0;
    var olddata = JSON.parse(localStorage.getItem('ionicExamData'));
    var getGEScore = olddata[0].PartName;
    var getGEScore = olddata[0].PartName;
    var olddatas = JSON.parse(localStorage.getItem('ionicExamId'));
    var getExamId = olddatas.ExamId;
    for(var i=0;i<olddata.length;i++){
      if(olddata[i].PartName === "GenEd" && olddata[i].ExamId ==getExamId){
        sge = 80 * 0.4; 
        this.initScoreGe = sge.toFixed(1);
      }else if(olddata[i].PartName === "ProfEd" && olddata[i].ExamId ==getExamId){
        ped = 51 * 0.6; 
        this.initScoreProfEd = ped.toFixed(1);
      }
    }
  }

}
