import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

export const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className, style }) => {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      effect="blur"
      className={className}
      style={style}
      wrapperClassName="w-full h-full"
    />
  );
};