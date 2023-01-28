import Link from 'next/link';
import { useState } from 'react';
import { CgMenu } from 'react-icons/cg';
import { BsEggFried } from 'react-icons/bs';
import { CiFacebook, CiTwitter, CiInstagram } from 'react-icons/ci';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // const jsxVar = <span className="bg-white block w-4 h-4 rounded-full"></span>; //no use of it

  return (
    <>
      <section className="bg-neutral-900 flex lg:flex-col justify-between items-center h-full lg:py-4 z-10 relative">
        <Link href="/" className="hover:text-teal-200">
          {/* no use for anchor */}
          <BsEggFried size="32"></BsEggFried>
        </Link>

        <button
          title="Menu"
          type="button"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          className="hover:text-teal-200"
        >
          <CgMenu size="32"></CgMenu>
        </button>

        <ul className="hidden lg:block">
          <li className="mb-3 hover:text-teal-200">
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiFacebook size="28"></CiFacebook>
            </Link>
          </li>

          <li className="mb-3 hover:text-teal-200">
            <Link
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiTwitter size="28"></CiTwitter>
            </Link>
          </li>

          <li className="hover:text-teal-200">
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiInstagram size="28"></CiInstagram>
            </Link>
          </li>
        </ul>
      </section>

      <nav
        className={`absolute left-0 -top-full pl-16 lg:pb-20 flex justify-center items-center uppercase lg:text-2xl ${
          menuOpen ? 'translate-y-full' : ''
        } transform-gpu transition-transform w-screen h-screen bg-neutral-900 lg:w-screen-1/3`}
      >
        <ul>
          <li className="transition hover:text-teal-200">
            <Link href="/" title="Shop">
              Shop
            </Link>
          </li>

          <li className="transition hover:text-teal-200">
            <Link href="/" title="About">
              About
            </Link>
          </li>

          <li className="transition hover:text-teal-200">
            <Link href="/" title="Contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
