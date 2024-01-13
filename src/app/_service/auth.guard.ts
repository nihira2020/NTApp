import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MasterService } from './master.service';

export const authGuard: CanActivateFn = (route, state) => {
  //logics
  let service=inject(MasterService);
  let router=inject(Router);
  if(service.haveaccess()){
    return true;
  }else{
    alert('unauthorized access');
    router.navigate(['/']);
    return false;
  }
  
};
