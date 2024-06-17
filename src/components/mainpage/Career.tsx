import { CAREER_INFO } from '@/data/career';
import React from 'react';

const Career = () => {
  return (
    <div
      className='max-w-[1280px] mx-auto h-full flex pt-10'
      style={{ height: '100vh' }}>
      <div>
        {CAREER_INFO.map((info) => (
          <div key={info.title}>
            <p className=' text-2xl md:text-3xl my-5'>{info.title}</p>
            <ul>
              {info.contents.map((content) => (
                <div
                  key={content}
                  content={content}
                  className=' text-[16px] md:text-xl my-1'>
                  - {content}
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
