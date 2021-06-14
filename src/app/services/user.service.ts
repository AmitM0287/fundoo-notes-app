import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Constructor
  constructor(private http: HttpClient) { }

  // URL
  register_url = 'http://127.0.0.1:8000/user/register/';
  login_url = 'http://127.0.0.1:8000/user/login/';

  // Register user
  registerUser(userData: any) {
    return this.http.post(this.register_url, userData);
  }

  // Login user
  loginUser(userData: any) {
    return this.http.post(this.login_url, userData);
  }
}
