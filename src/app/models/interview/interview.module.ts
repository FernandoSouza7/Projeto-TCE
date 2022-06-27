import { EmployesModule } from "../employes/employes.module";
import { ManagerModule } from "../manager/manager.module";

export interface InterviewModule { 
  employee: EmployesModule,
  manager: ManagerModule,
  date_interview: Date
}
