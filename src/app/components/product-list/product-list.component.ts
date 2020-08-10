import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products;
  searchText;
  colorText;
  colorLength;
  filterColorService;
  filteredBand;

  constructor(private productsService:ProductsService,private filterService:FilterService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(products=>{
      this.products = products;
    })
    this.filterService.searchText.subscribe(search=>this.searchText=search);

    this.filterService.colorChange.subscribe(color=>{
      
      this.colorText=color;
        // console.log("color text");
         //console.log(this.colorText);
    });

    this.filterService.colorLength.subscribe(len=>{
     //console.log(this.colorLength);
      this.colorLength=len
    });
    this.filterService.filterColor.subscribe(filterColor=>{
      //console.log(filterColor);
      this.filterColorService=filterColor;
    });
    
    this.filterService.selectedBand.subscribe(selBand=>{
      this.filteredBand = selBand;
      //console.log(this.filteredBand);
    })
  }

}
