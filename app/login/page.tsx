import Image from 'next/image';

const LoginPage = () => {
  return (
    <section className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-20'>
      <Image
        src='/images/google-login.png'
        alt='구글 로그인'
        width={400}
        height={100}
        className='w-[40rem]'
      />
      <Image
        src='/images/kakao-login.png'
        alt='카카오 로그인'
        width={400}
        height={100}
        className='w-[40rem]'
      />
      <Image
        src='/images/naver-login.png'
        alt='네이버 로그인'
        width={400}
        height={100}
        className='w-[40rem]'
      />
    </section>
  );
};

export default LoginPage;
