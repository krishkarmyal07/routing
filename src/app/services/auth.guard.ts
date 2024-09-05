import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  let user = 'user'
  if(user == 'admin'){

    console.log(user + ' ' + 'logged in')
    return true;
  }
  else{
    router.navigateByUrl('/access-denied')
    return false;
  }

};
  