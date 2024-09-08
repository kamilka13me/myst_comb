import { ButtonLink } from "@/shared/ui/ButtonLink";
import { Icon } from "@/shared/ui/Icon";
import { Text } from "@/shared/ui/Text";
import Arrow from "@/shared/assets/icons/ArrowInCircleBlueLeft.svg?react";

const ConnectToday = () => {
  return (
    <div className="flex justify-center  border-t-2 border-t-[#DCDCDC] mx-[156px] mb-[180px] max-w-[1128px] ">
      <div className="flex justify-between w-full  mt-10 gap-[60px] ">
        <div className="w-full">
          <Text
            Tag="h3"
            textType="Desktop/H3"
            text="Приєднуйся до спільноти вже сьогодні."
            font="sans"
            className="font-medium"
          />
          <Text
            Tag="p"
            textType="Desktop/Body"
            text="Підписуйся на нашу розсилку корисних новин."
            font="sans"
            className="text-[#474747] mt-2"
          />
        </div>
        <div className="w-full flex items-center">
          <div className="bg-[#ededed] px-6 py-2 rounded-[30px] flex justify-between items-center w-full min-h-[55px]">
            <input
              placeholder="Ваш email"
              className="bg-transparent placeholder:base/stroke_btn_act placeholder:font-normal"
            />
            <Icon Svg={Arrow} width={28} height={28} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectToday;
