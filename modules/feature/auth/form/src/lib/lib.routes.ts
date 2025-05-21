import { Route } from '@angular/router';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { authGuard } from '@ecommerce/auth-data-acess';
export const authFormRoutes: Route[] = [
  {
    path: '',
    component: AuthFormComponent,
    canActivate: [authGuard()],
    children: [
      {
        path: 'email',
        loadComponent: () =>
          import('./auth-form/auth-form-email/auth-form-email.component').then(
            (m) => m.AuthFormEmailComponent
          ),
      },
      {
        path: 'password',
        loadComponent: () =>
          import(
            './auth-form/auth-form-password/auth-form-password.component'
          ).then((m) => m.AuthFormPasswordComponent),
      },
      //Caso ele caia no auth vazio, redireciona para o email
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'email',
      },
      //Caso ele nao encontre nenhum path, redireciona para o email
      {
        path: '**',
        redirectTo: 'email',
      },
    ],
  },
];
