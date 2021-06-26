import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-is-archived',
  templateUrl: './is-archived.component.html',
  styleUrls: ['./is-archived.component.scss']
})
export class IsArchivedComponent implements OnInit {
  // Constructor
  constructor(private service: NotesService, private snackBar: MatSnackBar,) { }

  // ngOnInit
  ngOnInit(): void {
    this.archiveNotes();
  }

  // Getting notes
  notes: any;
  notesArray: any;
  archiveNotes() {
    this.service.getNotes().subscribe((response) => {
    this.notes = response;
    this.notesArray = this.notes.data.notes_list.reverse();
    // Getting archive notes successfully
    this.snackBar.open("Getting archive notes successfully.", '', {duration: 2000});
    },
    (error) => {
      console.log(error);
      this.snackBar.open("You don't have any archive notes.", '', {duration: 2000});
    });
  }
 
}
