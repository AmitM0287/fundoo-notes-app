import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './pages/register/register.component';
import { MaterialModule } from './material/material.module';
import { TitleComponent } from './components/title/title.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateNotesComponent } from './components/create-notes/create-notes.component';
import { IconsComponent } from './components/icons/icons.component';
import { GetNotesComponent } from './components/get-notes/get-notes.component';
import { IsTrashedComponent } from './components/is-trashed/is-trashed.component';
import { IsArchivedComponent } from './components/is-archived/is-archived.component';
import { UpdateNotesComponent } from './components/update-notes/update-notes.component';
import { AuthGurdService } from './services/auth-gurd.service';
import { InteractionService } from './services/interaction.service';
import { NotesService } from './services/notes.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    TitleComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    CreateNotesComponent,
    IconsComponent,
    GetNotesComponent,
    IsTrashedComponent,
    IsArchivedComponent,
    UpdateNotesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    AuthGurdService,
    InteractionService,
    NotesService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
