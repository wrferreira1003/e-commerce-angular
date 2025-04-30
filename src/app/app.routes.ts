import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '', //Rota padrão
    pathMatch: 'full', //Redireciona para a rota home
    redirectTo: 'home', //Redireciona para a rota home
  },
  {
    path: 'home', //Rota home
    //Lazy loading com o loadComponent
    loadChildren: () => import('@ecommerce/home').then((m) => m.homeRoutes),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('@ecommerce/product-detail').then((m) => m.productDetailRoutes),
  },
];
