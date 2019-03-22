import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { DepartmentVO, EmployeeVO } from '../employee.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common'


@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {
  public min: Date = new Date(1919, 0, 1);
  public max: Date = new Date();
  birthDate: Date;
  departments: DepartmentVO[];
  isSuccess: boolean = false;
  isFailed: boolean = false;
  registrationFormGroup: FormGroup;
  constructor(private empService: EmployeeService,
    private fb: FormBuilder,
    private datepipe: DatePipe) {


  }

  ngOnInit() {
    this.birthDate = new Date(1990, 0, 1);
    this.resetForm();
    this.empService.getAllDepartment().subscribe(result => {
      this.departments = result;

    });
  }

  resetForm() {
    this.registrationFormGroup = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      gender: ['Male', Validators.required],
      dateOfBirth: [new Date(), Validators.required],
      department: ['', Validators.required],
    })
  }

  registerEmployee() {
    this.isSuccess = false;
    this.isFailed = false;

    let employee: EmployeeVO = new EmployeeVO();
    employee.firstName = this.registrationFormGroup.controls.firstName.value;
    employee.lastName = this.registrationFormGroup.controls.lastName.value;
    employee.gender = this.registrationFormGroup.controls.gender.value;
    employee.dateOfBirth = this.datepipe.transform(this.registrationFormGroup.controls.dateOfBirth.value, "MM/dd/yyyy");
    let department: DepartmentVO = new DepartmentVO();
    department.id = this.registrationFormGroup.controls.department.value;
    employee.department = department;

    this.empService.register(employee).subscribe(result => {
      if (!!result && !!result.id) {
        this.isSuccess = true;
        this.resetForm();
      } else {
        this.isFailed = true;
      }
    },
    error=>{
      this.isFailed = true;
    })

  }

}
