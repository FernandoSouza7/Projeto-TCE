import { CompetenceModule } from "../competence/competence.module"
import { LanguageModule } from "../language/language.module"
import { ProjectModule } from "../project/project.module"

export interface EmployesModule { 
  id: number,
  name: string,
  remark: boolean,
  grade: String,
  location: String,
  role: String,
  eng_lvl: String,
  relocation: boolean,
  skills: CompetenceModule[],
  languages: LanguageModule[],
  project: ProjectModule,
  email: String,
  phone: String,
  date_availability: String;
}
