import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RecommendedProductsService } from './recommended-products.service';
import { MockProducts } from '../mocks/products.mocks';
import { Product } from '../models/product.model';

describe('RecommendedProductsService', () => {
  let service: RecommendedProductsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RecommendedProductsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return recommended products', () => {
    // Arrange - Preparação
    const url = `${service.API_URL}/products?page=1&limit=6`;
    let result: Product[] = [];

    // Act - Ação
    service.getProducts().subscribe((products) => (result = products));

    // Assert - Verificação
    const request = httpMock.expectOne(url);
    request.flush(MockProducts);
    expect(request.request.method).toBe('GET'); // Verifica se a requisição foi feita com o método GET
    expect(result).toEqual(MockProducts); // Verifica se o resultado é o esperado
    expect(request.request.method).not.toBe('POST'); // Verifica se a requisição não foi feita com o método POST
  });
});
