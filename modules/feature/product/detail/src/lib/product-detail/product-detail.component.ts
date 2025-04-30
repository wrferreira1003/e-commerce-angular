import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getParams } from './get-params';
@Component({
  selector: 'lib-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  productId$ = getParams(); //uma forma de trazer o id do produto

  @Input() productId!: string; //outra forma de trazer o id do produto da rota
}
