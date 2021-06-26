import { Component, OnInit, Input } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteId: any;

  // Constructor
  constructor(private service: NotesService, private snackBar: MatSnackBar, private interaction: InteractionService) { }

  // ngOnInit
  ngOnInit(): void {
  }

  // archiveNote
  archiveNote() {
    this.service.archiveNotes({
      "note_id": this.noteId
    }).subscribe((response) => {
      this.snackBar.open('Note archived successfully!', '', {duration: 2000});
      this.interaction.sendNewContent('Archive note');
    }, (error) => {
      this.snackBar.open('Note archived failed!', '', {duration: 2000});
    });
  }
}
