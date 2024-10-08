'use client';
import { FC, ReactElement, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

interface Props {
  src: string | StaticImageData;
  alt: string;
  fill?:boolean
  width?: number;
  height?: number;
  loadingFallback?: ReactElement;
  objectFit?: 'cover' | 'contain';
  className?: string;
}

const AppImage: FC<Props> = ({
  src,
  alt,
  fill=false,
  width,
  height,
  loadingFallback,
  objectFit = 'cover',
  className,
  ...otherProps
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (isLoading && loadingFallback) {
    return loadingFallback;
  }

  if (hasError) {
    return <div>Error loading image</div>;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      className={`${objectFit === 'cover' ? 'object-cover' : 'object-contain'} ${className}`}
      //onLoadingComplete={handleLoadingComplete}
      onLoad={handleLoadingComplete}
      onError={handleError}
      {...otherProps}
    />
  );
};

AppImage.displayName = 'AppImage';

export default AppImage;
