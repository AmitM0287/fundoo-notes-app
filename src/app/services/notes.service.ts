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

  // Create notes
  createNotes(notesData: any) {
    return this.http.post(environment.baseURL.concat('notes/'), notesData, {headers: this.httpHeaders});
  }

  // Archive notes
  archiveNotes(noteID: any) {
    return this.http.post(environment.baseURL.concat('notes/is-archive/'), noteID);
  }
  
}
