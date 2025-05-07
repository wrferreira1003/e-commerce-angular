import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { inject } from '@angular/core';

export const httpErrorsInterceptor: HttpInterceptorFn = (req, next) => {
  const snackBar = inject(MatSnackBar);

  const clonedRequest = req.clone({
    setHeaders: {
      'Content-Type': 'application/json',
      'x-api-key': '1234567890',
    },
  });
  return next(clonedRequest).pipe(
    catchError((error) => {
      snackBar.open(error.message, 'Close', {
        duration: 5000,
      });
      return throwError(() => error); //passa o erro para frente
    })
  );
};
