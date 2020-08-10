import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private filterService:FilterService) { }

  ngOnInit(): void {
  }
  search(value){
   // console.log(value);
    this.filterService.searchText.next(value);
    
  }
}
