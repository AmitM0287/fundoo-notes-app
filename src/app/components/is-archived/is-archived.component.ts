import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-is-archived',
  templateUrl: './is-archived.component.html',
  styleUrls: ['./is-archived.component.scss']
})
export class IsArchivedComponent implements OnInit {
  // Constructor
  constructor(private service: NotesService, private snackBar: MatSnackBar, private interaction: InteractionService) { }

  // ngOnInit
  ngOnInit(): void {
    this.archiveNotes();
    this.interaction.createNote$.subscribe(() => {
      this.archiveNotes();
    });
    this.interaction.removeNote$.subscribe(() => {
      this.archiveNotes();
    });
  }

  // Getting notes
  notes: any;
  notesArray: any;
  archiveNotes() {
    this.service.getNotes().subscribe((response) => {
    this.notes = response;
    this.notesArray = this.notes.data.notes_list.reverse();
    },
    (error) => {
      console.log(error);
      this.snackBar.open("You don't have any archive notes.", '', {duration: 2000});
    });
  }

  // Get note id
  noteId: any;
  getNoteId(noteId: any) {
    this.noteId = noteId;
  }

  // unArchiveNote
  unArchiveNote() {
    this.service.unArchiveNotes({
      "note_id": this.noteId
    }).subscribe((response) => {
      this.snackBar.open('Note UnArchived successfully!', '', {duration: 2000});
      this.interaction.removeContent('unArchive note');
    }, (error) => {
      this.snackBar.open('Note UnArchived failed!', '', {duration: 2000});
    });
  }

  // trashArchiveNote
  trashArchiveNote() {
    this.service.trashNotes({
      "note_id": this.noteId
    }).subscribe((response) => {
      this.snackBar.open('Note trashed successfully!', '', {duration: 2000});
      this.interaction.removeContent('Trash note');
    }, (error) => {
      this.snackBar.open('Note trashed failed!', '', {duration: 2000});
    });
  }
 
}
