// url /product/2   /product/5 etc
import { CartControls } from '@/components/cart';
import { ProductDisplay } from '@/components/catalog/ProductDisplay';
import { RelatedProducts } from '@/components/catalog/RelatedProducts';
import { ContinueShopping } from '@/components/ui';
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
          <header className="flex justify-between container mx-auto px-4">
            <div>
              <ContinueShopping></ContinueShopping>
            </div>

            <div className="border-l border-zinc-200">
              <CartControls></CartControls>
            </div>
          </header>

          <section className="mt-16">
            <ProductDisplay productId={pid}></ProductDisplay>
          </section>

          <section>
            <RelatedProducts></RelatedProducts>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default ProductPage;
