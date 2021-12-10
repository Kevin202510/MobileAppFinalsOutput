import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username:string;
  password:string;
  fullname:string;
  authData:[];
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  validateForm(){
    if(this.username==null && this.password==null && this.fullname==null){
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

  register(){
    if(this.validateForm()){
      if(localStorage.getItem("ionicAuthenticationData")===null){
        localStorage.setItem('ionicAuthenticationData','[]');
        var olddata = JSON.parse(localStorage.getItem('ionicAuthenticationData'));
        olddata.push({Fullname:this.fullname,Username:this.username,Password:this.password,UserId:olddata.length});
        localStorage.setItem('ionicAuthenticationData',JSON.stringify(olddata));
        this.router.navigate(['authentication']);
      }else{
        console.log(this.authData = JSON.parse(localStorage.getItem('ionicAuthenticationData')));
        console.log(this.authData);
        for (let i = 0; i < this.authData.length; i++){
          if(this.authData[i]['Username']==this.username){
            Swal.fire({
              position: 'center',
              icon: 'warning',
              title: 'Register Failed Username already exist',
              showConfirmButton: false,
              timer: 1500
            })
          }else{
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Registered Sucessfully',
              showConfirmButton: false,
              timer: 1500
            })
            var olddata = JSON.parse(localStorage.getItem('ionicAuthenticationData'));
            olddata.push({Fullname:this.fullname,Username:this.username,Password:this.password,UserId:olddata.length});
            localStorage.setItem('ionicAuthenticationData',JSON.stringify(olddata));
            this.router.navigate(['authentication']);
          }
        } 
      }
    }
  }

}
