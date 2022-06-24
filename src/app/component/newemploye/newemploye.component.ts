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
  fruitCtrl = new FormControl('');
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

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

  @ViewChild('fruitInput')
  fruitInput!: ElementRef<HTMLInputElement>;

  constructor(private employeservice: EmployesService, private _snackBar: MatSnackBar) {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
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

    // Add our fruit
    if (value) {
      this.fruits.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }
}



