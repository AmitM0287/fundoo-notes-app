import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Constructor
  constructor(private http: HttpClient) { }

  // URL
  api_url = 'http://127.0.0.1:8000/user/register/';

  // Register user
  registerUser(userData: any) {
    return this.http.post(this.api_url, userData);
  }

}
