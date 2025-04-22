import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { ProductSearchsComponent } from './product-searchs.component';
import { of } from 'rxjs';
import {
  MockProducts,
  ProductSearchService,
} from '@ecommerce/product-data-acess';

describe('ProductSearchsComponent', () => {
  let component: ProductSearchsComponent;
  let fixture: ComponentFixture<ProductSearchsComponent>;
  let productSearchServiceSpy: ProductSearchService; //spy para o service

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSearchsComponent],
      providers: [
        {
          provide: ProductSearchService, //quando o componente visualizar esse service, na verdade ele vai usar essa implementacao mockada
          useValue: {
            searchByName: () => of(MockProducts), //retorna um observable de produtos
          },
        },
      ],
    }).compileComponents();

    productSearchServiceSpy = TestBed.inject(ProductSearchService);
    fixture = TestBed.createComponent(ProductSearchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //teste para verificar se o debounce esta funcionando
  it('should debounce when input field is changed', fakeAsync(() => {
    jest.spyOn(productSearchServiceSpy, 'searchByName');

    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');

    input.value = 'tv';
    input.dispatchEvent(new Event('input'));

    //chama o service com o valor do input e espera 500ms para o debounce
    expect(productSearchServiceSpy.searchByName).not.toHaveBeenCalled();

    tick(500); //espera 500ms para o debounce

    //verifica se o service foi chamado com o valor do input
    expect(productSearchServiceSpy.searchByName).toHaveBeenCalledWith('tv');
  }));

  it('should search multiple times when input field is changed', fakeAsync(() => {
    jest.spyOn(productSearchServiceSpy, 'searchByName');

    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');

    input.value = 'tv';
    input.dispatchEvent(new Event('input'));

    tick(500); //espera 500ms para o debounce

    input.value = 'notebook';
    input.dispatchEvent(new Event('input'));

    tick(500); //espera 500ms para o debounce

    //verifica quantas vezes o service foi chamado
    expect(productSearchServiceSpy.searchByName).toHaveBeenCalledTimes(2);
  }));

  it('should prevent identical submissions', fakeAsync(() => {
    jest.spyOn(productSearchServiceSpy, 'searchByName');

    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');

    input.value = 'tv';
    input.dispatchEvent(new Event('input'));

    tick(500); //espera 500ms para o debounce

    input.value = 'tv';
    input.dispatchEvent(new Event('input'));

    tick(500); //espera 500ms para o debounce

    //verifica se o service nao foi chamado com o valor do input
    expect(productSearchServiceSpy.searchByName).toHaveBeenCalledTimes(1);
  }));

  it('should not call service if input is less than 1 character', fakeAsync(() => {
    jest.spyOn(productSearchServiceSpy, 'searchByName');

    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');

    //So pode chamar o servico se o input for maior que 1 caracter
    input.value = 's';
    input.dispatchEvent(new Event('input'));

    tick(500); //espera 500ms para o debounce

    //verifica se o service nao foi chamado com o valor do input
    expect(productSearchServiceSpy.searchByName).not.toHaveBeenCalled();
  }));

  it('should return products observable correctly', fakeAsync(() => {
    component.products$.subscribe((products) => {
      expect(products).toEqual(MockProducts);
    });
  }));
});
