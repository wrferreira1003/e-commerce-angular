import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    component.badgeValue = 10;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the badge value', () => {
    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    expect(button.textContent).toContain('10');
    expect(button.getAttribute('aria-label')).toBe(
      'Carrinho de compras com 10 produtos'
    );
  });
});
