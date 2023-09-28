/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmployeeListService } from './employee-list.service';

describe('Service: EmployeeList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeListService]
    });
  });

  it('should ...', inject([EmployeeListService], (service: EmployeeListService) => {
    expect(service).toBeTruthy();
  }));
});
