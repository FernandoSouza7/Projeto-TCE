import { ManagerModule } from "../manager/manager.module";

export interface ProjectModule { 
  name: String
  manager: ManagerModule
}
