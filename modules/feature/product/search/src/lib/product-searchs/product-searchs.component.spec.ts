import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductSearchsComponent } from './product-searchs.component';
describe('ProductSearchsComponent', () => {
  let component: ProductSearchsComponent;
  let fixture: ComponentFixture<ProductSearchsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSearchsComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductSearchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
