import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
userFullname:string;

  constructor(private router:Router) {

    var data = JSON.parse(localStorage.getItem('ionicAuthenticationDataUserId'));
    var olddata = JSON.parse(localStorage.getItem('ionicAuthenticationData'));

    if(localStorage.getItem('ionicAuthenticationData')!==null){
      this.userFullname = olddata[data.UserId].Fullname;
      // alert(olddata[data.UserId].Fullname);
    }

  }

  Logout(){
    var data = JSON.parse(localStorage.getItem('ionicAuthenticationDataUserId'));
    data.LoginStatus = 1;
    localStorage.setItem('ionicAuthenticationDataUserId',JSON.stringify(data));
    this.router.navigate(['authentication']);
  }
}
