import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@ecommerce/layout';
import { ProductSearchsComponent } from '@ecommerce/product-search';
@Component({
  imports: [RouterModule, HeaderComponent, ProductSearchsComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ecommerce';
}
