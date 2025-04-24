import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const homeRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,

    // Exemplo apenas que podemos ter um lazy loading para a rota filha do home.
    // children: [
    // {
    //     path: 'home', //Rota home
    //     //Lazy loading com o loadComponent
    //     loadChildren: () =>
    //     import('@ecommerce/product').then((m) => m.productRoutes),
    // },
    // ],
  },
];
