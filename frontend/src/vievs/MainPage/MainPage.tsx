import { Text } from "@/shared/ui/Text";
import React from "react";
import ConnectToday from "./ui/ConnectToday";
import HowWeWork from "./ui/HowWeWork";
import OurValues from "./ui/OurValues";
import Strategi from "./ui/Strategi";
import Donors from "./ui/Donors";
import News from "./ui/News";
import OurProjects from "./ui/OurProjects";
import FallingBricks from "./ui/FallingBricks";
import OurServices from "./ui/OurServices";
import WhoAreWe from "./ui/WhoAreWe";
import Hero from "./ui/Hero";

export const MainPage: React.FC = () => {
  return (
    <div className="bg-white mt-10 flex flex-col items-center w-full">
      <div className="w-full h-full bg-base-text_accent rounded-b-[60px] flex flex-col items-center">
        <div className="max-w-[1440px]">
          <Hero />
          <Donors />
          <WhoAreWe />
          <OurServices />
          <FallingBricks />
          <OurProjects />
          <News />
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