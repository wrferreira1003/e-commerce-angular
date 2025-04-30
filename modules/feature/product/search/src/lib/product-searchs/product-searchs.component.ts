import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ProductSearchService } from '@ecommerce/product-data-acess';
import { Product } from 'modules/data-acess/product/src/lib/models/product.model';
import { RouterModule } from '@angular/router';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  Observable,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'lib-product-searchs',
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    RouterModule,
  ],
  templateUrl: './product-searchs.component.html',
  styleUrl: './product-searchs.component.scss',
})
export class ProductSearchsComponent implements OnInit {
  // FormControl - serve para criar um controle de formulário
  control = new FormControl('', { nonNullable: true });
  // Observable - serve para observar o valor do input
  products$!: Observable<Product[]>;

  // Dependecy Injection - serve para injetar o que vai usar.
  constructor(private ProductSearchService: ProductSearchService) {}

  // ngOnInit - serve para executar ações quando o componente é inicializado
  ngOnInit(): void {
    // this.control.valueChanges - serve para observar o valor do input
    this.products$ = this.control.valueChanges.pipe(
      debounceTime(500), // espera 500ms para executar a função
      distinctUntilChanged(), // executa a função apenas se o valor for diferente do anterior
      filter((value) => value.length > 1),
      map((value) => value.toLowerCase()),
      switchMap((value) => this.ProductSearchService.searchByName(value))
    );
  }
}
