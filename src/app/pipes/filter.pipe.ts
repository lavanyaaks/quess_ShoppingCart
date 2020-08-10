import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, filter: any, filterItems: Array<any>,colorText:Array<any>,colorLength,filteredBand:Array<any>): any {
    console.log(filteredBand);
    if(colorText===null && filteredBand===null){
      return items
    }
      const products = [];
      console.log('Filtering ..');

      
   if(colorText.length>0){
     if (filter && Array.isArray(items) && filterItems && colorText) {
      let filterKeys = Object.keys(colorText);
      colorText.map(item=>{
      items.forEach(prod=>{
      if(prod.colour.color===item){
        products.push(prod);
      }
   })
})
}

 return products;
}else{
  //console.log("null products");
  return items
}

}
}
