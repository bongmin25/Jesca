// Interfaces de AddToCartButton
export interface AddToCartButtonProps {
  id: number;
  title: string;
  image: string;
  price: number;
}

// Interfaces de CartContext
export interface CartItem {
  id: number;
  title: string;
  image: string;
  price: number;
  size: string;
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}

// Interface de Card
export interface Card {
  id: number;
  title: string;
  image: string;
  price: string;
}
