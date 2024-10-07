'use client';

import React, { useState } from 'react';

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

interface LanguageSwitcherProps {
  languages: string[];
}

const Svg: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <svg
      className={`ml-2 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
      fill="none"
      stroke="#2C05F2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
};

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ languages }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    languages[0] || 'УКР',
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div
      className="relative cursor-pointer select-none"
      onClick={toggleDropdown}
    >
      <div className="flex items-center rounded-[20px] bg-base-text px-4 py-2 font-semibold text-base-text_dark">
        {selectedLanguage}
        <Svg isOpen={isOpen} />
      </div>
      {isOpen && (
        <div className="absolute left-0 top-[-2px] mt-1 flex flex-col rounded-[20px] bg-base-text shadow-lg">
          <div className="flex items-center rounded-t-[20px] bg-[#B6B6B6] px-4 py-2">
            {selectedLanguage}
            <Svg isOpen={isOpen} />
          </div>
          <div className="flex flex-col">
            {languages
              .filter((language) => language !== selectedLanguage) // Виключаємо вибрану мову
              .map((language) => (
                <div
                  key={language}
                  className="cursor-pointer px-4 py-2 font-semibold text-base-text_dark"
                  onClick={() => selectLanguage(language)}
                >
                  {language}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
