import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InteractionService } from 'src/app/services/interaction.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';

@Component({
  selector: 'app-get-notes',
  templateUrl: './get-notes.component.html',
  styleUrls: ['./get-notes.component.scss']
})
export class GetNotesComponent implements OnInit {
  // NoteID
  noteId: any;

  // Constructor
  constructor(private service: NotesService, private snackBar: MatSnackBar, private interaction: InteractionService, private dialog: MatDialog) { }

  // ngOnInit
  ngOnInit(): void {
    this.getNotes();
    this.interaction.createNote$.subscribe(() => {
      this.getNotes();
    });
    this.interaction.removeNote$.subscribe(() => {
      this.getNotes();
    })
  }

  // Getting notes
  notes: any;
  notesArray: any;
  getNotes() {
    this.service.getNotes().subscribe((response) => {
      this.notes = response;
      this.notesArray = this.notes.data.notes_list.reverse();
      // Getting all notes successfully
      // this.snackBar.open("Getting all notes successfully.", '', {duration: 2000});
    },
    (error) => {
      console.log(error);
      this.snackBar.open("You don't have any notes.", '', {duration: 2000});
    });
  }

  // Get note id
  getNoteId(id: string) {
    this.noteId = id;
  }

  // Update note
  updateNotes(noteData: any) {
    this.dialog.open(UpdateNotesComponent, {
      data: { noteData }
    });
  }

}
