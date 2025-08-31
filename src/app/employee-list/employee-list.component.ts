import { EmployeeDetailsComponent } from './../employee-details/employee-details.component';
import { Observable } from "rxjs";
import { EmployeeService } from "./../employee.service";
import { Employee } from "./../employee";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<Employee[]>;
  isLoggedIn: boolean = false;
  constructor(private employeeService: EmployeeService,
    private router: Router) {}

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    this.isLoggedIn = history.state.isLoggedIn || false;

    if(!this.isLoggedIn){
      this.router.navigate(['/']);
    }
    
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  employeeDetails(id: number){
    this.router.navigate(['home/details', id], { state: { isLoggedIn: this.isLoggedIn } });
  }

  updateEmployee(id: number){
    this.router.navigate(['home/update', id], { state: { isLoggedIn: this.isLoggedIn } });
    
  }
  backToHome() {
    this.router.navigate(['/home'], { state: { isLoggedIn: this.isLoggedIn } });
  }
}
