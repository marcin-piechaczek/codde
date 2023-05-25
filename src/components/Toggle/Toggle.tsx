'use client';

import { ChangeEvent } from 'react';

interface ToggleProps {
  checked: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Toggle = ({ checked, onChange }: ToggleProps) => {
  return <input type="checkbox" className="toggle" onChange={onChange} checked={checked} />;
};
