import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserData } from 'src/app/shared/interfaces/user-data';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Output() formData = new EventEmitter<UserData>();

  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.signupForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      termsAndConditions: [false, Validators.requiredTrue]
    });
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get termsAndConditions() {
    return this.signupForm.get('termsAndConditions');
  }

  onSignupFormSubmit() {
    if (this.signupForm.valid) {
      this.formData.emit(this.signupForm.value);
    }
  }

}
