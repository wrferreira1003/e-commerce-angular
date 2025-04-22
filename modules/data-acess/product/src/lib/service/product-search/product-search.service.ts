import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductSearchService {
  readonly API_URL = 'https://65009f9718c34dee0cd53786.mockapi.io';

  constructor(private http: HttpClient) {}

  // funcao para buscar produtos pelo nome
  searchByName(name: string): Observable<Product[]> {
    //Retornar um observable de produtos
    return this.http.get<Product[]>(`${this.API_URL}/products`, {
      params: {
        name,
      },
    });
  }
}
