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
  login() {
    this.service.loginUser({
      "username": this.username.value,
      "password": this.password.value
    }).subscribe((response) => { console.log(response); 
      this.snackBar.open('Login Successful!', '', {duration: 4000}); },
    (error) => { console.log(error); 
      this.snackBar.open('Login Failed!', '', {duration: 4000}); });
    // Reset form fields
    this.resetForm()
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
