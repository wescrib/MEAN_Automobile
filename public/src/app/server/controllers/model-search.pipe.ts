import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modelSearch'
})
export class ModelSearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if(!items)return[];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( list => {
      console.log(list)
      return list.model.toLowerCase().includes(searchText);
    })
  }

}
