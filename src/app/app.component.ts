import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@ecommerce/layout';
import { ProductSearchsComponent } from '@ecommerce/product-search';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@Component({
  imports: [
    RouterModule,
    HeaderComponent,
    ProductSearchsComponent,
    MatSnackBarModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ecommerce';
}
