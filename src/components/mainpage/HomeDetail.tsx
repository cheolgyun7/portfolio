import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import useMobileScreen from '@/hooks/useMobileScreen';

const HomeDetail = () => {
  const isMobileScreen = useMobileScreen();

  return (
    <div className='flex flex-col md:flex-row w-full h-full justify-center items-center'>
      <motion.div
        className='font-sans text-[24px] md:text-[28px] lg:text-[36px] w-full md:w-1/2 min-w-[300px] md:min-w-[500px] text-center md:text-left mb-8 md:mb-0'
        animate={{ x: isMobileScreen ? 50 : 0 }}
        transition={{ type: 'spring' }}>
        안녕하세요👍 <br />{' '}
        <TypeAnimation
          sequence={['프론트엔드 개발자🖥', 1500, '성장하는 개발자💡', 1500]}
          preRenderFirstString={true}
          wrapper={'span'}
          cursor={true}
          repeat={Infinity}
          style={{ width: '7em' }}
        />
        <br />
        김철균 입니다
      </motion.div>
      <Image
        src={'/profile.jpg'}
        className='rounded-3xl'
        alt='profile'
        width={250}
        height={250}
      />
    </div>
  );
};

export default HomeDetail;
