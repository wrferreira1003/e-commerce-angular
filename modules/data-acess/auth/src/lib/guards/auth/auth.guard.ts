import { inject } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs';

// verifica se o usuario esta autenticado
export function authGuard() {
  return () => {
    const router = inject(Router);
    const email$ = inject(AuthService).email$;

    return email$.pipe(
      map((email) => (email ? router.createUrlTree(['/']) : true))
    );
  };
}
