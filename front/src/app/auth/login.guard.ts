import { inject } from '@angular/core';
import { LoginService } from './../components/auth/login.service';
import { CanActivateFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {

  let loginService = inject(LoginService);

  if(loginService.hasRole("USER") && state.url.includes("principal/carros")){
    alert("Acesso Negado");
    return false;
  }
  return true;
};
