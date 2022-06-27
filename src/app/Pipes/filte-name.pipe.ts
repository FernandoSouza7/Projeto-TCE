import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filteName'
})
export class FilteNamePipe implements PipeTransform {

  transform(value: any, filteredName: string) {
    if (value.length === 0 ) {
      return value;
    }

    const employelist = [];
    for(const employe of value){
     if (employe["name"].toLowerCase().includes(filteredName.toLowerCase())) {
      employelist.push(employe);
     }
    }
    return employelist
  }

}
