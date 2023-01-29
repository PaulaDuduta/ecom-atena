import Link from 'next/link';

export const FooterNav = () => {
  return (
    <section className="flex justify-between items-start py-16">
      <nav className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-3 grow">
        <div>
          <header className="mb-4 uppercase font-semibold text-design-black">
            Los Angeles
          </header>

          <ul className="grid gap-y-2">
            <li>
              <p>
                145 Oliveshka Street, <br></br>
                Los Angeles, LA 90003
              </p>
            </li>

            <li>
              <Link href="tel:+44 987 065 901" title="Los Angeles phone number">
                +44 987 065 901
              </Link>
            </li>

            <li>
              <Link href="mailto:info@Example.com" title="Email us">
                info@Example.com
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <header className="mb-4 uppercase font-semibold text-design-black">
            San Francisco
          </header>

          <ul className="grid gap-y-2">
            <li>
              <p>
                210 Pier Street, <br></br>
                San Francisco, CA 94111
              </p>
            </li>

            <li>
              <Link
                href="tel:+44 987 065 902"
                title="San Francisco phone number"
              >
                +44 987 065 902
              </Link>
            </li>

            <li>
              <Link href="mailto:info@Example.com" title="Email us">
                info@Example.com
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <header className="mb-4 uppercase font-semibold text-design-black">
            New York
          </header>

          <ul className="grid gap-y-2">
            <li>
              <p>
                711 Snow Street, <br></br>
                New York, NY 10014
              </p>
            </li>

            <li>
              <Link href="tel:+44 987 065 903" title="New York phone number">
                +44 987 065 903
              </Link>
            </li>

            <li>
              <Link href="mailto:info@Example.com" title="Email us">
                info@Example.com
              </Link>
            </li>
          </ul>
        </div>

        <section>
          <header className="mb-4 uppercase font-semibold text-design-black">
            Follow us
          </header>

          <div className="flex gap-8 lg:gap-12">
            <ul>
              <li>
                <Link href="/" title="Follow us on Facebook">
                  Facebook
                </Link>
              </li>

              <li>
                <Link href="/" title="Follow us on Twitter">
                  Twitter
                </Link>
              </li>

              <li>
                <Link href="/" title="Follow us on Instagram">
                  Instagram
                </Link>
              </li>

              <li>
                <Link href="/" title="Follow us on LinkedIn">
                  LinkedIn
                </Link>
              </li>
            </ul>

            <ul>
              <li>
                <Link href="/" title="Follow us on Dribble">
                  Dribble
                </Link>
              </li>

              <li>
                <Link href="/" title="Follow us on Behance">
                  Behance
                </Link>
              </li>

              <li>
                <Link href="/" title="Follow us on Pinterest">
                  Pinterest
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </nav>
    </section>
  );
};
