export type TextAlign = 'right' | 'left' | 'center';
export type HeaderTagType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span';

export type TextTypes =
  | 'Desktop/H1'
  | 'Desktop/title-s'
  | 'Desktop/Body'
  | 'Body'
  | 'Desktop/Subtitle'
  | 'Desktop/Subtext'
  | 'Desktop/Button-menu'
  | 'Desktop/H2'
  | 'H2'
  | 'Desktop/title-l'
  | 'Desktop/Button'
  | 'Desktop/numeric-s'
  | 'H3'
  | 'Title/L-S'
  | 'Desktop/H3';

export type TextColors =
  | 'primary'
  | 'gray'
  | 'base/text'
  | 'base/text_accent'
  | 'base/bg_block'
  | 'base/text_light_2'
  | 'icons_symbols/blue_500'
  | 'base/BG_block'
  | 'base/text_dark'
  | 'base/text_light'
  | 'red'
  | 'base/stroke_btn_act';

export type TextFonts = 'sans' | 'serif';

const TextColor: Record<TextColors, string> = {
  'base/text': 'text-base-text',
  'base/text_light': 'text-base-text_light',
  'base/BG_block': 'text-base-bg-block',
  'base/stroke_btn_act': 'text-base-stroke-btn-act',
  'base/text_accent': 'text-base-text_accent',
  'base/bg_block': 'text-base-bg-block',
  'icons_symbols/blue_500': 'text-icons_symbols-blue_500',
  'base/text_light_2': 'text-base-text_light_2',
  'base/text_dark': 'text-base-text_dark',
  primary: 'text-main-dark',
  gray: 'text-grey',
  red: 'text-red-600',
};

const TextType: Record<TextTypes, string> = {
  'Desktop/H1': 'text-7xl font-normal leading-[100%] tracking-[-1.4px] ',
  'Desktop/title-s': ' text-l font-normal leading-135 tracking-[-0.48px]',
  'Desktop/Body': '  text-s   font-normal  leading-135  tracking-[-0.18px]',
  'Desktop/Button':
    'text-[18px] font-[500] leading-[22.5px] break-words font-ibm-plex-sans',
  'Desktop/H2':
    ' text-4xl font-ibm-plex-serif font-normal leading-[52.8px] break-words',
  'Desktop/title-l':
    'text-2xl font-ibm-plex-sans font-medium leading-10 break-words',
  'Desktop/H3':
    ' font-ibm-plex-serif text-3xl font-normal leading-115 tracking-[-0.72]',
  'Desktop/Subtitle':
    ' font-body text-2xs font-medium leading-[18.9px] tracking-[-0.28px]',
  'Desktop/numeric-s':
    ' font-semibold font-fixel-display text-l  leading-[135%] tracking-[-0.24px]',
  'Desktop/Button-menu':
    'text-[#474747] text-sm font-semibold leading-[17.50px] font-ibm-plex-sans',
  'Desktop/Subtext':
    'text-3xs  font-ibm-plex-sans font-normal  tracking-[-0.24px]',
  H2: 'font-ibm-plex-serif text-3xl font-normal leading-[1.1]  tracking-[-0.72px]   md:text-5xl md:tracking-[-0.96px]  ',
  H3: 'text-center text-base-BG_block font-normal text-[28px] leading-[115%] tracking-[-0.56px] font-serif md:text-[36px] md:tracking-[-0.72px] md:leading-[115%]',
  Body: 'text-center text-xs font-normal leading-[1.4]  tracking-[-0.16px] md:text-s   md:leading-[1.35]   md:tracking-[-0.18px] ',
  'Title/L-S':
    'text-l leading-[1.25] tracking-[-0.48px] md:text-2xl font-ibm-plex-sans font-medium md:leading-10 break-words',
};

const TextAlignClass: Record<TextAlign, string> = {
  left: 'text-start',
  center: 'text-center',
  right: 'text-right',
};

const TextFont: Record<TextFonts, string> = {
  sans: 'font-ibm-plex-sans',
  serif: 'font-ibm-plex-serif',
};

interface Props {
  text: string | undefined;
  Tag: HeaderTagType;

  textType: TextTypes;

  color?: TextColors;
  bold?: boolean;
  font?: TextFonts;
  align?: TextAlign;
  className?: string;
}

const Text = (props: Props) => {
  const {
    Tag,
    text,
    align = 'left',
    bold,
    className,
    color,
    font = 'sans',
    textType,
  } = props;

  const textAlign = TextAlignClass[align];
  const textColor = color ? TextColor[color] : '';
  const textFont = TextFont[font];
  const textTypeStyle = TextType[textType];

  return (
    <Tag
      className={` ${
        bold ? 'font-bold' : ''
      } ${textFont} ${textColor} ${textAlign} ${textTypeStyle} ${className} `}
    >
      {text}
    </Tag>
  );
};

Text.displayName = 'Text';

export default Text;
