import { CanActivateChildFn } from '@angular/router';

export const authChildGuard: CanActivateChildFn = (childRoute, state) => {

  let user = "user";

  if(user == 'admin'){
  return true;
  }
  else{
       alert('You do not have access to this page')
       return false;
  }
};
