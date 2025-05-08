import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@ecommerce/layout';
import { ProductSearchsComponent } from '@ecommerce/product-search';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CartComponent } from '@ecommerce/product-ui';
import { CartService } from '@ecommerce/product-data-acess';
@Component({
  imports: [
    RouterModule,
    HeaderComponent,
    ProductSearchsComponent,
    MatSnackBarModule,
    CartComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  cartService = inject(CartService);
}
