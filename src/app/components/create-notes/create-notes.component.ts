import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NotesService } from 'src/app/services/notes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {
  // Constructor
  constructor(private service: NotesService, private snackBar: MatSnackBar, private interaction: InteractionService) { }

  // ngOnInit
  ngOnInit(): void { 
  }

  // Declare variables
  title = new FormControl('');
  description = new FormControl('');

  // Set isExpanded to false
  isExpanded: boolean = false;

  // toggle the value
  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  // Reset from
  resetForm() {
    this.title.reset();
    this.description.reset();
  }

  // Close expansion panel
  close() {
    this.isExpanded = !this.isExpanded;
    this.createNote();
    this.resetForm();
  }

  // Create note
  createNote() {
    this.service.createNotes({
      'title': this.title.value,
      'description': this.description.value
    }).subscribe((response) => {
      // Notes created successfully
      this.snackBar.open("Notes created successfully.", '', {duration: 2000});
      this.interaction.sendNewContent('New note');
    }, (error) => {
      // Notes creation failed
      this.snackBar.open("Notes creation failed.", '', {duration: 2000});
    });
  }

}
