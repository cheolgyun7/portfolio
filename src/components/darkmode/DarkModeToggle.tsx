import React from 'react';
import useDarkModeStore from '@/store/darkModeStore';
import { CiLight } from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkModeStore();

  return (
    <button className='fixed bottom-16 right-10' onClick={toggleDarkMode}>
      {isDarkMode ? <CiLight size={36} /> : <MdDarkMode size={36} />}
    </button>
  );
};

export default DarkModeToggle;
