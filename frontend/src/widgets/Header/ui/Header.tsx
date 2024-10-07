'use client';
// import LogoDark from '@/shared/assets/icons/LogoDark.svg?react';
import LogoWhite from '@/shared/assets/icons/LogoWhite.svg?react';
import ButtonMenu from '@/shared/assets/icons/buttonMenu.svg?react';
import { ButtonLink } from '@/shared/ui/ButtonLink';
import { Icon } from '@/shared/ui/Icon';
import { LanguageSwitcher } from '@/shared/ui/LanguageSwitcher';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  if (pathname === '/') {
    return (
      <div>
        <div>header</div>
      </div>
    );
  }
  return (
    <header className={`z-30 mt-6 flex w-full justify-center px-5 lg:px-20`}>
      <div className="w-full max-w-[1340px]">
        <VStack justify="between" align="center">
          <Icon Svg={LogoWhite} height={42} width={162} />
          <nav className="hidden items-center gap-9 lg:flex">
            {/* Language switcher */}
            <LanguageSwitcher languages={['УКР', 'ENG']} />
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

          <ButtonLink
            variant="arrowTextBlue"
            text="Підтримати фонд"
            to="/404"
            className="hidden lg:flex"
          />
          <button>
            <Icon Svg={ButtonMenu} height={48} width={48} />
          </button>
        </VStack>
      </div>
    </header>
  );
};

export default Header;
