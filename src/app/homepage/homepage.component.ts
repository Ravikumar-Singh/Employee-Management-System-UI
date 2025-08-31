import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

   title = 'Employee Management System';
      totalCount=0;
      isLoggedIn = false;
  constructor(private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    this.isLoggedIn = history.state.isLoggedIn || false;

    if(!this.isLoggedIn){
      this.router.navigate(['/']);
    }
    console.log("Flag received from Login:", this.isLoggedIn);
   this.employeeService.getEmployeesList().subscribe(data => {
      console.log(data);
      this.totalCount=data.length;
    })
  }

  goToEmployees() {
    if (this.isLoggedIn) {
       this.router.navigate(['/home/employees'], { state: { isLoggedIn: this.isLoggedIn } });

    } else {
      alert('⚠️ Please log in to view employees.');
    }
  }

   goToAddEmployees() {
    if (this.isLoggedIn) {
       this.router.navigate(['/home/add'], { state: { isLoggedIn: this.isLoggedIn } });

    } else {
      alert('⚠️ Please log in to add employees.');
    }
  }
  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/'], { state: { isLoggedIn: false } });
  }
}


