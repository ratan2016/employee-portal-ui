import { Component, OnInit } from '@angular/core';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { EmployeeService } from '../employee.service';
import { EmployeeVO } from '../employee.model';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  public gridView: GridDataResult;
  public employees: EmployeeVO[] = [];


  public sort: SortDescriptor[] = [{
    field: 'firstName',
    dir: 'asc'
  }];
  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.loadProducts();
    this.empService.getAllEmployees().subscribe(results => {
      this.employees = results;
      this.loadProducts();
    });
  }

  public sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.loadProducts();
  }

  private loadProducts(): void {
    this.gridView = {
      data: orderBy(this.employees, this.sort),
      total: this.employees.length
    };
  }
}
