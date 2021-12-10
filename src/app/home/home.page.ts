import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})  
export class HomePage {

  userName : string;

  constructor(private router:Router,private storage:Storage) {
    this.init();
  }

  init(){
    
    if(localStorage.getItem("ionicAuthenticationData")===null){
      this.router.navigate(['authentication']);
    }else{
      var ddata =  JSON.parse(localStorage.getItem('ionicAuthenticationDataUserId'));
      var stat = ddata.LoginStatus;
      if(stat==1){
        this.router.navigate(['authentication']);
      }
    }

    this.initLocalStorage();

  }

  takeExam(){
    Swal.fire({
      title: 'Choose Exam Coverage Level',
      showDenyButton: true,
      confirmButtonText: 'Elementary Level',
      denyButtonText: `Secondary Level`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.checkExamId();
        this.saveExamLevel("Elementary");
        this.router.navigate(['general-education']);
      } else if (result.isDenied) {
        this.checkExamId();
        this.saveExamLevel("Secondary");
        Swal.fire({
          title: 'Submit your Github username',
          input: 'select',
          inputOptions: {
            'English': 'English',      // How do I dynamically set value?
            'Filipino': 'Filipino',
            'Mathematics': 'Mathematics',
            'Mapeh' : 'Mapeh',
            'Values_Education' : 'Values_Education',
            'Tecnology_and_LIvelihood_Education' : 'Tecnology_and_LIvelihood_Education',
            'Social_Science' : 'Social_Science',
            'Physical_Science' : 'Physical_Science',
            'Biological_Science' : 'Biological_Science',
            'Agriculture_and_Fishery_Art' : 'Agriculture_and_Fishery_Art'
        },
          confirmButtonText: 'Go',
          showLoaderOnConfirm: true,
        }).then((result) => {
          if(localStorage.getItem("ionicAOS")===null){
            let data = {AOS:result.value};
            localStorage.setItem('ionicAOS',JSON.stringify(data));
          }else{
            var olddata = JSON.parse(localStorage.getItem('ionicAOS'));
            olddata.AOS = result.value;
            localStorage.setItem('ionicAOS',JSON.stringify(olddata));
          }
        })
      }
    })
  }

  checkExamId(){
    if(localStorage.getItem("ionicExamId")===null){
      let data = {ExamId:0};
      localStorage.setItem('ionicExamId',JSON.stringify(data));
    }else{
        var olddata = JSON.parse(localStorage.getItem('ionicExamId'));
        olddata.ExamId = olddata.ExamId + 1;
        localStorage.setItem('ionicExamId',JSON.stringify(olddata));
    }
  }

  initLocalStorage(){
    if(localStorage.getItem("ionicExamLevelData")===null){
      let data = {ExamLevel:"level",Status:false};
      localStorage.setItem('ionicExamLevelData',JSON.stringify(data));
    }
    this.checkExamId();
  }

  saveExamLevel(level:string){
    if(localStorage.getItem("ionicExamLevelData")===null){
      let data = {ExamLevel:level,Status:true};
      localStorage.setItem('ionicExamLevelData',JSON.stringify(data));
    }else{
      // alert(localStorage.getItem('ionicExamLevelData').length);
      if(localStorage.getItem('ionicExamLevelData').length==2){
        var olddata = JSON.parse(localStorage.getItem('ionicExamLevelData'));
        olddata.push({ExamLevel:level,Status:true});
        localStorage.setItem('ionicExamLevelData',JSON.stringify(olddata));
      }else{
        var olddata = JSON.parse(localStorage.getItem('ionicExamLevelData'));
        olddata.ExamLevel = level;
        olddata.Status = true;
        localStorage.setItem('ionicExamLevelData',JSON.stringify(olddata));
      }
    }
    this.router.navigate(['general-education']);
  }

}
