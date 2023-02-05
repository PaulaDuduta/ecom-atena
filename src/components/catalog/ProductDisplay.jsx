import { useProduct } from '@/hooks';
import Image from 'next/legacy/image';
import { AddToCart, ProductPrice } from '.';
import { Separator } from '../ui';

export const ProductDisplay = ({ productId }) => {
  const { product, httpStatus, loading } = useProduct(productId);

  if (loading) {
    return (
      <div className="container mx-auto px-4">
        <img src="/public/Spinner.svg" alt=""></img>
      </div>
    );
  }

  if (httpStatus === 404) {
    return <div className="container mx-auto px-4">Product not found</div>;
  }

  const { title, image, description } = product;

  return (
    <article>
      <section className="grid grid-cols-2 gap-6 container px-4 mx-auto">
        <picture>
          <Image
            alt={`Image of ${title}`}
            className=""
            width="650"
            height="650"
            src={image}
            objectFit="contain"
          ></Image>
        </picture>

        <div>
          <h1
            className={`uppercase text-font-black font-medium text-2xl tracking-wider`}
          >
            {title}
          </h1>

          <div className="my-8 flex flex-col justify-between gap-8">
            <p>{description}</p>

            <div className="text-2xl text-font-black font-bold tracking-wider">
              <ProductPrice product={product}></ProductPrice>
            </div>
          </div>

          <div>
            <AddToCart product={product}></AddToCart>
          </div>
        </div>
      </section>

      {/* separator */}
      <Separator></Separator>
      <section></section>
      {/* <section> pdp tabs </section> */}
    </article>
  );
};
