import { UiContext } from '@/pages/_app';
import { useContext } from 'react';
import { TbSquare1, TbSquare2, TbSquare4 } from 'react-icons/tb';

const buttonClass =
  'flex justify-center items-center border-l border-zinc-200 w-20 h-20 transition-colors hover:bg-neutral-900 lg:hover:text-teal-200';

export const GridControls = () => {
  // const [itemsPerRow, setItemsPerRow] = useState('4/row');
  // useEffect(() => {
  //   set(itemsPerRow);
  // }, [itemsPerRow, set]);
  const { itemsPerRow, setItemsPerRow } = useContext(UiContext);

  return (
    <ul className="border border-zinc-200 b-l-0 hidden lg:flex">
      <li>
        <button
          type="button"
          title="One per row"
          className={`
          ${buttonClass} ${
            itemsPerRow === '1/row' ? 'bg-neutral-900 text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('1/row');
          }}
        >
          <TbSquare1 size="28"></TbSquare1>
        </button>
      </li>

      <li>
        <button
          type="button"
          title="Two per row"
          className={`
          ${buttonClass} ${
            itemsPerRow === '2/row' ? 'bg-neutral-900 text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('2/row');
          }}
        >
          <TbSquare2 size="28"></TbSquare2>
        </button>
      </li>

      <li>
        <button
          type="button"
          title="Four per row"
          className={`
          ${buttonClass} ${
            itemsPerRow === '4/row' ? 'bg-neutral-900 text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('4/row');
          }}
        >
          <TbSquare4 size="28"></TbSquare4>
        </button>
      </li>
    </ul>
  );
};
