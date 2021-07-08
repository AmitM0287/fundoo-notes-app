import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGurdService implements CanActivate {

  constructor(private router: Router, private service: UserService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //check condition  
    if (!this.service.isUserLoggedIn()) {
      alert('Please login first to access dasboard.');
        //redirect to login/home page etc
        this.router.navigateByUrl('login');
        //return false to cancel the navigation
        return false;
    } 
    return true;
  }

}
