import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);


  if (authService.usuario?.role === 'ADMIN') {
    return true;
  }

  alert('Necesitas permisos de administrador para acceder a esta sección');
  router.navigate(['/auth/login']);
  return false;

  
};