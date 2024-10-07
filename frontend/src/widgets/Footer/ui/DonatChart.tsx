"use client";
// DonutChart.js

import Diagram from "@/shared/assets/icons/diagram.svg?react";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import { Icon } from "@/shared/ui/Icon";
import useMediaQuery from "../../../../app/portfolio/hooks/useMediaQuery";

const DonutChart = () => {
  const isPhone = useMediaQuery("max-width:768px");
  return (
    <div className="flex gap-6 ">
      <div className="flex flex-row gap-3">
        <div className="flex">
          <Icon Svg={Diagram} width={140} height={140} />
        </div>
        {/* dots */}
        <div className="flex flex-col">
          {/* dot */}
          <div className="flex items-center gap-2 ">
            <div className="w-[13px] h-[13px] bg-[#d633ff] rounded-full" />
            <div className="text-[#dcdcdc] text-sm font-medium font-['IBM Plex Sans'] leading-[18.90px]">
              Унікальні особини
            </div>
          </div>
          {/* dot */}
          <div className="flex items-center gap-2">
            <div className="w-[13px] h-[13px] bg-[#E7FF00] rounded-full" />
            <div className="text-[#dcdcdc] text-sm font-medium font-['IBM Plex Sans'] leading-[18.90px]">
              Cultbit
            </div>
          </div>
          {/* dot */}
          <div className="flex items-center gap-2">
            <div className="w-[13px] h-[13px] bg-[#FF7133] rounded-full" />
            <div className="text-[#dcdcdc] text-sm font-medium font-['IBM Plex Sans'] leading-[18.90px]">
              Жито
            </div>
          </div>
        </div>

        <ButtonLink to="/404" variant="arrowTextBlue" text="Переглянути звітність" />
      </div>
    </div>
  );
};

export default DonutChart;
