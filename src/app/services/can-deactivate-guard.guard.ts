import { CanDeactivateFn } from '@angular/router';

export const canDeactivateGuardGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {

  const res = confirm("Are you sure you want to quit")

  if(res == true){
    return true;
  }
else{

  return false;
}
};
