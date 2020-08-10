import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  @Input('max') max;
  @Input('min') min;

  constructor() { }

  ngOnInit(): void {
    console.log(this.max);
    console.log(this.min);
  }

}