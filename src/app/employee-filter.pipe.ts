import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

transform(employees: any[], searchText: string): any[] {
    if (!employees || !searchText) {
      return employees;
    }

    searchText = searchText.toLowerCase();

    return employees.filter(emp =>
      emp.firstName.toLowerCase().includes(searchText) ||
      emp.lastName.toLowerCase().includes(searchText) ||
      emp.emailId.toLowerCase().includes(searchText) ||
      emp.department.name.toLowerCase().includes(searchText) ||
      emp.jobTitle.toLowerCase().includes(searchText)
    );
  }

}
