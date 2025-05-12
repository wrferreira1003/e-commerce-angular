import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getParams } from './get-params';
import {
  ProductSearchService,
  CartService,
} from '@ecommerce/product-data-acess';
import { ProductCardComponent } from '@ecommerce/product-ui';
import { switchMap } from 'rxjs';
import { QuantityDescriptionPipe } from '../pipes/quantity-description.pipe';

@Component({
  selector: 'lib-product-detail',
  imports: [CommonModule, ProductCardComponent, QuantityDescriptionPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  productService = inject(ProductSearchService);
  cartService = inject(CartService);

  // Observable - serve para observar o valor do input
  product$ = getParams().pipe(
    switchMap((id) => this.productService.getById(id))
  );
}
