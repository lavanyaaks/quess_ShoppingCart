import { Component, OnInit, Input } from '@angular/core';
import { FiltersComponent } from '../filters/filters.component';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  @Input('brands') brands;
  brandcheckedList=[]
  constructor(private filterService:FilterService) { }

  ngOnInit(): void {
  
  }
  brandChange(event,brand) {
    // console.log(this.filterColor);
     if(event.target.checked) {
       this.brandcheckedList.push(brand.title);
     } else {
     for(var i=0 ; i < this.brands.length; i++) {
       if(this.brandcheckedList[i] == brand.title) {
         this.brandcheckedList.splice(i,1);
      }
    }
  }
  
//console.log(this.brandcheckedList);
   this.filterService.selectedBand.next(this.brandcheckedList);

 
 }
   
}
