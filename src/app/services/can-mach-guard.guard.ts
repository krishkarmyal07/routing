import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const canMachGuardGuard: CanMatchFn = (route, segments) => {
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
