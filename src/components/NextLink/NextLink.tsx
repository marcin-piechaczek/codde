import Image, { ImageProps } from 'next/image';
import { HTMLAttributes } from 'react';

export type NextLinkProps = ImageProps & HTMLAttributes<HTMLImageElement>;

export const NextImage = ({ alt, src, ...props }: NextLinkProps) => {
  return <Image src={src} alt={alt} {...props} />;
};
