import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs';
import { LoginService } from '../services/login.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

  const loginService = inject(LoginService);

  return loginService.currentToken$.pipe(
    map(token => {
      if (token) {
        return true;
      }
      else {
        console.log('You can\'t go there');

        return false;
      }
    })
  )
};
