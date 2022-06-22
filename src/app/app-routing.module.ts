import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployesComponent } from './component/employes/employes.component';
import { LoginComponent } from './component/login/login.component';
import { NewemployeComponent } from './component/newemploye/newemploye.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
