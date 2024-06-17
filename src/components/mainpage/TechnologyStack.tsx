import {
  DATA_MANAGEMENT_STACK,
  ETC_STACK,
  FRAMEWORK_LIBRARY_STACK,
  LANGUAGES_STACK,
  STATE_STACK
} from '@/data/stack';
import useDarkModeStore from '@/store/darkModeStore';
import Image from 'next/image';
import React from 'react';

const TechnologyStack = () => {
  const { isDarkMode } = useDarkModeStore();
  return (
    <div
      className={`px-10 py-10 rounded-3xl ${
        isDarkMode ? ' bg-slate-700' : ' bg-slate-100'
      }`}>
      <h2 className='text-2xl font-bold mb-8'>기술 스택</h2>

      <div className='mb-8'>
        <h3 className='text-xl font-semibold mb-4'>언어</h3>
        <div className='grid grid-cols-2 gap-4'>
          {LANGUAGES_STACK.map((stack) => (
            <div key={stack.name} className='flex items-center space-x-2'>
              <Image src={stack.icon} alt={stack.name} width={32} height={32} />
              <span>{stack.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className='mb-8'>
        <h3 className='text-xl font-semibold mb-4'>프레임워크 및 라이브러리</h3>
        <div className='grid grid-cols-2 gap-4'>
          {FRAMEWORK_LIBRARY_STACK.map((stack) => (
            <div key={stack.name} className='flex items-center space-x-2'>
              <Image src={stack.icon} alt={stack.name} width={32} height={32} />
              <span>{stack.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className='mb-8'>
        <h3 className='text-xl font-semibold mb-4'>상태 관리</h3>
        <div className='grid grid-cols-2 gap-4'>
          {STATE_STACK.map((stack) => (
            <div key={stack.name} className='flex items-center space-x-2'>
              <Image src={stack.icon} alt={stack.name} width={32} height={32} />
              <span>{stack.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className='mb-8'>
        <h3 className='text-xl font-semibold mb-4'>
          데이터 관리 및 비동기 처리
        </h3>
        <div className='grid grid-cols-2 gap-4'>
          {DATA_MANAGEMENT_STACK.map((stack) => (
            <div key={stack.name} className='flex items-center space-x-2'>
              <Image src={stack.icon} alt={stack.name} width={32} height={32} />
              <span>{stack.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className='text-xl font-semibold mb-4'>기타 (Others)</h3>
        <div className='grid grid-cols-2 gap-4'>
          {ETC_STACK.map((stack) => (
            <div key={stack.name} className='flex items-center space-x-2'>
              <Image src={stack.icon} alt={stack.name} width={32} height={32} />
              <span>{stack.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyStack;
