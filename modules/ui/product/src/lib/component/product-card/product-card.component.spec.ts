import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardComponent } from './product-card.component';
import { MockProducts } from '@ecommerce/product-data-acess';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    component.product = MockProducts[0]; //trazendo o primeiro produto do mock
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render product card info correctly', () => {
    const card: HTMLElement = fixture.nativeElement.querySelector('mat-card');
    expect(card.textContent).toContain(component.product.name);
    expect(card.textContent).toContain(component.product.price);
  });
});
