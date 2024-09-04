import Spinner from './Spinner';

const FillLoading = () => {
  return (
    <div className='fixed left-1/2 top-0 z-50 flex h-full w-full max-w-[640px] -translate-x-1/2 items-center justify-center bg-white/10 backdrop-blur-sm'>
      <Spinner color='border-primary' />
    </div>
  );
};

export default FillLoading;
