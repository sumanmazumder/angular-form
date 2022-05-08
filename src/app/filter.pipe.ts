import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string, property: string): any[] {
    // console.log(items, searchText, property);

    if(!items) return [];
    if(!searchText) return items;

    return this.searchItems(items, searchText.toLowerCase(), property);
   }

   private searchItems(items :any[], searchText: any, property:any): any[] {
     let results:any = [];
      items.map((it:any) => {
        if (it[property].toLowerCase().includes(searchText)) {
            results.push(it);
        }
      });
      console.log(results);

      return results;
   }

}
