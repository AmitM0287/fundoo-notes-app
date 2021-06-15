import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Constructor
  constructor(private http: HttpClient) { }

  // URL
  registerURL = 'http://127.0.0.1:8000/user/register/';
  loginURL = 'http://127.0.0.1:8000/user/login/';
  resetPasswordURL = 'http://127.0.0.1:8000/user/reset/password/';
  forgotPasswordURL = 'http://127.0.0.1:8000/user/forgot/password/';

  // Register user
  registerUser(userData: any) {
    return this.http.post(this.registerURL, userData);
  }

  // Login user
  loginUser(userData: any) {
    return this.http.post(this.loginURL, userData);
  }

  // Reset password
  resetPassword(userData: any) {
    return this.http.put(this.resetPasswordURL, userData);
  }

  // Forgot password
  forgotPassword(userData: any) {
    return this.http.post(this.forgotPasswordURL, userData);
  }

}
