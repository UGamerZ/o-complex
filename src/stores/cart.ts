import { CartItemDTO } from "@/types/apiRequest";
import { makeAutoObservable } from "mobx";

export class CartState {
  cart: CartItemDTO[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setCart(cart: CartItemDTO[]) {
    this.cart = cart;
  }

  updateCart(id: number, quantity: number, name: string, price: number) {
    this.removeItem(id);
    this.cart.push({ id, quantity, name, price });
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  removeItem(id: number) {
    this.cart = this.cart.filter((item) => item.id !== id);
  }
}
