import { CartControls, CartTotals } from '@/components/cart';
import { CartDisplay } from '@/components/cart/CartDisplay';
import { ContinueShopping } from '@/components/ui';
import { cartContext } from '@/contexts';
import { Layout } from '@/layouts';
import Head from 'next/head';
import { useContext } from 'react';

const CartPage = () => {
  // const { cart } = { cart: [] };
  const { cartProducts, loading } = useContext(cartContext);

  return (
    <>
      <Head>
        <title>Cart - Pixellab Ecom App</title>
      </Head>

      <Layout>
        <main className="container px-4 mx-auto">
          <header className="flex justify-between">
            <ContinueShopping></ContinueShopping>

            <div className="border-l border-zinc-200">
              <CartControls></CartControls>
            </div>
          </header>

          <section className="mt-16 grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <CartDisplay></CartDisplay>

              {/* coupon form */}
              {/* ignore Update Cart button */}
            </div>

            <aside className="col-span-4">
              <CartTotals></CartTotals>

              <div>
                {!loading ? (
                  <button
                    onClick={() => {
                      console.log(cart);
                    }}
                    type="button"
                    title="Proceed to checkout"
                  >
                    Proceed to checkout
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </aside>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default CartPage;
