import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  @Input('color') color;
  @Input('filterColor') filterColor;
  checkedList=[];
  constructor(private filterService:FilterService) { }

  ngOnInit(): void {
  
  }
  colorChange(event,col) {
   // console.log(this.filterColor);
    if(event.target.checked) {
      this.checkedList.push(col.color);
    } else {
    for(var i=0 ; i < this.filterColor.length; i++) {
      if(this.checkedList[i] == col.color) {
        this.checkedList.splice(i,1);
     }
   }
 }
 
 //console.log(this.checkedList);
  this.filterService.colorChange.next(this.checkedList);
  
  this.filterService.colorLength.next(this.checkedList.length);
  //this.filterService.colorChange.next(this.filterColor);

}
  
  
}
