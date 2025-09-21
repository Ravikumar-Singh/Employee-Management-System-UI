import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../models/department.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  departments: Department[];
  submitted = false;
  isLoggedIn: boolean = false;
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    this.isLoggedIn = history.state.isLoggedIn || false;

    if(!this.isLoggedIn){
      this.router.navigate(['/']);
    }
    this.employeeService.getDepts().subscribe(data => {
      console.log(data);
      this.departments = data;
    });
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.employee.active = true; // Set default value for isActive
    this.employeeService
    .createEmployee(this.employee).subscribe(data => {
      console.log(data)
      this.employee = new Employee();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['home/employees'], { state: { isLoggedIn: this.isLoggedIn } });
  }

  

}