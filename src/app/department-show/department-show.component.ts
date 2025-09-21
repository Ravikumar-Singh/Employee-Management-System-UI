import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Department } from '../models/department.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-department-show',
  templateUrl: './department-show.component.html',
  styleUrls: ['./department-show.component.css']
})
export class DepartmentShowComponent implements OnInit {

  constructor(private employeeService: EmployeeService,
      private router: Router) { }

      submitted = false;
  isLoggedIn: boolean = false;
  departments: Observable<Department[]>;

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

  goBackHome(){
    this.router.navigate(['/home'], { state: { isLoggedIn: this.isLoggedIn } });
  }

}
