import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployesComponent } from './component/employes/employes.component';
import { LoginComponent } from './component/login/login.component';
import { NewemployeComponent } from './component/newemploye/newemploye.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { InterviewPageComponent } from './component/interview-page/interview-page.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ManagerAddComponent } from './component/manager-add/manager-add.component';
import { AllAvailabilityComponent } from './component/all-availability/all-availability.component';
import { ManagerComponent } from './component/manager/manager.component';
import { AssociateComponent } from './component/associate/associate.component';


const routes: Routes = [
  {
    path : 'employe',
    component: EmployesComponent
  },
  {
    path : 'newemploye',
    component: NewemployeComponent
  },
  {
    path : 'login',
    component: LoginComponent
  },
  {
    path : 'sidebar',
    component: SidebarComponent
  },
  {
    path : 'interview-page',
    component: InterviewPageComponent
  },
  {
    path : 'dashboard',
    component: DashboardComponent
  },
  {
    path : 'manager-add',
    component: ManagerAddComponent 
  },
  {
    path : 'availability',
    component: AllAvailabilityComponent
  },
  {
    path: 'manager',
    component: ManagerComponent
  },
  {
    path: 'associate',
    component: AssociateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
