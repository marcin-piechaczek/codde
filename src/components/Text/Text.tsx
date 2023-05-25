import clsx from 'clsx';
import { ElementType, HTMLAttributes, ReactNode } from 'react';

interface TextProps extends HTMLAttributes<HTMLElement> {
  tag: ElementType;
  children: ReactNode;
  variant?: Variant;
}

type Variant = 'body';

const textVariantClasses: Record<Variant, string> = {
  body: 'text-white text-lg',
};

export const Text = ({
  tag: Component,
  children,
  className,
  variant = 'body',
  ...props
}: TextProps) => {
  const styles = clsx(textVariantClasses[variant], className);

  return (
    <Component className={styles} {...props}>
      {children}
    </Component>
  );
};
