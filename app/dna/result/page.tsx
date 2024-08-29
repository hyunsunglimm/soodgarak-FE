import dynamic from 'next/dynamic';

const FoodDNAResult = dynamic(() => import('./components/FoodDNAResult'), { ssr: false });

const DNAResultPage = () => {
  return <FoodDNAResult />;
};

export default DNAResultPage;
