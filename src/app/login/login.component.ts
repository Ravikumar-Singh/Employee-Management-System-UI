import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 

  ngOnInit() {
  }
  username: string = '';
    password: string = '';
    constructor(
        private router: Router, private employeeService: EmployeeService) { }
  
    onSubmit() {

      this.employeeService.authorizeUser(this.username, this.password).subscribe(
      _ => {
        alert('Login successful!');
        this.router.navigate(['/home'], { state: { isLoggedIn: true } });
      },
      _ => {
        alert('Invalid credentials!');
      }
      );
     
    }

}
