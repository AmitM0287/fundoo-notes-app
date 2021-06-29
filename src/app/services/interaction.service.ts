import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  // Constructor
  constructor() { }

  // Create notes interaction
  private interactionCreateNote = new Subject<string>();
  createNote$ = this.interactionCreateNote.asObservable();

  // Remove notes interaction
  private interactionRemoveNote = new Subject<string>();
  removeNote$ = this.interactionRemoveNote.asObservable();

  // Delete notes interaction
  private interactionDeleteNote = new Subject<string>();
  deleteNote$ = this.interactionDeleteNote.asObservable();

  // send content
  sendContent(message: string){
    this.interactionCreateNote.next(message);
  }

  // remove content
  removeContent(message: string){
    this.interactionRemoveNote.next(message);
  }

  // delete content
  deleteContent(message: string){
    this.interactionDeleteNote.next(message);
  }
  
}
