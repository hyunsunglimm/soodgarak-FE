import FridgeContent from './_components/FridgeContent';
import FridgeMenu from './_components/FridgeMenu';
import MyInfo from './_components/MyInfo';
import AddIngredients from './_components/AddIngredients';

type MyPageProps = {
  searchParams: {
    tab?: string;
  };
};

const MyPage = ({ searchParams }: MyPageProps) => {
  const tab = searchParams?.tab;

  const renderContent = () => {
    switch (tab) {
      case 'add':
        return <AddIngredients />;
      case 'select':
        return <FridgeContent tab={tab} />;
      default:
        return <FridgeContent tab={tab} />;
    }
  };

  return (
    <div className='mt-20'>
      <MyInfo />
      <div className='mt-[5.2rem]'>
        <FridgeMenu />
        <div className='mt-40'>{renderContent()}</div>
      </div>
    </div>
  );
};

export default MyPage;
