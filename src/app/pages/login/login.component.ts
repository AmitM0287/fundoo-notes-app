import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // Constructor 
  constructor(private service: UserService, private router: Router, private snackBar: MatSnackBar) { }

  // ngOnInit
  ngOnInit(): void {

  }

  // Set hide to true
  hide = true;

  // Declare Variables
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

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

  // Reset from
  resetForm() {
    this.username.reset();
    this.password.reset();
  }

  // Login
  successMsg: any;
  errorMsg: any;
  login() {
    this.service.loginUser({
      "username": this.username.value,
      "password": this.password.value
    }).subscribe((response) => {
        this.successMsg = response;
        // Set username & token into local storage
        localStorage.setItem('username', this.successMsg.data.username);
        localStorage.setItem('token', this.successMsg.data.token);
        // Show Login successful message
        this.snackBar.open(this.successMsg.message, '', {duration: 4000}); 
        this.router.navigateByUrl('dashboard') },
      (error) => {
        this.errorMsg = error;
        this.snackBar.open(this.errorMsg.error.message, '', {duration: 4000}); });
        // Reset form fields
        this.resetForm();
  }

  // Create account
  createAccount() {
    this.router.navigateByUrl('register');
  }

  // Forgot password
  forgotPassword() {
    this.router.navigateByUrl('forgot-password');
  }

}
