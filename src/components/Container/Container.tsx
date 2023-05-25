import clsx from 'clsx';
import { ReactNode } from 'react';

type ContainerVariant = 'full' | 'xl' | 'lg' | 'md';

const containerVariants: Record<ContainerVariant, string> = {
  full: 'w-full',
  xl: 'max-w-6xl mx-auto pl-4 pr-4',
  lg: 'max-w-3xl mx-auto pl-4 pr-4',
  md: 'max-w-xl mx-auto pl-4 pr-4',
};

export interface ContainerProps {
  children?: ReactNode;
  variant?: ContainerVariant;
  className?: string;
  id?: string;
}

export const Container = ({
  children,
  variant = 'xl',
  className,
  id,
  ...props
}: ContainerProps) => {
  const styles = clsx(variant && containerVariants[variant], className);

  return (
    <div id={id} className={styles} {...props}>
      {children}
    </div>
  );
};
