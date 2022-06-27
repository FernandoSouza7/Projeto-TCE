import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRemark'
})
export class FilterRemarkPipe implements PipeTransform {

  transform(value: any,  filteredname: string, option: string) {
    if (value.length === 0 ) {
      return value;
    }

    const employelist = [];

    switch(option){
      case "name":
        for(const employe of value){
          if (employe.remark && employe["name"].toLowerCase().includes(filteredname.toLowerCase())) {
           employelist.push(employe);
          }
         }
         break;
      case "id":
        for(const employe of value){
          if (employe.remark && employe["id"].toLowerCase().includes(filteredname.toLowerCase())) {
           employelist.push(employe);
          }
         }
         break;
      case "skills":
      for(const employe of value){
        for(const skill of employe["skills"]){
          if (employe.remark && skill.name.toLowerCase().includes(filteredname.toLowerCase())) {
            employelist.push(employe);
           }

       }     
        }
       break;
      case "project":
        for(const employe of value){
          if (employe.remark && employe["project"].name.toLowerCase().includes(filteredname.toLowerCase())) {
           employelist.push(employe);
          }
         }
         break;

      case "manager":
        for(const employe of value){
          if (employe.remark && employe["project"].manager.name.toLowerCase().includes(filteredname.toLowerCase())) {
           employelist.push(employe);
          }
         }
         break;
    }
    return employelist
  }

}
