import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserApi } from '../../../shared/sdk/services/index';
import { Router } from '@angular/router';

@Injectable()
export class LoginGuardService implements CanActivate{

  constructor(private userApi: UserApi, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    if (this.userApi.isAuthenticated()) return true;
    else {
      this.router.navigate(['/login']);
    }
  }
}
