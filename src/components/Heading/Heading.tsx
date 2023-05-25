import clsx from 'clsx';
import { HTMLAttributes, ReactNode } from 'react';

type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps extends HTMLAttributes<HTMLElement> {
  tag: Tag;
  children: ReactNode;
}

const headingVariantClasses: Record<Tag, string> = {
  h1: 'text-4xl md:text-6xl font-bold text-white',
  h2: 'text-3xl md:text-5xl font-bold text-white',
  h3: 'text-xl md:text-2xl font-bold text-white',
  h4: 'text-lg md:text-xl font-bold text-white',
  h5: 'text-lg md:text-lg font-bold text-white',
  h6: 'text-md md:text-md font-bold text-white',
};

export const Heading = ({ tag: Component, className, children, ...props }: HeadingProps) => {
  const styles = clsx(headingVariantClasses[Component], className);

  return (
    <Component className={styles} {...props}>
      {children}
    </Component>
  );
};
