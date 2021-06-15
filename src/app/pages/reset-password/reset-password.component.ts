import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  // Constructor
  constructor(private service: UserService, private snackBar: MatSnackBar) { }

  // ngOnInit
  ngOnInit(): void { }

  // Set password hide to true
  hide = true;

  // Declare varibles
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

  // Save new password
  save() {
    this.service.resetPassword({
      "username": this.username.value,
      "password": this.password.value
    }).subscribe((response) => { console.log(response); 
      this.snackBar.open('Password Reset Successful!', '', {duration: 4000}); },
    (error) => { console.log(error); 
      this.snackBar.open('Password Reset Failed!', '', {duration: 4000}); });
    // Reset form fields
    this.resetForm()
  }

}
