export type CartDTO = {
  phone: number;
  cart: CartItemDTO[];
};

export type CartItemDTO = {
  id: number;
  quantity: number;
  name: string;
  price: number;
};
