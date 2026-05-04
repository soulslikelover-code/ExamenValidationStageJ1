import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authAdminGuard: CanActivateFn = () => {
  const router = inject(Router);
  if (localStorage.getItem('admin')) return true;
  router.navigate(['/admin/connexion']);
  return false;
};