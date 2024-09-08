import { FC } from "react";

export type TextAlign = "right" | "left" | "center";
export type HeaderTagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

export type TextTypes =
  | "Desktop/H1"
  | "Desktop/title-s"
  | "Desktop/Body"
  | "Desktop/H2"
  | "Desktop/title-l"
  | "Desktop/Button"
  | "Desktop/H3";

export type TextColors =
  | "primary"
  | "gray"
  | "base/text_accent"
  | "base/bg_block"
  | "base/text_light_2"
  | "icons_symbols/blue_500"
  | "base/BG_block"
  | "base/stroke_btn_act";

export type TextFonts = "sans" | "serif";

const TextColor: Record<TextColors, string> = {
  "base/BG_block": "text-base-bg-block",
  "base/stroke_btn_act": "text-base-stroke-btn-act",
  "base/text_accent": "text-base-text_accent",
  "base/bg_block": "text-base-bg-block",
  "icons_symbols/blue_500": "text-icons_symbols-blue_500",
  "base/text_light_2": "text-base-text_light_2",
  primary: "text-main-dark",
  gray: "text-grey",
};

const TextType: Record<TextTypes, string> = {
  "Desktop/H1": "text-7xl font-normal leading-[100%] tracking-[-1.4px]",
  "Desktop/title-s": " text-l font-normal leading-135 tracking-[-0.48px]",
  "Desktop/Body": "  text-s   font-normal  leading-135  tracking-[-0.18px]",
  "Desktop/Button":
    "text-[18px] font-[500] leading-[22.5px] break-words font-ibm-plex-sans",
  "Desktop/H2": " text-4xl font-ibm-plex-serif font-normal leading-[52.8px] break-words",
  "Desktop/title-l": "text-2xl font-ibm-plex-sans font-medium leading-10 break-words",
  "Desktop/H3":
    "text-center font-ibm-plex-serif text-3xl font-normal leading-115 tracking-[-0.72]",
};

const TextAlignClass: Record<TextAlign, string> = {
  left: "text-start",
  center: "text-center",
  right: "text-right",
};

const TextFont: Record<TextFonts, string> = {
  sans: "font-ibm-plex-sans",
  serif: "font-ibm-plex-serif",
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
    align = "left",
    bold,
    className,
    color,
    font = "sans",
    textType,
  } = props;

  const textAlign = TextAlignClass[align];
  const textColor = color ? TextColor[color] : "";
  const textFont = TextFont[font];
  const textTypeStyle = TextType[textType];

  return (
    <Tag
      className={`  ${
        bold ? "font-bold" : ""
      }  ${textFont}    ${textAlign} ${textColor} ${textTypeStyle} ${className}`}
    >
      {text}
    </Tag>
  );
};

export default Text;
