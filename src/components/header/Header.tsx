'use client';
import React, { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import useDarkModeStore from '@/store/darkModeStore';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const { isDarkMode } = useDarkModeStore();
  const [activeLink, setActiveLink] = useState('sectionOne');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { id: 'sectionOne', label: '홈' },
    { id: 'sectionTwo', label: '기술 스택' },
    { id: 'sectionThree', label: '프로젝트' },
    { id: 'sectionFour', label: '경력' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`px-10 w-full fixed z-20 h-24 flex justify-center items-center ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
      }`}>
      <div className='flex w-full justify-between md:justify-around'>
        <div className='text-3xl md:text-[42px] font-extrabold'>kcg</div>
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <HiX className='text-3xl' />
            ) : (
              <HiMenu className='text-3xl' />
            )}
          </button>
        </div>
        <ul className='hidden md:flex space-x-16 text-lg'>
          {links.map((link) => (
            <li key={link.id} className='hover:text-purple-600 font-bold'>
              <a href={`#${link.id}`} onClick={() => setActiveLink(link.id)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className={`flex flex-col space-y-4 text-lg absolute top-24 left-0 w-full py-4 px-8 md:static md:flex-row md:bg-transparent md:space-y-0 md:space-x-16 md:text-base md:w-auto md:py-0 md:px-0 ${
                isDarkMode ? 'bg-slate-800' : 'bg-white'
              }`}>
              {links.map((link) => (
                <li key={link.id} className='font-bold py-3'>
                  <a
                    className='hover:text-purple-600'
                    href={`#${link.id}`}
                    onClick={() => setActiveLink(link.id)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Header;
