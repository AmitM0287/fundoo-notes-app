import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNotesComponent } from './update-notes.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TitleComponent } from '../title/title.component';

describe('UpdateNotesComponent', () => {
  let component: UpdateNotesComponent;
  let fixture: ComponentFixture<UpdateNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNotesComponent ],
      imports: [
        MatSnackBarModule,
        MatDialogModule,
        HttpClientTestingModule,
      ],
      providers: [ 
        { provide: MAT_DIALOG_DATA, useValue: {}, }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
