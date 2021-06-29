import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from 'src/app/services/notes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.scss']
})
export class UpdateNotesComponent implements OnInit {
  // Constructor
  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any, private service: NotesService, private snackBar: MatSnackBar, private interaction: InteractionService) { }

  // ngOnInit
  ngOnInit(): void {
  }

  // Close
  close() {
    this.service.updateNotes({
      "id": this.dialogData.noteData.id,
      "title": this.dialogData.noteData.title,
      "description": this.dialogData.noteData.description
    }).subscribe((response) => {
      this.snackBar.open('Note updated successfully!', '', {duration: 2000});
      this.interaction.sendContent('Note updated');
    }, (error) => {
      this.snackBar.open('Note update failed!', '', {duration: 2000});
    });
  }

}
