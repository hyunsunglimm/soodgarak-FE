import dynamic from 'next/dynamic';

const CardSwiper = dynamic(() => import('./components/CardSwiper'), { ssr: false });

const DNAPage = () => {
  return <CardSwiper />;
};

export default DNAPage;
