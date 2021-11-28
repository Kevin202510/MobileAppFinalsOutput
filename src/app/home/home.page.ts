import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

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
    }
  }

  goGEED(){
    this.router.navigate(['general-education']);
  }goPEED(){
    this.router.navigate(['professional-education']);
  }goAOS(){
    this.router.navigate(['area-of-specialization']);
  }

}
