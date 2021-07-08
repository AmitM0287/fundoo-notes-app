import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Declare variables
  isloggedIn: boolean;

  // Constructor
  constructor(private http: HttpClient) { 
    this.isloggedIn=false;
  }

  // Register user
  registerUser(userData: any) {
    return this.http.post(environment.baseURL.concat('register/'), userData);
  }

  // Login user
  loginUser(userData: any) {
    this.isloggedIn=true;
    return this.http.post(environment.baseURL.concat('login/'), userData);
  }

  // Check user is loggedIn or not
  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }

  // Reset password
  resetPassword(userData: any) {
    return this.http.put(environment.baseURL.concat('reset/password/'), userData);
  }

  // Forgot password
  forgotPassword(userData: any) {
    return this.http.post(environment.baseURL.concat('forgot/password/'), userData);
  }

  // Logout user
  logoutUser(): void {
    this.isloggedIn = false;
  }

}
