import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Product } from '@ecommerce/product-data-acess';
import { RecommendedProductsService } from '@ecommerce/product-data-acess';
import { Observable } from 'rxjs';
import { ProductCardComponent } from '@ecommerce/product-ui';

@Component({
  selector: 'lib-home',
  imports: [CommonModule, MatCardModule, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products$: Observable<Product[]>;

  constructor(private recommendedProductsService: RecommendedProductsService) {
    this.products$ = this.recommendedProductsService.getProducts();
  }
}
