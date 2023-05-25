import { ReactNode } from 'react';

interface TextInputProps {
  children: ReactNode;
  message: string;
}

export const Tooltip = ({ children, message }: TextInputProps) => {
  return (
    <div className="tooltip" data-tip={message}>
      {children}
    </div>
  );
};
