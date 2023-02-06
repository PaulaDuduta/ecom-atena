import { CartControls } from '@/components/cart';
import { GridControls, Pagination, ProductGrid } from '@/components/catalog';
import { Layout } from '@/layouts';
import Head from 'next/head';

export default function Home() {
  // const [perRow, setItemsPerRow] = useState('4/row');

  return (
    <>
      <Head>
        <title>Home - Pixellab Ecom App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className="container px-4 mx-auto">
          {/* {products.map((product) => {
            return (
              <ProductTile key={product.id} product={product}></ProductTile>
            );
          })} */}
          {/* the above code does exact the same thing with the one from below, but it's a better alternative */}

          <header className="flex justify-end">
            <GridControls></GridControls>
            <CartControls></CartControls>
          </header>

          <section className="mt-16">
            <ProductGrid></ProductGrid>
          </section>

          <section>
            <Pagination></Pagination>
          </section>
        </main>
      </Layout>
    </>
  );
}
