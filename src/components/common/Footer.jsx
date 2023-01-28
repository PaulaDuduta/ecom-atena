import { Copyright } from './Copyright';

export const Footer = () => {
  return (
    <>
      <section className="container mx-auto px-4">top footer</section>

      <div className="border-t border-t-neutral-300"></div>

      <section className="container mx-auto px-4">
        <Copyright></Copyright>
      </section>
    </>
  );
};
