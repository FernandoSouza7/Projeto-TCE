import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployesModule } from 'src/app/models/employes/employes.module';
import { EmployesService } from 'src/app/services/employes.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { CompetenceModule } from 'src/app/models/competence/competence.module';

@Component({
  selector: 'app-newemploye',
  templateUrl: './newemploye.component.html',
  styleUrls: ['./newemploye.component.css']
})
export class NewemployeComponent implements OnInit {

  employe : EmployesModule = {
    id: 0,
    name: '',
    remark: false,
    grade: '',
    location: '',
    role: '',
    eng_lvl: '',
    relocation: false
  }
  constructor(private employeservice: EmployesService, private _snackBar: MatSnackBar) { }
  ngOnInit(): void {
  }

  create():void{
    this.employeservice.create(this.employe).subscribe((response) =>{
      this.openSnackBar('Criado com sucesso');
    }, err =>{
      this.openSnackBar('Falha ao criar');
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

