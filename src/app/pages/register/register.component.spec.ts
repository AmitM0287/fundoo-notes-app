import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { TitleComponent } from 'src/app/components/title/title.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent, TitleComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatSnackBarModule,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have <h1> with "Create your Fundoo Account"', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const h1 = bannerElement.querySelector('h1')!;
    expect(h1.textContent).toEqual('Create your Fundoo Account');
  });

  it('should have <app-title> with "FundooNotes', ()=> {
    const de = fixture.debugElement.query(By.css('app-title'));
    expect(de.nativeElement.textContent).toEqual('FundooNotes');
  });
});
