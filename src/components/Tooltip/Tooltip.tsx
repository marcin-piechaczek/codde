import { ReactNode } from 'react';

interface TextInputProps {
  children: ReactNode;
  message: string;
}

export const Tooltip = ({ children, message }: TextInputProps) => {
  return (
    <div className="tooltip tooltip-left md:tooltip-right" data-tip={message}>
      {children}
    </div>
  );
};
