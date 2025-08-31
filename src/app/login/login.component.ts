import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
        private router: Router) { }
  
    onSubmit() {
      if (this.username === 'Ravi' && this.password === '123456') {
        alert('Login successful ✅');
        // Here you could navigate to dashboard or employees list
        // e.g., this.router.navigate(['/employees']);
        this.router.navigate(['/home'], { state: { isLoggedIn: true } });
      } else {
        alert('Invalid credentials ❌');
      }
    }

}
