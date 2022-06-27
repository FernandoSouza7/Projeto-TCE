import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterInterview'
})
export class FilterInterviewPipe implements PipeTransform {

  

  transform(value: any,  filteredname: string, option: string) {
    if (value.length === 0 ) {
      return value;
    }

    const interviewModule = [];

    switch(option){
      case "name":
        for(const interview of value){
          if (interview.employee["name"].toLowerCase().includes(filteredname.toLowerCase())) {
            interviewModule.push(interview);
          }
         }
         break;
      case "id":
        for(const interview of value){
          if (interview.employe["id"].toLowerCase().includes(filteredname.toLowerCase())) {
            interviewModule.push(interview);
          }
         }
         break;
      case "skills":
      for(const interview of value){
        for(const skill of interview.employe["skills"]){
          if (interview.employe.skill.name.toLowerCase().includes(filteredname.toLowerCase())) {
            interviewModule.push(interview);
           }

       }     
        }
       break;
      case "project":
        for(const interview of value){
          if (interview.employe["project"].name.toLowerCase().includes(filteredname.toLowerCase())) {
            interviewModule.push(interview);
          }
         }
         break;

      case "manager":
        for(const interview of value){
          if (interview.employe["project"].manager.name.toLowerCase().includes(filteredname.toLowerCase())) {
            interviewModule.push(interview);
          }
         }
         break;
    }
    return interviewModule;
  }

}
