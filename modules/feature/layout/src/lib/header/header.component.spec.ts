import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

const mockTitle = 'Ecommerce';

describe('HeaderComponent', () => {
  let component: HeaderComponent; //component é uma classe que é responsável por criar o componente e o ambiente de teste com ferramentas para testar o componente
  let fixture: ComponentFixture<HeaderComponent>; //fixture é uma classe que é responsável por criar o componente e o ambiente de teste com ferramentas para testar o componente

  //BeforeEach é uma função que é executada antes de cada teste para configurar o ambiente de teste, montando o componente e o ambiente de teste com ferramentas para testar o componente, aqui dentro entra tudo que o componente precisa para ser testado
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent); //cria o componente e o ambiente de teste com ferramentas para testar o componente
    component = fixture.componentInstance; //component é uma instancia do componente que está sendo testado
    component.title = mockTitle;
    fixture.detectChanges(); //detecta as alterações no componente
  });

  //it é uma função que é executada para verificar se o componente foi criado
  it('should create', () => {
    expect(component).toBeTruthy(); //verifica se a instancia do componente foi criada com sucesso
  });

  //Testar se temos um nome no header com o texto Ecommerce
  it('should have a name', () => {
    const header: HTMLHeadingElement =
      fixture.nativeElement.querySelector('header');
    expect(header.textContent).toBe(mockTitle);

    component.title = 'Teste';
    fixture.detectChanges(); //detecta as alterações no componente
    expect(header.textContent).toBe('Teste');
  });
});
