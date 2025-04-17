import { Component } from '@angular/core';

// Constructor
@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  // Variável para o botão
  MostrarTexto = true;
  // Função para o botão
  submit(event: Event) {
    // eslint-disable-next-line no-console
    console.log('submit', event);
    this.MostrarTexto = !this.MostrarTexto;
  }

  items = [
    { id: 1, name: 'Well 1' },
    { id: 2, name: 'Well 2' },
    { id: 3, name: 'Well 3' },
  ];
}

/**
 * 

 */
