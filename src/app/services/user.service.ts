import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Constructor
  constructor(private http: HttpClient) { }

  // Register user
  registerUser(userData: any) {
    return this.http.post(environment.baseURL.concat('register/'), userData);
  }

  // Login user
  loginUser(userData: any) {
    return this.http.post(environment.baseURL.concat('login/'), userData);
  }

  // Reset password
  resetPassword(userData: any) {
    return this.http.put(environment.baseURL.concat('reset/password/'), userData);
  }

  // Forgot password
  forgotPassword(userData: any) {
    return this.http.post(environment.baseURL.concat('forgot/password/'), userData);
  }

}
