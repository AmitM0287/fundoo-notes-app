import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-is-trashed',
  templateUrl: './is-trashed.component.html',
  styleUrls: ['./is-trashed.component.scss']
})
export class IsTrashedComponent implements OnInit {

  constructor(private service: NotesService, private snackBar: MatSnackBar,) { }

  ngOnInit(): void {
    this.trashNotes()
  }

  // Getting notes
  notes: any;
  notesArray: any;
  trashNotes() {
    this.service.getNotes().subscribe((response) => {
    this.notes = response;
    this.notesArray = this.notes.data.notes_list.reverse();
    // Getting archive notes successfully
    this.snackBar.open("Getting trash notes successfully.", '', {duration: 2000});
    },
    (error) => {
      console.log(error);
      this.snackBar.open("You don't have any trash notes.", '', {duration: 2000});
    });
  }

}
