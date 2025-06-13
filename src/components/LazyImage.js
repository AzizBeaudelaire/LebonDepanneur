import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export const LazyImage = ({ src, alt, className, style }) => {
    return (React.createElement(LazyLoadImage, { src: src, alt: alt, effect: "blur", className: className, style: style, wrapperClassName: "w-full h-full" }));
};
