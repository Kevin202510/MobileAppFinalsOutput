import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit {

  constructor(private router: Router) { }

  username:string;
  password:string;
  authData:[];

  ngOnInit() {
  }
  
  validateForm(){
    if(this.username==null && this.password==null){
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'All Fields Are Required',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      return true;
    }
  }
  Login(){
    if(this.validateForm()){
      if(localStorage.getItem("ionicAuthenticationData")===null){
        localStorage.setItem('ionicAuthenticationData','[]');
      }else{
        console.log(this.authData = JSON.parse(localStorage.getItem('ionicAuthenticationData')));
        console.log(this.authData);
        for (let i = 0; i < this.authData.length; i++){
          if(this.authData[i]['Username']==this.username && this.authData[i]['Password']==this.password){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Login Sucessfully',
              showConfirmButton: false,
              timer: 1500
            })
            this.router.navigate(['home']);
          }else{
            Swal.fire({
              position: 'center',
              icon: 'warning',
              title: 'Login Failed',
              showConfirmButton: false,
              timer: 1500
            })
          }
        } 
      }
    // if(this.authData[])
    //   // var olddata = JSON.parse(localStorage.getItem('ionicAuthenticationData'));
    //   // olddata.push({Username:this.username,Password:this.password});
    //   // localStorage.setItem('ionicAuthenticationData',JSON.stringify(olddata));
    }
  }

}
