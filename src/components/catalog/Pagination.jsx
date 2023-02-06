import { useProducts } from '@/hooks';
import { UiContext } from '@/pages/_app';
import { useContext, useEffect } from 'react';

export const Pagination = () => {
  const { pagination, setPagination } = useContext(UiContext);
  const { products } = useProducts();

  useEffect(() => {
    // cate produse am in products?
    setPagination({
      perPage: pagination.perPage,
      page: pagination.page,
      total: products.length,
    });
  }, [pagination.perPage, pagination.page, setPagination, products]);

  const pageCount = Math.ceil(pagination.total / pagination.perPage);

  return (
    <ul className="flex gap-2">
      {Array(pageCount)
        .fill('_')
        .map((_, index) => {
          const i = index + 1;

          return (
            <li key={index}>
              <button
                className={`border p-2 border-neutral-500 ${
                  pagination.page === i ? 'bg-black text-white' : ''
                }`}
                type="button"
                title={`Page ${i}`}
                onClick={() => {
                  setPagination({
                    ...pagination,
                    page: i,
                  });
                }}
              >
                {i}
              </button>
            </li>
          );
        })}
    </ul>
  );
};
