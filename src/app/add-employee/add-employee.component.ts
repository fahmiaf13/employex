import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { format, parseISO, isAfter } from 'date-fns';

interface IDropdownItems {
  id: number;
  name: string;
}

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  username: string = '';
  password: string = '';
  submitForm!: FormGroup;
  selectedList: string = '';
  isFuture: boolean = false;

  groupList: IDropdownItems[] = [
    {
      id: 1,
      name: 'Designer',
    },
    {
      id: 2,
      name: 'Supervisor',
    },
    {
      id: 3,
      name: 'Specialist',
    },
    {
      id: 4,
      name: 'Agent',
    },
    {
      id: 5,
      name: 'Planner',
    },
    {
      id: 6,
      name: 'Administrator',
    },
    {
      id: 8,
      name: 'Facilitator',
    },
    {
      id: 9,
      name: 'Manager',
    },
    {
      id: 10,
      name: 'Director',
    },
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.submitForm = this.fb.group({
      birth_date: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.email,
      ]),
      salary: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      group: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    const value = this.submitForm.value;
    const currentDate = new Date();
    const selectedDate = parseISO(value.birth_date);
    if (isAfter(selectedDate, currentDate)) {
      this.isFuture = true;
    } else {
      this.isFuture = false;
    }

    if (this.submitForm.valid && this.isFuture === false) {
      this.router.navigate(['/employee-list']);
    }

    this.submitForm.markAllAsTouched();
  }
}
