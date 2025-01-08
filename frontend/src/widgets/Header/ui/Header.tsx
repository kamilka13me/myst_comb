'use client';
// import LogoDark from '@/shared/assets/icons/LogoDark.svg?react';
import LogoWhite from '@/shared/assets/icons/LogoWhite.svg?react';
import LogoDark from '@/shared/assets/icons/LogoDark.svg?react';
import ButtonMenu from '@/shared/assets/icons/buttonMenu.svg?react';
import menuClose from '@/shared/assets/icons/menuClose.svg?react';
import { ButtonLink } from '@/shared/ui/ButtonLink';
import { Icon } from '@/shared/ui/Icon';
import { LanguageSwitcher } from '@/shared/ui/LanguageSwitcher';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useMediaQuery from '../../../../app/portfolio/hooks/useMediaQuery';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isPhone = useMediaQuery('(max-width: 640px)');

  return (
    <div className="relative w-full">
      <header
        className={`${pathname === '/' ? 'absolute mt-[60px] px-[60px]' : ''} z-30 mt-6 flex w-full justify-center px-3 lg:px-20`}
      >
        <div className="w-full max-w-[1340px]">
          <VStack justify="between" align="center">
            <Link href="/">
              <Icon
                Svg={pathname === '/' ? LogoDark : LogoWhite}
                // Svg={pathname === '/' ? LogoWhite : LogoDark}
                height={isPhone ? 28 : 42}
                width={isPhone ? 110 : 162}
              />
            </Link>
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
              {/* <Text
              Tag="h5"
              text="Новини"
              textType="Desktop/Button-menu"
              color="base/text_dark"
              className="font-semibold"
            /> */}
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
            <button
              className="lg:hidden"
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              <Icon Svg={ButtonMenu} height={48} width={48} />
            </button>
          </VStack>
        </div>
      </header>
      {isMenuOpen && (
        <div className="absolute z-50 h-screen w-screen">
          <div
            className="overlay absolute h-screen w-screen bg-black opacity-70"
            onClick={() => setMenuOpen(!isMenuOpen)}
          ></div>
          <div
            className={`${pathname === '/' ? 'mt-[50px]' : ''} absolute mt-6 flex h-48 w-full flex-col px-2`}
          >
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="mb-4 flex w-full justify-end"
            >
              <Icon Svg={menuClose} height={48} width={48} />
            </button>
            <div className="inline-flex h-[352px] flex-col items-start justify-start gap-[84px] rounded-[20px] bg-white p-6">
              <div className="flex flex-col items-start justify-center gap-5">
                <div className="inline-flex items-center justify-start gap-0.5 rounded-[30px] bg-[#e8e8e8] px-2 py-0.5">
                  <div className="font-['IBM Plex Sans'] text-sm font-semibold leading-[17.50px] text-[#474747]">
                    УКР
                  </div>
                  <div className="relative flex h-6 w-6 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                    >
                      <path
                        d="M13 1L7 7L1 1"
                        stroke="#2C05F2"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="inline-flex h-7 items-center justify-center gap-2.5">
                  <div className="font-['IBM Plex Sans'] text-lg font-semibold leading-snug text-[#474747]">
                    Проєкти
                  </div>
                </div>
                <div className="inline-flex h-7 items-center justify-center gap-2.5 self-stretch">
                  <div className="font-['IBM Plex Sans'] text-lg font-semibold leading-snug text-[#474747]">
                    Послуги
                  </div>
                </div>
                <div className="inline-flex h-7 items-center justify-center gap-2.5 self-stretch">
                  <div className="font-['IBM Plex Sans'] text-lg font-semibold leading-snug text-[#474747]">
                    Про нас
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-center">
                <ButtonLink variant="arrowTextBlue" text="Підтримати фонд" />
              </div>
            </div>
          </div>
        </div>
        // <div className="absolute flex h-48 w-full bg-red-600">menu</div>
      )}
    </div>
  );
};

export default Header;
