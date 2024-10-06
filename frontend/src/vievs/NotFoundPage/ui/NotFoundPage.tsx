import { Text } from "@/shared/ui/Text";
import React from "react";

export const NotFoundPage: React.FC = () => {
  return (
    <div className="w-full h-full bg-base-text_accent absolute z-30 flex flex-col gap-11 items-center justify-center">
          <Text
            Tag="h1"
            textType="Desktop/title-l"
            text='404'
            font="sans"
            align="center"
            color="base/text"
            className="font-normal text-2xl md:text-7xl "
          />

          <Text
            Tag="p"
            textType="Desktop/H3"
            text='Ця сторінка в розробці'
            font="sans"
            align="center"
            color="base/BG_block"
            className="font-normal text-2xl md:text-4xl "
          />
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};
