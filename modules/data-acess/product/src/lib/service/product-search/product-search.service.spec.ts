import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MockProducts } from '../../mocks/products.mocks';
import { Product } from '../../models/product.model';
import { ProductSearchService } from './product-search.service';

describe('ProductSearchService', () => {
  let service: ProductSearchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ProductSearchService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return products correctly', () => {
    // Arrange - Preparação
    const mockName = 'notebook';
    const url = `${service.API_URL}/products?name=${mockName}`;
    let result: Product[] = [];

    // Act - Ação
    service.searchByName(mockName).subscribe((products) => (result = products));

    // Assert - Verificação
    const request = httpMock.expectOne(url);
    request.flush(MockProducts);
    expect(request.request.method).toBe('GET');
    expect(result).toEqual(MockProducts);
    expect(request.request.method).not.toBe('POST');
  });

  it('should return a product by id', () => {
    // Arrange - Preparação
    const mockId = '1';
    const url = `${service.API_URL}/products/${mockId}`;
    let result!: Product;

    // Act - Ação
    service.getById(mockId).subscribe((product) => (result = product));

    // Assert - Verificação
    const request = httpMock.expectOne(url);
    request.flush(MockProducts[0]);
    expect(request.request.method).toBe('GET');
    expect(result).toEqual(MockProducts[0]);
  });
});
