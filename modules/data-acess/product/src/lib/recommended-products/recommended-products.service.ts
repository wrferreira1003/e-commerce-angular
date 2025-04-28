import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { environmentProd } from '@ecommerce/environments';
@Injectable({
  providedIn: 'root',
})
export class RecommendedProductsService {
  readonly API_URL = environmentProd.apiUrl;

  constructor(private http: HttpClient) {}

  // funcao para buscar produtos pelo nome
  getProducts(): Observable<Product[]> {
    //Retornar um observable de produtos
    return this.http.get<Product[]>(`${this.API_URL}/products`, {
      params: {
        page: '1',
        limit: '6',
      },
    });
  }
}
