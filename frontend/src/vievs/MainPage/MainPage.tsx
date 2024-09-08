import { Text } from "@/shared/ui/Text";
import React from "react";
import ConnectToday from "./ui/ConnectToday";
import HowWeWork from "./ui/HowWeWork";
import OurValues from "./ui/OurValues";
import Strategi from "./ui/Strategi";

export const MainPage: React.FC = () => {
  return (
    <div className="bg-white mt-10">
      <Strategi />
      <OurValues />
      <HowWeWork />
      <ConnectToday />
    </div>
  );
};
