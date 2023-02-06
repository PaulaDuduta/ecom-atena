import { CartControls, CartTotals } from '@/components/cart';
import { CartDisplay } from '@/components/cart/CartDisplay';
import { Layout } from '@/layouts';
import Head from 'next/head';

const CartPage = () => {
  const { cart } = { cart: [] };
  return (
    <>
      <Head>
        <title>Cart - Pixellab Ecom App</title>
      </Head>

      <Layout>
        <main className="container px-4 mx-auto">
          <header className="flex justify-between">
            <div>
              {/* add components/ui or common/ContinueShopping.jsx or link*/}
            </div>

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
                <button
                  onClick={() => {
                    console.log(cart);
                  }}
                  type="button"
                  title="Proceed to checkout"
                >
                  Proceed to checkout
                </button>
              </div>
            </aside>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default CartPage;
