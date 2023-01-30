import { useProducts } from '@/hooks/useProducts';
import { UiContext } from '@/pages/_app';
import { css } from '@emotion/css';
import { useContext } from 'react';
import { ProductTile } from '.';

export const ProductGrid = () => {
  // const {products} = props; -> another way to write the products (also, not recomanded to use it) -> the good one {products = []}
  // const [products, setProducts] = useState([]);
  const { itemsPerRow: perRow } = useContext(UiContext); //using alias itemsPerRow as perRow to avoid the conflict with the below const variable.
  const { products, loading } = useProducts();

  // useMemo
  const itemsPerRow = parseInt(perRow);

  // evaluate loading
  if (loading === true) {
    return <>...loading</>;
  }

  // if (error.length > 0) {
  //   return <>{error}</>;
  // }

  if (products.length < 1) {
    return <>There are no products</>;
  }

  const gridCss = css`
    display: grid;
    row-gap: 32px;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(${itemsPerRow}, 1fr);
      column-gap: 32px;
    }
  `;

  return (
    <ul className={gridCss}>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <ProductTile product={product}></ProductTile>
          </li>
        );
      })}
    </ul>
  );
};
