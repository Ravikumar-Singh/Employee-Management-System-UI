import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8081/springboot-crud-rest/api/v1/employees';
  private userUrl = 'http://localhost:8081/springboot-crud-rest/api/v1/user';


  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createUser(user: Object): Observable<Object> {
       return this.http.post(`${this.userUrl}/createUser`, user);
  }

  authorizeUser(email: string, passcode: string): Observable<any> {
    return this.http.get(`${this.userUrl}/authorize?email=${encodeURIComponent(email)}&passCode=${encodeURIComponent(passcode)}`);
  }
}
