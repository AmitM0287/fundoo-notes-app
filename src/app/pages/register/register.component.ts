import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // Constructor
  constructor(private service: UserService) { 

  }

  // ngOnInit
  ngOnInit(): void { 

  }

  // Set hide to true
  hide = true;

  // Declare varibles
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  
  // Validate first name
  validateFirstName() {
    if (this.firstName.hasError('required')) {
      return 'First name is required';
    }
    return '';
  }

  // Validate first name
  validateLastName() {
    if (this.lastName.hasError('required')) {
      return 'Last name is required';
    }
    return '';
  }

  // Validate email
  validateEmail() {
    if (this.email.hasError('required')) {
      return 'Email is required';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  // Validate username
  validateUsername() {
    if (this.username.hasError('required')) {
      return 'Username is required';
    }
    return '';
  }

  // Validate password
  validatePassword() {
    if (this.password.hasError('required')) {
      return 'Password is required';
    }
    return '';
  }

  // Register
  register() {
    this.service.registerUser({
        "first_name": this.firstName.value,
        "last_name": this.lastName.value,
        "email": this.email.value,
        "username": this.username.value,
        "password": this.password.value}).subscribe((response) => {
      console.log(response);
      alert('Registration successful!');
    }, (error) => {
      console.log(error);
    });
  }

  // Login
  login() {
    
  }

}
