import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login_api = "https://xebiascart.herokuapp.com/users?username=amigo";
  loginStatus = new Subject();

  constructor(private http:HttpClient) { }

  getLoginDetails(){
    return this.http.get(this.login_api);
  }
}
