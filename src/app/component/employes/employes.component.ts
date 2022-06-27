import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { CompetenceModule } from 'src/app/models/competence/competence.module';
import { EmployesModule } from 'src/app/models/employes/employes.module';
import { ManagerModule } from 'src/app/models/manager/manager.module';
import { ProjectModule } from 'src/app/models/project/project.module';
import { EmployesService } from 'src/app/services/employes.service';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent implements OnInit {

  employelist: EmployesModule[] = [];
  skill: String = ""; 

  count : number = 0;
  specialtyCtrl = new FormControl('');
  filteredname: string = "";


  manager: ManagerModule ={
    id: 1,
    name: "",
    password: "",
    phone: "",
    email: "",
    status: false
  }
   project: ProjectModule ={
    name: "",
    manager: this.manager
  }

  employesearch : EmployesModule = {
    id: 0,
    name: '',
    remark: false,
    grade: '',
    location: '',
    role: '',
    eng_lvl: '',
    relocation: false,
    skills: [],
    languages: [],
    project: this.project,
    email: '',
    phone: '', 
    date_availability: '', 
  }
  searchField?: FormControl;

  constructor(private employeservice: EmployesService,) {}

  ngOnInit(): void {
    this.searchField = new FormControl();
    this.findAll();

  }

  private _filter(value: string): EmployesModule[] {
    const filterValue = value.toLowerCase();

    return this.employelist.filter(employe => employe.name.toLowerCase().includes(filterValue));
  }

  transform(): void {
    this.employelist = this.employelist ? this.employelist.filter(item => item.name.search(new RegExp(this.employesearch.name, 'i')) > -1) : [];
  }

  listSkills(skils: CompetenceModule[]): String {
    for (this.count; this.count < skils.length; this.count++) {
      if (this.count != skils.length && this.count != 0) {
        this.skill= `${this.skill} |`;
      }
      this.skill= `${this.skill} ${skils[this.count].name}`;
    }
    return this.skill;
  }

  findAll():void{
    this.employeservice.findAll().subscribe((response) => {
      this.employelist = response;
    })
  }


}
