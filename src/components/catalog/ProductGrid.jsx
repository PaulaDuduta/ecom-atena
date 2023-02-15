import { useProducts } from '@/hooks/useProducts';
import { UiContext } from '@/pages/_app';
import { css } from '@emotion/css';
import { useContext, useEffect, useState } from 'react';
import { ProductTile } from '.';
import { Loader } from '../ui';

export const ProductGrid = () => {
  // const {products} = props; -> another way to write the products (also, not recomanded to use it) -> the good one {products = []}
  // const [products, setProducts] = useState([]);
  const { itemsPerRow: perRow, pagination } = useContext(UiContext); //using alias itemsPerRow as perRow to avoid the conflict with the below const variable.
  const { products, loading, error } = useProducts();
  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const { perPage, page } = pagination;

  // useMemo
  const itemsPerRow = parseInt(perRow);

  useEffect(() => {
    setPaginatedProducts(
      products.slice().splice(perPage * (page - 1), perPage),
    );
  }, [products, setPaginatedProducts, page, perPage]);

  // evaluate loading
  if (loading === true) {
    return <Loader></Loader>;
  }

  if (error.length > 0) {
    return <>{error}</>;
  }

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
      {paginatedProducts.map((product) => {
        return (
          <li key={product.id}>
            <ProductTile product={product}></ProductTile>
          </li>
        );
      })}
    </ul>
  );
};
