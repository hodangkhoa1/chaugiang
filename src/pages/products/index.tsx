import Head from 'next/head';

function Products() {
  return (
    <>
      <Head>
        <title>ChauGiang | Products</title>
      </Head>
      <ProductsPage />
    </>
  );
}

export default Products;
import { getStatic } from '@/lib/getStaticProps';
import ProductsPage from '@/components/products/products';
export const getStaticProps = getStatic(['common', 'products']);
