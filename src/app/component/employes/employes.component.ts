import { Component, OnInit } from '@angular/core';
import { EmployesModule } from 'src/app/models/employes/employes.module';
import { EmployesService } from 'src/app/services/employes.service';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent implements OnInit {

  employelist: EmployesModule[] = [];

  constructor(private employeservice: EmployesService) { }

  ngOnInit(): void {
    this.findAll();

  }

  findAll():void{
    this.employeservice.findAll().subscribe((response) => {
      this.employelist = response;
    })
  }


}
