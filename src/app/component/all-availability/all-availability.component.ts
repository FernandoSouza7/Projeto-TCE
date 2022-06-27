import { R } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployesModule } from 'src/app/models/employes/employes.module';
import { InterviewModule } from 'src/app/models/interview/interview.module';
import { ManagerModule } from 'src/app/models/manager/manager.module';
import { ProjectModule } from 'src/app/models/project/project.module';
import { AuthService } from 'src/app/services/auth.service';
import { EmployesService } from 'src/app/services/employes.service';
import { InterviewService } from 'src/app/services/interview.service';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-all-availability',
  templateUrl: './all-availability.component.html',
  styleUrls: ['./all-availability.component.css']
})
export class AllAvailabilityComponent implements OnInit {

  employelist: EmployesModule[] = [];

  filteredname: string = "";

  selected = 'name';

  values= 'nome id projeto skills manager'.split(' ');

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


  interview!: InterviewModule;




  constructor(private router: Router, private route: ActivatedRoute, private auth: AuthService,
     private employeservice: EmployesService, private interviewService: InterviewService, private managerService: ManagerService,
     private _snackBar: MatSnackBar) {
      if (this.auth.isAuthtenticate() == false) {
        this.router.navigate(["/login"], { relativeTo: this.route });
      }
     }

  ngOnInit(): void {
   this.findAllByRemark();
   this.findManagerById();
  }

  findManagerById(): void{
    this.managerService.findManagerById().subscribe((response) =>{
      this.manager = response;
    })
  }

  onChange(newValue: string | null) {
    if (newValue != null) {
      this.selected = newValue;
    }

}

  newInterview(employee: EmployesModule) : void{

    this.interview ={
      employee: employee,
      manager: this.manager,
      date_interview: new Date('2022-06-26')
    }
    
    this.interviewService.create(this.interview,).subscribe((response) =>{
      this.openSnackBar("Adicionado a lista de entrevista");
    },err =>{
      this.openSnackBar('Erro');
    }) 
  }


  findAllByRemark(): void{
    this.employeservice.findAll().subscribe((response) => {
      this.employelist = response;
    })
  }


  openSnackBar(text: string) {
    this._snackBar.open(text, 'OK', {
      duration: 5000,
      horizontalPosition: "center",
      verticalPosition: "top",
      // direction: "rtl"
    });

  }

}
