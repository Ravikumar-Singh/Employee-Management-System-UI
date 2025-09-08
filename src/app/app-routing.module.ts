import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, 
  { path: 'home/employees', component: EmployeeListComponent },
  { path: 'home/add', component: CreateEmployeeComponent },
  { path: 'home/update/:id', component: UpdateEmployeeComponent },
  { path: 'home/details/:id', component: EmployeeDetailsComponent },
  { path: 'home', component: HomepageComponent },
  {path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
