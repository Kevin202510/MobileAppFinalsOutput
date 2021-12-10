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
      // if(localStorage.getItem("ionicAuthenticationData")===null){
      //   localStorage.setItem('ionicAuthenticationData','[]');
      //   var olddata = JSON.parse(localStorage.getItem('ionicAuthenticationData'));
      //   olddata.push({Username:this.username,Password:this.password});
      //   localStorage.setItem('ionicAuthenticationData',JSON.stringify(olddata));
      //   this.router.navigate(['home']);
      // }else{
        var authData = JSON.parse(localStorage.getItem('ionicAuthenticationData'));
        if(localStorage.getItem('ionicAuthenticationData')!==null){
              // console.log(this.authData);
            for (let i = 0; i < authData.length; i++){
              if(authData[i]['Username']==this.username && authData[i]['Password']==this.password){
                if(localStorage.getItem("ionicAuthenticationDataUserId")===null){
                    let data = {UserId:authData[i].UserId,LoginStatus:0};
                    localStorage.setItem('ionicAuthenticationDataUserId',JSON.stringify(data));
                }else{
                  var ddata =  JSON.parse(localStorage.getItem('ionicAuthenticationDataUserId'));
                  ddata.UserId = authData[i].UserId;
                  ddata.LoginStatus = 0;
                  localStorage.setItem('ionicAuthenticationDataUserId',JSON.stringify(ddata));
                }
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Login Sucessfully',
                  showConfirmButton: false,
                  timer: 1500
                })
                location.href ="home";
                // this.router.navigate(['home']);
              }else{
                Swal.fire({
                  position: 'center',
                  icon: 'warning',
                  title: 'Login Failed',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
            // } 
          } 
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

}
