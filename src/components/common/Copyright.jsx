import Link from 'next/link';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

export const Copyright = () => {
  return (
    <div className="h-20 flex justify-center items-center gap-1">
      <span>
        <AiOutlineCopyrightCircle size="20"></AiOutlineCopyrightCircle>
      </span>
      <span>
        {new Date().getFullYear()}. Created by{' '}
        <Link
          href="https://www.linkedin.com/in/paula-duduta-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-teal-900"
        >
          Paula
        </Link>
        .
      </span>
    </div>
  );
};
