import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'shoppingCart';
login_status;
  constructor(private loginService:LoginService){}

  ngOnInit(){
    this.loginService.loginStatus.subscribe(status=>{
      console.log(status);
      this.login_status=status;
    })
  }

}
