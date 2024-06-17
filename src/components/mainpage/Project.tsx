import { PROJECT_INFO } from '@/data/projectInfo';
import Image from 'next/image';
import React, { useState } from 'react';
import StackListItem from './StackListItem';
import useMobileScreen from '@/hooks/useMobileScreen';
import { IoHomeSharp } from 'react-icons/io5';
import { IoLogoGithub } from 'react-icons/io';
import { MdEventNote } from 'react-icons/md';
import useDarkModeStore from '@/store/darkModeStore';
import Link from 'next/link';

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isMobileScreen = useMobileScreen();
  const { isDarkMode } = useDarkModeStore();

  const handleNextProjext = () => {
    setCurrentIndex((prev) => (prev + 1) % PROJECT_INFO.length);
  };
  const currentProject = PROJECT_INFO[currentIndex];
  return (
    <div>
      {isMobileScreen ? (
        <div className='md:flex md:justify-around'>
          {PROJECT_INFO.map((info, index) => (
            <div
              key={info.name}
              className='border-black mx-auto border-[1px] max-w-[480px] rounded-t-lg overflow-hidden relative'
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}>
              <div className='relative'>
                <Image
                  src={info.thumbnail}
                  alt={info.name}
                  width={480}
                  height={150}
                />
              </div>
              <div className='px-2'>
                <h3 className='text-[36px] font-semibold my-4'>{info.name}</h3>
                <div className='my-4'>
                  <ul className='flex flex-wrap'>
                    {info.usingStack.map((stack) => (
                      <StackListItem key={stack} stack={stack} />
                    ))}
                  </ul>
                </div>
                <p className='my-4'>팀 구성: {info.personnel}</p>
                <p className='my-10'>{info.subTitle}</p>
              </div>
              {hoveredIndex === index && (
                <div
                  className={`absolute inset-0 flex justify-around items-center  bg-opacity-80 ${
                    isDarkMode ? 'bg-black' : 'bg-white'
                  }`}>
                  {info.hoverIcon.map((icon, i) => (
                    <Link
                      key={i}
                      href={icon.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:text-purple-600'>
                      {i === 0 ? (
                        <IoHomeSharp size={32} />
                      ) : i === 1 ? (
                        <IoLogoGithub size={32} />
                      ) : (
                        <MdEventNote size={32} />
                      )}
                      <span>{icon.tooltip}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className='border-black mx-auto border-[1px] max-w-[480px] rounded-t-lg overflow-hidden relative m-2'>
          <div className='relative'>
            <Image
              src={currentProject.thumbnail}
              alt={currentProject.name}
              width={480}
              height={150}
            />
          </div>
          <div className='px-2'>
            <h3 className='text-[36px] font-semibold my-4'>
              {currentProject.name}
            </h3>
            <div className='my-4'>
              <ul className='flex flex-wrap'>
                {currentProject.usingStack.map((stack) => (
                  <StackListItem key={stack} stack={stack} />
                ))}
              </ul>
            </div>
            <p className='my-4'>팀 구성: {currentProject.personnel}</p>
            <p className='my-10'>{currentProject.subTitle}</p>
          </div>

          <div className='flex justify-around items-center my-5'>
            {currentProject.hoverIcon.map((icon, i) => (
              <Link
                key={i}
                href={icon.href}
                target='_blank'
                rel='noopener noreferrer'
                className=' hover:text-purple-600'>
                {i === 0 ? (
                  <IoHomeSharp size={32} />
                ) : i === 1 ? (
                  <IoLogoGithub size={32} />
                ) : (
                  <MdEventNote size={32} />
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
      {!isMobileScreen && (
        <div className='text-center'>
          <button
            onClick={handleNextProjext}
            className='mt-4 px-4 py-2 border-black font-bold border-[1px] rounded hover:text-purple-600'>
            다음 프로젝트
          </button>
        </div>
      )}
    </div>
  );
};

export default Project;
