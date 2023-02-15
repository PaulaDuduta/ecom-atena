import { useAddToCart } from '@/hooks';
import { Loader } from '../ui';

export const AddToCart = ({ product }) => {
  const { title } = product;
  const { addToCart, loading } = useAddToCart();

  const onClick = () => {
    addToCart(product);
  };

  return (
    <button
      className="bg-black text-white uppercase font-medium text-sm py-3 px-6 hover:bg-amber-800 transition-colors w-40"
      type="button"
      onClick={onClick}
      title={`Add ${title} to cart`}
      disabled={loading}
    >
      {loading ? <Loader size={'20'}></Loader> : 'Add to cart'}
    </button>
  );
};
