import useDarkModeStore from '@/store/darkModeStore';
import React from 'react';

type StackListItemProps = {
  stack: string;
};

const StackListItem: React.FC<StackListItemProps> = ({ stack }) => {
  const { isDarkMode } = useDarkModeStore();
  return (
    <li
      className={`px-2 py-1 mr-2 my-1 rounded-lg ${
        isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'
      }`}>
      {stack}
    </li>
  );
};

export default StackListItem;
