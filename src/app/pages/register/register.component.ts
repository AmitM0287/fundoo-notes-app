import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  // Declare varibles
  firstName = new FormControl('');
  lastName = new FormControl('');
  email = new FormControl('', [Validators.required, Validators.email]);
  username = new FormControl('');
  password = new FormControl('');
  confirm = new FormControl('');
  
  // Validate email
  validateEmail() {
    if (this.email.hasError('required')) {
      return 'Email is required';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  // Register
  register() {
    console.log(this.firstName.value)
  }

  // Login
  login() {
    console.log(this.confirm.value)
  }

}
