import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../../models/product.model';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  //forma de gerencia com observable
  // private cartSubject$ = new BehaviorSubject<Product[]>([]);

  // cart$ = this.cartSubject$.asObservable(); // Manipula apenas pelos metodos do service

  // //Extraindo a quantidade de produtos no carrinho
  // quantity$ = this.cart$.pipe(map((cart) => cart.length));

  // // Adiciona um produto ao carrinho, garantindo que o valor atual do carrinho seja mantido
  // addToCart(product: Product) {
  //   const currentCart = this.cartSubject$.getValue(); //getvalue retorna o valor atual do subject
  //   this.cartSubject$.next([...currentCart, product]); //next atualiza o valor do subject
  // }

  //forma de gerencia com signal
  private cartSignal = signal<Product[]>([]);

  cart = this.cartSignal.asReadonly();

  quantity = computed(() => this.cart().length);

  //Adiciona um produto ao carrinho
  addToCart(product: Product) {
    this.cartSignal.update((currentCart) => [...currentCart, product]);
  }

  //Remove um produto do carrinho
  removeFromCart(product: Product) {
    this.cartSignal.update((currentCart) =>
      currentCart.filter((p) => p !== product)
    );
  }
}
