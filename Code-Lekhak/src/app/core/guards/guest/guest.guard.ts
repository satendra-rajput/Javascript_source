import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorage } from '../../constants/constants';
import { AuthService } from '../../services/auth/auth.service';

export const guestGuard: CanActivateFn = (route, state) => {

  const _Authservice = inject(AuthService);
  const _router = inject(Router);
  let myAccessToken = sessionStorage.getItem(LocalStorage.accessToken)
  if(myAccessToken){
    _router.navigate(["/dashboard"]);
  }
  return true;
};
