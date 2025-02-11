'use client';
import React from 'react';
import ConnectToday from './ui/ConnectToday';
import HowWeWork from './ui/HowWeWork';
import OurValues from './ui/OurValues';
import Strategi from './ui/Strategi';
import Donors from './ui/Donors';
// import News from './ui/News';
import OurProjects from './ui/OurProjects/OurProjects';
import FallingBricks from './ui/FallingBricks';
import OurServices from './ui/OurServices';
import WhoAreWe from './ui/WhoAreWe';
import Hero from './ui/Hero';
import useMediaQuery from '../../../app/portfolio/hooks/useMediaQuery';
import FallingBricksMobile from './ui/FallingBricksMobile';

export const MainPage: React.FC = () => {
  const isPhone = useMediaQuery('(max-width: 1440px)');

  return (
    <div className="flex w-full flex-col items-center bg-white">
      <div className="flex h-full w-full flex-col items-center rounded-b-[60px] bg-base-text_accent pb-[160px]">
        <div className="max-w-[1440px]">
          <Hero />
          <Donors />
          <WhoAreWe />
          <OurServices />
          {isPhone ? <FallingBricksMobile /> : <FallingBricks />}
          <OurProjects />
          {/* <News /> */}
        </div>
      </div>
      <div className="max-w-[1440px]">
        <Strategi />
        <OurValues />
        <HowWeWork />
        <ConnectToday />
      </div>
    </div>
  );
};
