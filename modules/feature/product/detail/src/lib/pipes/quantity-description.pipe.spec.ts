import { QuantityDescriptionPipe } from './quantity-description.pipe';

describe('QuantityDescriptionPipe', () => {
  it('create an instance', () => {
    const pipe = new QuantityDescriptionPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return "Produto indisponível" if the quantity is 0', () => {
    const pipe = new QuantityDescriptionPipe();
    expect(pipe.transform(0)).toBe('Produto indisponível');
  });

  it('should return "Última unidade" if the quantity is 1', () => {
    const pipe = new QuantityDescriptionPipe();
    expect(pipe.transform(1)).toBe('Última unidade');
  });

  it('should return "10 unidades disponíveis" if the quantity is 10', () => {
    const pipe = new QuantityDescriptionPipe();
    expect(pipe.transform(10)).toBe('10 unidades disponíveis');
  });
});
