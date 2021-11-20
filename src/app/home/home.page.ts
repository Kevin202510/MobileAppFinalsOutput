import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})  
export class HomePage {

  userName : string;

  private selectedSegment: string = "pizza";

  options:AnimationOptions = {
    path:'assets/congrats.json'
  }

  datas=[];

  constructor(private router:Router,private storage:Storage) {
    this.storage.create();
  }

  goGEED(){
    this.router.navigate(['general-education']);
  }goPEED(){
    this.router.navigate(['professional-education']);
  }goAOS(){
    this.router.navigate(['area-of-specialization']);
  }

  test(){
    if(localStorage.length==0){
      localStorage.setItem('ionicData','[]');
    }
    var olddata = JSON.parse(localStorage.getItem('ionicData'));
    olddata.push({name:this.userName});
    localStorage.setItem('ionicData',JSON.stringify(olddata));
  }

  loadthis(){
    // if(localStorage.length!=0){
      // var keyyys = Object.keys(localStorage);
      // for(var key of keyyys){
        // console.log(JSON.parse(localStorage.getItem('ionicData')));
        console.log(this.datas = JSON.parse(localStorage.getItem('ionicData'))); 
        // for(var i=0; i<this.datas.length;i++){
        //   alert(this.datas[0]['name']);
        // }
        
        // this.datas = JSON.parse(localStorage.getItem('ionicData'));
        // this.datas.forEach((item,index)=>{
        //   console.log(item['name']);
        // });

  }

  segmentChanged(event:any){
    console.log(event.target.value);
    this.selectedSegment = event.target.value;
    
  }

}
