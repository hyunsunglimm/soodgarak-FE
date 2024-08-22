import React from 'react';
import Spinner from './Spinner';

type LoadingPageProps = {
  text?: string;
};

const LoadingPage = ({ text }: LoadingPageProps) => {
  return (
    <section className='fixed left-1/2 top-0 z-30 flex h-full w-full max-w-[640px] -translate-x-1/2 flex-col items-center justify-center gap-[2rem] bg-white/60 backdrop-blur-sm'>
      {text && <p className='text-[2.4rem] font-bold text-primary'>{text}</p>}
      <Spinner color='border-primary' />
    </section>
  );
};

export default LoadingPage;
