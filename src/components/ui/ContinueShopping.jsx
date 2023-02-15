import Link from 'next/link';
import { IoArrowUndoOutline } from 'react-icons/io5';

export const ContinueShopping = () => {
  return (
    <div className="w-56 h-20 border border-neutral-300 flex items-center justify-around text-font-black hover:bg-neutral-900 hover:text-teal-300">
      <IoArrowUndoOutline size="28"></IoArrowUndoOutline>

      <Link href="/">Continue shopping</Link>
    </div>
  );
};
