import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor() { }

  private interaction = new Subject<string>();
  getNotes$ = this.interaction.asObservable();

  sendNewContent(message: string){
    this.interaction.next(message);
  }

}
