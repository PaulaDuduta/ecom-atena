import { useCart } from '@/hooks';
import { createContext } from 'react';

export const cartContext = createContext();

export const CartContext = ({ children }) => {
  const { cartProducts, loading, cartId, userId, setCartProducts } = useCart(2);

  return (
    <cartContext.Provider
      value={{ cartProducts, loading, cartId, userId, setCartProducts }}
    >
      {children}
    </cartContext.Provider>
  );
};
