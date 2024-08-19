import FridgeContent from './_components/FridgeContent';
import FridgeMenu from './_components/FridgeMenu';
import MyInfo from './_components/MyInfo';

const MyPage = () => {
  return (
    <div className='mt-20'>
      <MyInfo />
      <div className='mt-[5.2rem]'>
        <FridgeMenu />
        <FridgeContent />
      </div>
    </div>
  );
};

export default MyPage;
