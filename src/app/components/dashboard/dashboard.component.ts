import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private service: UserService) { }

  ngOnInit(): void {
  }
  // Set isExpanded to false
  isExpanded: boolean = false;

  // Getting username from local storage
  username = localStorage.getItem('username')?.toUpperCase()

  // Sign Out
  signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.service.logoutUser();
    this.router.navigateByUrl('login');
  }

  // notes
  notes() {
    this.router.navigateByUrl('dashboard/notes');
  }

  // reminders
  reminders() {

  }

  // labels
  labels() {

  }

  // archive
  archive() {
    this.router.navigateByUrl('dashboard/archive');
  }

  // trash
  trash() {
    this.router.navigateByUrl('dashboard/trash');
  }
  
}
