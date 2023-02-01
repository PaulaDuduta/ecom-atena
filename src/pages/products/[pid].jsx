// url /product/2   /product/5 etc
import { CartControls } from '@/components/cart';
import { ProductDisplay } from '@/components/catalog/ProductDisplay';
import { Layout } from '@/layouts';
import Head from 'next/head';
import { useRouter } from 'next/router';

const ProductPage = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <>
      <Head>
        <title>Product - Pixellab Ecom App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main>
          <header className="flex justify-end container mx-auto px-4">
            <div className="border-l border-zinc-200"></div>
            <CartControls></CartControls>
          </header>

          <section className="mt-16">
            <ProductDisplay productId={pid}></ProductDisplay>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default ProductPage;
