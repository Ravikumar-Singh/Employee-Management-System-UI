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
  inactiveEmployees: number = 0;
  activeEmployees: number = 0;
  isLoggedIn: boolean = false;
  searchText: string = '';
  departmentLength: number = 0;
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
   
    this.employees.subscribe(empList => {
      empList.forEach(emp => {
        if(emp.active) {
          this.activeEmployees++;
        } else {
          this.inactiveEmployees++;
        }
      });
    });
    console.log("Active Employees: ", this.activeEmployees);
    this.employeeService.getDepts().subscribe(data => {
      console.log(data);
      this.departmentLength=data.length;
    })
    
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
