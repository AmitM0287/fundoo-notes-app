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
  archiveNotes(noteId: any) {
    return this.http.post(environment.baseURL.concat('notes/is-archive/'), noteId);
  }

  // unArchive notes
  unArchiveNotes(noteId: any) {
    return this.http.post(environment.baseURL.concat('notes/is-archive/'), noteId);
  }
  
  // Trash notes
  trashNotes(noteId: any) {
    return this.http.post(environment.baseURL.concat('notes/is-trash/'), noteId);
  }
  
  // Restore notes
  restoreNotes(noteId: any) {
    return this.http.post(environment.baseURL.concat('notes/is-trash/'), noteId);
  }

  // Delete notes
  deleteNotes(noteId: any) {
    return this.http.delete(environment.baseURL.concat('notes/'), noteId);
  }
  
  // Update notes
  updateNotes(notedata: any) {
    return this.http.put(environment.baseURL.concat('notes/'), notedata);
  }
  
}
