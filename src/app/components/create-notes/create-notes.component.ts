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
  successMsg: any;
  errorMsg: any;
  createNote() {
    this.service.createNotes({
      'title': this.title.value,
      'description': this.description.value
    }).subscribe((response) => {
      this.successMsg = response;
      console.log(this.successMsg);
      // Notes created successfully
      this.snackBar.open("Notes created successfully.", '', {duration: 2000});
      this.interaction.sendContent('Created note.');
    }, (error) => {
      this.errorMsg = error;
      if (this.errorMsg.error.message.title == 'Ensure this field has at least 4 characters.' || this.errorMsg.error.message.title == 'This field may not be null.' || this.errorMsg.error.message.title == 'This field may not be blank.') {
        this.snackBar.open(this.errorMsg.error.message.title, '', {duration: 2000});

      } else if( this.errorMsg.error.message.description == 'Ensure this field has at least 4 characters.' || this.errorMsg.error.message.description == 'This field may not be null.' || this.errorMsg.error.message.description == 'This field may not be blank.') {
        this.snackBar.open(this.errorMsg.error.message.description, '', {duration: 2000});

      } else {
        this.snackBar.open(this.errorMsg.error.message, '', {duration: 2000});
      }
      
    });
  }

}
