import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})  
export class HomePage {

  options:AnimationOptions = {
    path:'assets/congrats.json'
  }

  constructor(private router:Router) {}

  goGEED(){
    this.router.navigate(['general-education']);
  }goPEED(){
    this.router.navigate(['professional-education']);
  }goAOS(){
    this.router.navigate(['area-of-specialization']);
  }

}
