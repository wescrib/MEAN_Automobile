import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class MakeSearchPipe implements PipeTransform {

  transform(items: any[], searchText: string, attr: string): any[] {
    if(!items)return[];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( list => {
      console.log(list)
      if(attr =="make"){
        return list.make.toLowerCase().includes(searchText);
      }
      else if(attr=="model"){
        return list.model.toLowerCase().includes(searchText);
      }
      else if(attr=="body"){
        return list.body.toLowerCase().includes(searchText);
      }
      else if(attr=="year"){
        return list.year.toString().includes(searchText);
      }
    })
  }
}
