import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordComponent } from './forgot-password.component';
import { TitleComponent } from 'src/app/components/title/title.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPasswordComponent, TitleComponent ],
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have <h1> with "Forgot your Fundoo Account password"', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const h1 = bannerElement.querySelector('h1')!;
    expect(h1.textContent).toEqual('Forgot your Fundoo Account password');
  });

  it('should have <app-title> with "FundooNotes', ()=> {
    const de = fixture.debugElement.query(By.css('app-title'));
    expect(de.nativeElement.textContent).toEqual('FundooNotes');
  });
});
