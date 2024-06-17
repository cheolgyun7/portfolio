'use client';
// MainPage.js
import React, { useState, useEffect } from 'react';
import { SectionsContainer, Section } from 'react-fullpage';
import useDarkModeStore from '@/store/darkModeStore';
import HomeDetail from './HomeDetail';
import TechnologyStack from './TechnologyStack';
import Career from './Career';
import Project from './Project';
import DarkModeToggle from '../darkmode/DarkModeToggle';
import useMobileScreen from '@/hooks/useMobileScreen';

const MainPage = () => {
  const { isDarkMode } = useDarkModeStore();
  const isMobileScreen = useMobileScreen();

  const options = {
    anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour'],
    navigation: isMobileScreen
  };

  return (
    <div
      className={
        isDarkMode
          ? 'dark-mode bg-gray-800 px-10 text-white'
          : 'light-mode px-10'
      }>
      <SectionsContainer {...options}>
        <div className='py-24'>
          <Section>
            <HomeDetail />
          </Section>
          <Section>
            <TechnologyStack />
          </Section>
          <Section>
            <Project />
          </Section>
          <Section>
            <Career />
          </Section>
        </div>
      </SectionsContainer>
      <DarkModeToggle /> {/* DarkModeToggle 컴포넌트 추가 */}
    </div>
  );
};

export default MainPage;
