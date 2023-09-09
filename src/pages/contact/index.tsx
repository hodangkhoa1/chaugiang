import Head from 'next/head';

function Recruitment() {
  return (
    <>
      <Head>
        <title>ChauGiang | Contact</title>
      </Head>
      <ContactPage />
    </>
  );
}

export default Recruitment;
import { getStatic } from '@/lib/getStaticProps';
import ContactPage from '@/components/contact/contact';
export const getStaticProps = getStatic(['common']);
