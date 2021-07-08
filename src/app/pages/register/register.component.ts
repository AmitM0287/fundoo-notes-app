import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // Constructor
  constructor(private service: UserService, private router: Router, private snackBar: MatSnackBar) { }

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

  // Reset form fields
  resetForm() {
    this.firstName.reset();
    this.lastName.reset();
    this.email.reset();
    this.username.reset();
    this.password.reset();
  }

  // Register
  successMsg: any;
  errorMsg: any;
  register() {
    this.service.registerUser({
        "first_name": this.firstName.value,
        "last_name": this.lastName.value,
        "email": this.email.value,
        "username": this.username.value,
        "password": this.password.value
      }).subscribe((response) => {
        this.successMsg = response;
        this.snackBar.open(this.successMsg.message, '', {duration: 4000});
        this.login(); }, 
      (error) => { 
        this.errorMsg = error;
        this.snackBar.open(this.errorMsg.error.message, '', {duration: 4000}); });
      // Reset form fields
      this.resetForm();
  }

  // Login
  login() {
    this.router.navigateByUrl('login');
  }

}
