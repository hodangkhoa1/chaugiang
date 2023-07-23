import Head from 'next/head';

function WhoWeAre() {
  return (
    <>
      <Head>
        <title>ChauGiang | Who We Are</title>
      </Head>
      <WhoWeArePage />
    </>
  );
}

export default WhoWeAre;
import { getStatic } from '@/lib/getStaticProps';
import WhoWeArePage from '@/components/who-we-are/who-we-are';
export const getStaticProps = getStatic(['common', 'whoweare']);
