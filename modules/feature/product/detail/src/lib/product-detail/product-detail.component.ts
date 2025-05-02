import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getParams } from './get-params';
import { ProductSearchService } from '@ecommerce/product-data-acess';

import { switchMap } from 'rxjs';
@Component({
  selector: 'lib-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  productService = inject(ProductSearchService);

  product$ = getParams().pipe(
    switchMap((id) => this.productService.getById(id))
  );
}
