import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MockProducts } from '@ecommerce/product-data-acess';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'lib-product-searchs',
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  templateUrl: './product-searchs.component.html',
  styleUrl: './product-searchs.component.scss',
})
export class ProductSearchsComponent implements OnInit {
  control = new FormControl('');
  products = MockProducts;
  filteredProducts = [...this.products];

  // Inicializa o componente
  ngOnInit() {
    this.control.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => {
        this.filterProducts(value || '');
      });
  }

  // Filtra os produtos
  filterProducts(value: string) {
    const filterValue = value.toLowerCase();
    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(filterValue)
    );
  }

  // Limpa o campo de busca
  clearSearch() {
    this.control.setValue('');
    this.filteredProducts = [...this.products];
  }
}
