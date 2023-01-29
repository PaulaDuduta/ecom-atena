import { useEffect, useState } from 'react';
import { BsChevronUp } from 'react-icons/bs';

export const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="absolute left-2/4 transform -translate-x-2/4 -translate-y-7">
      {showButton && (
        <button
          type="button"
          className="transition rounded-full border border-neutral-300 p-4 bg-neutral-100 hover:text-teal-900 hover:border-teal-900"
          onClick={scrollToTop}
        >
          <BsChevronUp size="20"></BsChevronUp>
        </button>
      )}
    </div>
  );
};
