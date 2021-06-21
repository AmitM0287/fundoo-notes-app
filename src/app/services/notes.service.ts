import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  // Constructor
  constructor(private http: HttpClient) { }

  // Send token into header
  token: any = localStorage.getItem('token')
  httpHeaders = new HttpHeaders({
    'token': this.token
  })

  // Get notes
  getNotes() {
    return this.http.get(environment.baseURL.concat('notes/'), {headers: this.httpHeaders});
  }

}
