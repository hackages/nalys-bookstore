import { AuthModule } from './../auth.module';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: AuthModule })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Promise<boolean> | Observable<boolean> {
    if (!!localStorage.getItem('usertoken')) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}