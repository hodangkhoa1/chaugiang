import Head from 'next/head';

function Recruitment() {
  return (
    <>
      <Head>
        <title>ChauGiang | Recruitment</title>
      </Head>
      <RecruitmentPage />
    </>
  );
}

export default Recruitment;
import { getStatic } from '@/lib/getStaticProps';
import RecruitmentPage from '@/components/recruitment/recruitment';
export const getStaticProps = getStatic(['common']);
