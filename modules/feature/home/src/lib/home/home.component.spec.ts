import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import {
  MockProducts,
  RecommendedProductsService,
} from '@ecommerce/product-data-acess';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        {
          //quando o recommendedProductsService for injetado, use o mock
          provide: RecommendedProductsService,
          useValue: {
            getProducts: () => of(MockProducts), //retorna um observable de MockProducts
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the products', () => {
    const products: HTMLElement[] =
      fixture.nativeElement.querySelectorAll('lib-product-card');
    expect(products.length).toBe(MockProducts.length);
  });
});
