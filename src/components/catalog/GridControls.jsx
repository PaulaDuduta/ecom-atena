import { useState } from 'react';

const buttonClass =
  'flex justify-center items-center border-l border-zinc-200 w-20 h-20 transition-colors hover:bg-neutral-900';

export const GridControls = ({ set = () => {} }) => {
  const [itemsPerRow, setItemsPerRow] = useState('4/row');

  console.log('render grid controls');

  return (
    <ul className="border border-zinc-200 b-l-0 hidden lg:flex">
      <li>
        <button
          type="button"
          title="One per row"
          className={`${buttonClass} ${
            itemsPerRow === '1/row' ? 'bg-neutral-900 text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('1/row');
            set('1/row');
          }}
        >
          1
        </button>
      </li>

      <li>
        <button
          type="button"
          title="Two per row"
          className={`${buttonClass} ${
            itemsPerRow === '2/row' ? 'bg-neutral-900 text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('2/row');
            set('2/row');
          }}
        >
          2
        </button>
      </li>

      <li>
        <button
          type="button"
          title="Four per row"
          className={`${buttonClass} ${
            itemsPerRow === '4/row' ? 'bg-neutral-900 text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('4/row');
            set('4/row');
          }}
        >
          4
        </button>
      </li>
    </ul>
  );
};
