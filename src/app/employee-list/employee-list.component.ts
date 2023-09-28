import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employees, IEmployee } from 'src/data';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent {
  employees: IEmployee[] = [];
  filteredEmployees: IEmployee[] = [];
  searchQuery: string = '';
  itemsPerPage: number = 10;
  currentPage: number = 1;
  currentEmployees: IEmployee[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.employees = Employees;
    this.filteredEmployees = this.employees;
    this.updateCurrentEmployees();
  }

  updateCurrentEmployees(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.currentEmployees = this.filteredEmployees.slice(startIndex, endIndex);
  }

  changePage(newPage: number): void {
    if (
      newPage >= 1 &&
      newPage <= Math.ceil(this.filteredEmployees.length / this.itemsPerPage)
    ) {
      this.currentPage = newPage;
      this.updateCurrentEmployees();
    }
  }

  search(): void {
    const filterValue = this.searchQuery.toLowerCase();
    this.filteredEmployees = this.employees.filter(
      (employee) =>
        employee.username.toLowerCase().includes(filterValue) ||
        employee.firstName.toLowerCase().includes(filterValue) ||
        employee.lastName.toLowerCase().includes(filterValue) ||
        employee.group.toLowerCase().includes(filterValue)
    );
    this.currentPage = 1;
    this.updateCurrentEmployees();
  }

  toEmployeeDetail(id: number) {
    this.router.navigate([`/employee/${id}`]);
  }

  editEmployee(employee: IEmployee) {
    // Implementasi logika untuk mengedit karyawan
  }

  deleteEmployee(employee: IEmployee) {
    // Implementasi logika untuk menghapus karyawan
  }
}
