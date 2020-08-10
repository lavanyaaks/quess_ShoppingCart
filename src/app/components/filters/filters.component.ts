import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  filter_color;
  brands;
  min;
  max
  price;
  discount;
  checkedList=[];
  constructor(private filtersService:FilterService) { }

  ngOnInit(): void {
  //Color
    this.filtersService.getColors().subscribe(color=>{
      this.filter_color = color[0].values;
     //console.log(this.filter_color);
     this.filtersService.filterColor.next(this.filter_color);
    })
    // Brand
    this.filtersService.getBrands().subscribe(brands=>{
     this.brands = brands[0].values;
     //console.log(this.brands);
    
    })
    // Price
    this.filtersService.getPrice().subscribe(price=>{
       this.min = price.split("+-")[0].split(",");
       this.max = price.split("+-")[1].split(",").reverse().slice(0,7);
     })
      //Discount
      this.filtersService.getDiscount().subscribe(discount=>{
       this.discount = [...new Set(discount)].sort((a,b)=>{
         return a-b;
       });
      });
  }
  // colorChange(e,col){
  //   let colArray=[];
  //   colArray.push(col);
  //   console.log(colArray);
    

  // }
//   colorChange(event,col) {
//     if(event.target.checked) {
//       this.checkedList.push(col.color);
//     } else {
//     for(var i=0 ; i < this.filter_color.length; i++) {
//       if(this.checkedList[i] == col.color) {
//         this.checkedList.splice(i,1);
//      }
//    }
//  }
//  console.log(this.checkedList);
// }
 

}
