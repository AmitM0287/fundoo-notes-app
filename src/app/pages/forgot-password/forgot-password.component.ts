import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  // Constructor
  constructor(private service: UserService, private snackBar: MatSnackBar) { }

  // ngOnInit
  ngOnInit(): void { }

  // Set password hide to true
  hide = true;

  // Declare varibles
  username = new FormControl('', [Validators.required]);

  // Validate username
  validateUsername() {
    if (this.username.hasError('required')) {
      return 'Username is required';
    }
    return '';
  }

  // Reset from
  resetForm() {
    this.username.reset();
  }

  // Submit username
  submit() {
    this.service.forgotPassword({
      "username": this.username.value
    }).subscribe((response) => { console.log(response); 
    this.snackBar.open('Reset Password Link Successfully Sent To Your Email.', '', {duration: 4000}); },
  (error) => { console.log(error); 
    this.snackBar.open('Reset Password Link Failed To Sent To Your Email.', '', {duration: 4000}); });
    // Reset form fields
    this.resetForm()
  }

}
