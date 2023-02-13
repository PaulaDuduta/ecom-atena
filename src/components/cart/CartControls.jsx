import Link from 'next/link';
import { CgShoppingBag } from 'react-icons/cg';
import { CartQuantity } from '.';

export const CartControls = () => {
  return (
    <ul className="border lg:border-l-0 border-zinc-200 transition-colors hover:bg-neutral-900 hover:text-white">
      <li>
        <Link
          href="/cart"
          title="Cart"
          className="w-20 h-20 flex justify-center items-center lg:hover:text-teal-200"
        >
          <span className="relative">
            <CgShoppingBag size="28"></CgShoppingBag>
            <CartQuantity className="absolute -top-8 -right-4"></CartQuantity>
          </span>
        </Link>
      </li>
    </ul>
  );
};
