import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginCredentials;
  @ViewChild('login',{static:false}) LoginForm:NgForm;
  user = {
    username:'',
    password:''
  }

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.loginService.getLoginDetails().subscribe(data=>{
      this.loginCredentials = data;
      
      
    })
  }
  onSubmit(){
    
    this.user.username = this.LoginForm.value.uname;
    this.user.password = this.LoginForm.value.psw;

    if((this.loginCredentials[0].username==this.user.username) && (this.loginCredentials[0].password==this.user.password)){
      console.log("loggedin successful");
     
      this.router.navigate(['/products-container']);
      this.loginService.loginStatus.next(true);
    }else{
      this.router.navigate['/'];
    }
   }
}
