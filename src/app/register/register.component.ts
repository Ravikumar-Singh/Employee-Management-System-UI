import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { User } from '../models/user.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    mobNo: '',
    passcode: ''
  };

  constructor(private router: Router, private employeeService: EmployeeService) {}

  onSubmit() {
    // TODO: Replace with actual registration API call
    this.employeeService.createUser(this.user).subscribe(
      response => {
        console.log('Registration successful', response);
        alert('Registration successful!');
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Registration failed', error);
        alert('Registration failed. Please try again.');
      }
    );
  }
}
