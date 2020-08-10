import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  @Input('discount') discount;

  constructor() { }

  ngOnInit(): void {
  }

}
