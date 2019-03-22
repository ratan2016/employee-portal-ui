import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/employee',
    pathMatch: 'full'
  },
  {
    path: 'employee', component: EmployeesComponent,
    children: [

      {
        path: 'registration',
        component: EmployeeRegistrationComponent
      },
      {
        path: 'view-all',
        component: ViewEmployeesComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
