import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DepartmentVO, EmployeeVO } from './employee.model';
const BASE_API_URL: string = "https://employee-portal-ms.herokuapp.com";
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(private http: HttpClient) { }


  public getAllDepartment(): Observable<DepartmentVO[]> {
    return this.http.get<DepartmentVO[]>(BASE_API_URL + "/departments");
  }


  public getAllEmployees(): Observable<EmployeeVO[]> {
    return this.http.get<EmployeeVO[]>(BASE_API_URL + "/employees/all");
  }


  public register(employee: EmployeeVO): Observable<EmployeeVO> {
    return this.http.post<EmployeeVO>(BASE_API_URL + "/employees", employee);
  }
}
