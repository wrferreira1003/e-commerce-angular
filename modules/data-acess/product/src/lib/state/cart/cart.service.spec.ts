import { TestBed } from '@angular/core/testing';
import { MockProducts } from '../../mocks/products.mocks';
import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a product to the cart', () => {
    service.addToCart(MockProducts[0]);
    expect(service.cart().length).toBe(1);

    service.addToCart(MockProducts[1]);
    expect(service.cart().length).toBe(2);
  });

  it('should remove a product from the cart', () => {
    service.addToCart(MockProducts[0]);
    service.addToCart(MockProducts[1]);
    service.removeFromCart(MockProducts[0]);
    expect(service.cart().length).toBe(1);
  });
});
