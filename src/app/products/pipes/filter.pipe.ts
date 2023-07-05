import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allproducts:any[], searchTerm:string, propertyName:string): any[] {
    //to hold the search result
    const result: any[] = [];

    if (!allproducts || searchTerm == '' || propertyName == '') {
      return allproducts;
    }
    allproducts.forEach((item: any) => {
      //propertyName== searchTerm
      if (item[propertyName].trim().toLowerCase().includes(searchTerm.trim().toLowerCase())) {
        result.push(item)
      }
    })


    return result;
  }

}
