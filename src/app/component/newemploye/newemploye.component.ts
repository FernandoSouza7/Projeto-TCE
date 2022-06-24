import { Component, OnInit,  ElementRef, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployesModule } from 'src/app/models/employes/employes.module';
import { EmployesService } from 'src/app/services/employes.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { CompetenceModule } from 'src/app/models/competence/competence.module';
import {FormsModule, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-newemploye',
  templateUrl: './newemploye.component.html',
  styleUrls: ['./newemploye.component.css']
})
export class NewemployeComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  specialtyCtrl = new FormControl('');
  filteredSpecialties: Observable<string[]>;
  specialties: string[] = ['Angular'];
  allSpecialties: string[] = ['Angular', 'Assembly', 'AWS', 'Azure', 'C','C++', 'C#', 'Html', 'Java',
   'JavaScript', 'MySQL', '.NET', 'PHP', 'Phyton', 'Project Manager', 'Ruby', 'Scrum Master'];

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

  @ViewChild('specialtyInput')
  specialtyInput!: ElementRef<HTMLInputElement>;

  constructor(private employeservice: EmployesService, private _snackBar: MatSnackBar) {
    this.filteredSpecialties = this.specialtyCtrl.valueChanges.pipe(
      startWith(null),
      map((specialty: string | null) => (specialty ? this._filter(specialty) : this.allSpecialties.slice())),
    );
   }
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
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();


    if (value) {
      this.specialties.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.specialtyCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.specialties.indexOf(fruit);

    if (index >= 0) {
      this.specialties.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.specialties.push(event.option.viewValue);
    this.specialtyInput.nativeElement.value = '';
    this.specialtyCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allSpecialties.filter(specialty => specialty.toLowerCase().includes(filterValue));
  }
}



