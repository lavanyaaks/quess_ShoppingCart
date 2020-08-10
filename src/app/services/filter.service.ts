import { Injectable, KeyValueDiffers } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  filter_api="https://xebiascart.herokuapp.com/filters";
  color_api="https://xebiascart.herokuapp.com/filters?type=COLOUR";
  brand_api = "https://xebiascart.herokuapp.com/filters?type=BRAND";
  price_api = "https://xebiascart.herokuapp.com/filters/?type=PRICE";
  discount_api = "https://xebiascart.herokuapp.com/products";


  
  
  searchText = new Subject();
  colorChange = new BehaviorSubject(null);
  colorLength=new Subject();
  filterColor = new Subject();
  selectedBand = new BehaviorSubject(null);
  

  constructor(private http:HttpClient) {
  
  }


  getColors(){
    return this.http.get(this.color_api);
  }
  getBrands(){
    return this.http.get(this.brand_api);
  }
  getPrice(){
    return this.http.get(this.price_api).pipe(map((data)=>{
       const res = data[0].values;
       const displayValue = [];
       const keyValue = [];
       for(let key in res) {
       const price_min = res[key].displayValue;
       const price_max = res[key].key;

       displayValue.push(price_min);
       keyValue.push(price_max);
       }
       return displayValue+"-"+keyValue;
    }))
  }
  getDiscount(){
    return this.http.get(this.discount_api).pipe(map(data=>{
      const discount=[];
      for(let key in data){
      
        const dis = data[key].discount;
        discount.push(dis);
      }
      return discount;
    }));
  }
  
}
