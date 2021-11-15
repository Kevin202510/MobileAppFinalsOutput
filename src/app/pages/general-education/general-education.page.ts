import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-education',
  templateUrl: './general-education.page.html',
  styleUrls: ['./general-education.page.scss'],
})
export class GeneralEducationPage implements OnInit {
  syllabus1st: [];
  MC:[];

  constructor() {  }

  ngOnInit() {
    this.fetchData();

  }

  fetchData(){
    // get all first year subject in 1st sem
    fetch('./assets/GeneralEducationJsonData/generalEducationQuestionAndAnswer.json').then(res => res.json())
      .then(content => {
        this.syllabus1st = content.FirstYear1stSemSyllabus;
      });
      // get all second year subject in 1st sem
      // fetch('./assets/GeneralEducationJsonData/generalEducationQuestionAndAnswer.json').then(res => res.json())
      // .then(content => {
      //   this.syllabus3rd = content.SecondYear1stSemSyllabus;
      // });

      // get all second year subject in 2nd sem
      // fetch('./assets/GeneralEducationJsonData/generalEducationQuestionAndAnswer.json').then(res => res.json())
      // .then(content => {
      //   this.syllabus4th = content.SecondYear2ndSemSyllabus;
      // });
  }

}