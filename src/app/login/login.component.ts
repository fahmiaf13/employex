import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  submitForm!: FormGroup;
  errorMessage: string = '';
  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.submitForm = this.fb.group({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  submit() {
    const value = this.submitForm.value;
    this.submitForm.markAllAsTouched();
    if (
      value.username === 'admin123' &&
      value.password === 'admin123' &&
      this.submitForm.valid === true
    ) {
      this.router.navigate(['/employee-list']);
    }
  }
  changeValue() {
    this.isSubmitted = false;
  }
}
