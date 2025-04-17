import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

/* Aqui se declara os componentes relacionados so layout */

@NgModule({
  imports: [CommonModule, HeaderComponent], //Entrada do modulo
  exports: [HeaderComponent], //Saida final do modulo
})
export class LayoutModule {}
