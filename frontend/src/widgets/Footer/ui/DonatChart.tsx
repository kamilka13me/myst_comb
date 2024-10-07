'use client';
// DonutChart.js

import Diagram from '@/shared/assets/icons/diagram.svg?react';
import { ButtonLink } from '@/shared/ui/ButtonLink';
import { Icon } from '@/shared/ui/Icon';
// import useMediaQuery from '../../../../app/portfolio/hooks/useMediaQuery';

const DonutChart = () => {
  // const isPhone = useMediaQuery('max-width:768px');
  return (
    <div className="flex gap-6">
      <div className="flex flex-row gap-3">
        <div className="flex">
          <Icon Svg={Diagram} width={140} height={140} />
        </div>
        {/* dots */}
        <div className="flex flex-col">
          {/* dot */}
          <div className="flex items-center gap-2">
            <div className="h-[13px] w-[13px] rounded-full bg-[#d633ff]" />
            <div className="font-['IBM Plex Sans'] text-sm font-medium leading-[18.90px] text-[#dcdcdc]">
              Унікальні особини
            </div>
          </div>
          {/* dot */}
          <div className="flex items-center gap-2">
            <div className="h-[13px] w-[13px] rounded-full bg-[#E7FF00]" />
            <div className="font-['IBM Plex Sans'] text-sm font-medium leading-[18.90px] text-[#dcdcdc]">
              Cultbit
            </div>
          </div>
          {/* dot */}
          <div className="flex items-center gap-2">
            <div className="h-[13px] w-[13px] rounded-full bg-[#FF7133]" />
            <div className="font-['IBM Plex Sans'] text-sm font-medium leading-[18.90px] text-[#dcdcdc]">
              Жито
            </div>
          </div>
        </div>

        <ButtonLink
          to="/404"
          variant="arrowTextBlue"
          text="Переглянути звітність"
        />
      </div>
    </div>
  );
};

export default DonutChart;
