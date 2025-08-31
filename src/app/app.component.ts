import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Management System';

   username: string = '';
  password: string = '';
  constructor(
      private router: Router) { }

  

}
