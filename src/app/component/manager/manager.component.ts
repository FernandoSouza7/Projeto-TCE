import { Component, OnInit } from '@angular/core';
import { ManagerModule } from 'src/app/models/manager/manager.module';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {


  managerList! : ManagerModule[];

  constructor(private managerService: ManagerService) { }

  ngOnInit(): void {
    this.findAll();
    
  }

  findAll(): void{
    this.managerService.findAll().subscribe((response) =>{
      this.managerList = response;
    })

  }

}
