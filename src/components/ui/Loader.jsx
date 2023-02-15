import { RiLoader5Fill } from 'react-icons/ri';

export const Loader = ({ size = '48' }) => {
  return (
    <div className="container mx-auto px-4">
      <RiLoader5Fill
        size={size}
        className="animate-spin text-teal-200"
      ></RiLoader5Fill>
    </div>
  );
};
