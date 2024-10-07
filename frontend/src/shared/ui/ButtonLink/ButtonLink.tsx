/* eslint-disable no-nested-ternary */

import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import Link from 'next/link';
import { Icon } from '../Icon';
import ArrowInCircle from '@/shared/assets/icons/ArrowInCircle.svg?react';
import ArrowInCircleBlue from '@/shared/assets/icons/ArrowInCircleBlue.svg?react';
import ArrowVectorGray from '@/shared/assets/icons/ArrowVectorGray.svg?react';
import { Text } from '../Text';

type VariantTypes =
  | 'clear'
  | 'primary'
  | 'arrow'
  | 'textBlue'
  | 'arrowTextBlue'
  | 'ArrowVectorGray';

const variantClasses: Record<VariantTypes, string> = {
  clear: '',
  arrow: '',
  arrowTextBlue: 'disabled:cursor-not-allowed',
  ArrowVectorGray: '',
  textBlue: '',
  primary:
    'bg-main py-2 px-4 text-main-dark rounded-lg hover:bg-secondary-yellow disabled:bg-disabled duration-200',
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  text?: string;
  size?: string;
  children?: string | ReactNode;
  onClick?: () => void;
  variant: VariantTypes;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  arrowTextBlueStyles?: string;
}

const ButtonLink = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    children,
    onClick,
    text,
    variant,
    to,
    size,
    disabled = false,
    className,
    arrowTextBlueStyles,
    type = 'button',
    ...otherProps
  } = props;

  const content = (
    <button
      ref={ref}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`text-center ${variantClasses[variant]} ${className}`}
      {...otherProps}
    >
      {variant === 'arrow' && (
        <Icon
          Svg={ArrowInCircle}
          width={45}
          height={45}
          className="min-w-[45px]"
        />
      )}
      {variant === 'textBlue' && (
        <div className="flex items-center gap-3">
          <span className={`font-sans font-medium text-[#151515] ${className}`}>
            {text}
          </span>
          <Icon
            Svg={ArrowInCircleBlue}
            width={size || 45}
            height={size || 45}
            className="min-w-[45px]"
          />
        </div>
      )}
      {variant === 'ArrowVectorGray' && (
        <div className="flex items-center gap-3">
          {/* <span className="font-sans font-medium text-[#151515]">{text}</span> */}
          <Icon Svg={ArrowVectorGray} width={size || 45} height={size || 45} />
        </div>
      )}
      {variant === 'arrowTextBlue' && (
        <div className="flex items-center">
          {text && (
            <span
              className={`rounded-[30px] bg-[#2C05F2] px-[19.5px] py-[12.5px] font-sans ${arrowTextBlueStyles}`}
            >
              <Text
                textType="Desktop/Button"
                text={text}
                color="base/BG_block"
                Tag="p"
              />
            </span>
          )}
          <Icon
            Svg={ArrowInCircleBlue}
            width={size || 49}
            height={size || 49}
            className="min-w-[45px]"
          />
        </div>
      )}
      {!['arrow', 'textBlue', 'ArrowVectorGray', 'arrowTextBlue'].includes(
        variant,
      ) && children}
    </button>
  );

  return to ? <Link href={to}>{content}</Link> : content;
});

ButtonLink.displayName = 'ButtonLink';

export default ButtonLink;
