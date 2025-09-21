import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.css']
})
export class DepartmentCreateComponent implements OnInit {

  department: Department = {
    name: '',
    location: '',
    description: ''
  };

   submitted = false;
  isLoggedIn: boolean = false;

  constructor(private router: Router,private employeeService: EmployeeService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Department Created:', this.department);
      // Here call your API to save department
      // call create department emthod in service 
       this.employeeService.createDept(this.department).subscribe(data => {
         console.log(data);
       }, error => console.log(error));
     
      alert('Department Created Successfully!');
      form.resetForm();
      // once department is created, navigate back to departments list 
      this.router.navigate(['/home/departments'], { state: { isLoggedIn: true } });
    }
  }

  goBackHome() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {

    const nav = this.router.getCurrentNavigation();
    this.isLoggedIn = history.state.isLoggedIn || false;

    if(!this.isLoggedIn){
      this.router.navigate(['/']);
    }
  }

}
