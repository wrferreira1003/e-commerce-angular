import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quantityDescription',
})
export class QuantityDescriptionPipe implements PipeTransform {
  transform(value: number): string {
    if (value === 0) {
      return 'Produto indisponível';
    }
    if (value === 1) {
      return 'Última unidade';
    }
    return `${value} unidades disponíveis`;
  }
}
