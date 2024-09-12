"use client";
import LogoDark from "@/shared/assets/icons/LogoDark.svg?react";
import LogoWhite from "@/shared/assets/icons/LogoWhite.svg?react";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import { Icon } from "@/shared/ui/Icon";
import { LanguageSwitcher } from "@/shared/ui/LanguageSwitcher";
import { VStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const pathname = usePathname();

  return (
    <header
      className={`absolute ${pathname === "/" ? "top-[100px]" : "top-6"} z-30 w-full flex justify-center`}
    >
      <div className="max-w-[1340px] w-full">
        <VStack justify="between" align="center">
          <Icon Svg={pathname === "/" ? LogoDark : LogoWhite} height={42} width={162} />
          <nav className="flex gap-9 items-center">
            {/* Language switcher */}
            <LanguageSwitcher languages={["УКР", "ENG"]} />
            <Text
              Tag="h5"
              text="Проєкти"
              textType="Desktop/Button-menu"
              color="base/text_dark"
              className="font-semibold"
            />
            <Text
              Tag="h5"
              text="Послуги"
              textType="Desktop/Button-menu"
              color="base/text_dark"
              className="font-semibold"
            />
            <Text
              Tag="h5"
              text="Новини"
              textType="Desktop/Button-menu"
              color="base/text_dark"
              className="font-semibold"
            />
            <Text
              Tag="h5"
              text="Про нас"
              textType="Desktop/Button-menu"
              color="base/text_dark"
              className="font-semibold"
            />
          </nav>

          <ButtonLink variant="arrowTextBlue" text="Підтримати фонд" to="/404" />
        </VStack>
      </div>
    </header>
  );
};

export default Header;
