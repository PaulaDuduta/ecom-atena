import Link from 'next/link';
import { CgShoppingBag } from 'react-icons/cg';

export const CartControls = () => {
  return (
    <ul className="border lg:border-l-0 border-zinc-200 transition-colors hover:bg-neutral-900 hover:text-white">
      <li>
        <Link
          href="/cart"
          title="Cart"
          className="w-20 h-20 flex justify-center items-center lg:hover:text-teal-200"
        >
          <CgShoppingBag size="28"></CgShoppingBag>
        </Link>
      </li>
    </ul>
  );
};
