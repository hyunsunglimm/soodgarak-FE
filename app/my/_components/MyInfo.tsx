import Image from 'next/image';

const MyInfo = () => {
  return (
    <div className='relative'>
      <div className='text-center'>
        <div className='relative m-auto h-[14rem] w-[14rem] overflow-hidden rounded-28'>
          <Image src='/images/sample-user.jpg' alt='유저' fill />
        </div>
        <h4 className='mt-12 text-32 font-bold'>홍길동</h4>
        <button className='mt-8 h-[3.6rem] w-[7.2rem] rounded-20 border text-18'>수정</button>
      </div>
      <div className='absolute right-[10%] top-[-16%] flex rotate-[-5deg] items-center text-center'>
        <div className='relative m-auto h-[12rem] w-[12rem]'>
          <Image src='/images/foodDNA/MKDH.png' alt='MKDH' fill />
        </div>
        <p className='text-primary text-28 font-bold'>MKDH</p>
      </div>
    </div>
  );
};

export default MyInfo;
