import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class EmployeeListService {
  private apiUrl =
    'https://63b831376f4d5660c6cf43ab.mockapi.io/api/v1/employee';

  getEmployees() {
    return axios.get(this.apiUrl);
  }
}
