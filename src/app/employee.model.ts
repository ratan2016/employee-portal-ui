export class EmployeeVO {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: string;
    department: DepartmentVO;
}


export class DepartmentVO {
    id: number;
    departmentCode: string;
    departmentName: string;
}
