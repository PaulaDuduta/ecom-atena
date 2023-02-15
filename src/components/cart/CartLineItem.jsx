import { useProduct } from '@/hooks';
import { ProductPrice } from '../catalog';
import { Loader } from '../ui';

export const CartLineItem = ({ cartProduct }) => {
  const { productId, quantity } = cartProduct;
  const { product, loading } = useProduct(productId);

  if (loading) {
    return (
      <tr>
        <td colSpan="6">
          {JSON.stringify(loading)}
          <Loader></Loader>
        </td>
      </tr>
    );
  }

  const { title, image, description, price } = product;

  return (
    <tr>
      <td>{/* add remove all button */}</td>

      <td>{/* insert image */}</td>

      <td>
        <h1>{title}</h1>
        {/* insert ratings */}
      </td>

      <td>{price}</td>

      <td>{quantity}</td>

      <td>
        <ProductPrice product={{ price: quantity * price }}></ProductPrice>
      </td>
    </tr>
  );
};
