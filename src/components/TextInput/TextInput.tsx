import { ChangeEvent } from 'react';

interface TextInputProps {
  placeholder: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({ placeholder, value, onChange }: TextInputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input-bordered input w-full max-w-xs"
    />
  );
};
