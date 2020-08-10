import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  login_api = "https://xebiascart.herokuapp.com/products";

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get(this.login_api);
  }
}
