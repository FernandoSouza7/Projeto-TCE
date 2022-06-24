import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Nossas Rotas
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployesComponent } from './component/employes/employes.component';
import { NewemployeComponent } from './component/newemploye/newemploye.component';
import { LoginComponent } from './component/login/login.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ManagerComponent } from './component/manager/manager.component';
import { InterviewPageComponent } from './component/interview-page/interview-page.component';
import { ManagerAddComponent } from './component/manager-add/manager-add.component';
import { AllAvailabilityComponent } from './component/all-availability/all-availability.component';



import {HttpClientModule } from '@angular/common/http'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatChipsModule} from '@angular/material/chips';
import { AssociateComponent } from './component/associate/associate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';



@NgModule({
  declarations: [
    AppComponent,
    EmployesComponent,
    NewemployeComponent,
    LoginComponent,
    SidebarComponent,
    InterviewPageComponent,
    DashboardComponent,
    ManagerAddComponent,
    AllAvailabilityComponent,
    ManagerComponent,
    AssociateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatIconModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
