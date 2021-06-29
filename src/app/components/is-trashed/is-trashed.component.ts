import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-is-trashed',
  templateUrl: './is-trashed.component.html',
  styleUrls: ['./is-trashed.component.scss']
})
export class IsTrashedComponent implements OnInit {

  constructor(private service: NotesService, private snackBar: MatSnackBar, private interaction: InteractionService) { }

  ngOnInit(): void {
    this.trashNotes();
    this.interaction.removeNote$.subscribe(() => {
      this.trashNotes();
    });
    this.interaction.deleteNote$.subscribe(() => {
      this.trashNotes();
    });
  }

  // Getting notes
  notes: any;
  notesArray: any;
  trashNotes() {
    this.service.getNotes().subscribe((response) => {
    this.notes = response;
    this.notesArray = this.notes.data.notes_list.reverse();
    // Getting archive notes successfully
    // this.snackBar.open("Getting trash notes successfully.", '', {duration: 2000});
    },
    (error) => {
      console.log(error);
      this.snackBar.open("You don't have any trash notes.", '', {duration: 2000});
    });
  }

  // Get note id
  noteId: any;
  getNoteId(noteId: any) {
    this.noteId = noteId;
  }

  // Restore Note
  restoreNote() {
    this.service.restoreNotes({
      "note_id": this.noteId
    }).subscribe((response) => {
      this.snackBar.open('Note restored successfully!', '', {duration: 2000});
      this.interaction.removeContent('Restore note');
    }, (error) => {
      this.snackBar.open('Note restored failed!', '', {duration: 2000});
    });
  }

  // Delete Note
  deleteNote() {
    this.service.deleteNotes({
      "note_id": this.noteId
    }).subscribe((response) => {
      this.snackBar.open('Note restored successfully!', '', {duration: 2000});
      this.interaction.deleteContent('Delete note');
    }, (error) => {
      this.snackBar.open('Note deletion failed!', '', {duration: 2000});
    });
  }

}
