import { cartContext } from '@/contexts';
import { useContext } from 'react';
import { CartLineItem } from '.';
import { Loader } from '../ui';

export const CartDisplay = () => {
  const { cartProducts, loading } = useContext(cartContext);

  if (loading === true) {
    return <Loader></Loader>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>

      <tbody>
        {cartProducts.map((cartProduct) => {
          return (
            <CartLineItem
              cartProduct={cartProduct}
              key={cartProduct.productId}
            ></CartLineItem>
          );
        })}
      </tbody>
    </table>
  );
};
