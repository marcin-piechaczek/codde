import { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  return <div className="pb-16 pt-16">{children}</div>;
};
