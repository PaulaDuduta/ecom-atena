import { BackToTop } from './Footer/BackToTop';
import { Copyright } from './Footer/Copyright';
import { FooterNav } from './Footer/FooterNav';

export const Footer = () => {
  return (
    <>
      <section className="container mx-auto px-4">
        <FooterNav></FooterNav>
      </section>

      <div className="border-t border-t-neutral-300">
        <div className="relative">
          <BackToTop></BackToTop>
        </div>
      </div>

      <section className="container mx-auto px-4">
        <Copyright></Copyright>
      </section>
    </>
  );
};
