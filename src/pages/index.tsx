import { Baloo_2 } from '@next/font/google';
import Head from 'next/head';
import HomePage from '@/components/home/home';

const inter = Baloo_2({ subsets: ['latin'] });

function Home() {
  return (
    <>
      <Head>
        <title>HOME</title>
      </Head>
      <main className={inter.className}>
        <HomePage />
      </main>
    </>
  );
}

export default Home;
import { getStatic } from '@/lib/getStaticProps';
export const getStaticProps = getStatic(['common']);
