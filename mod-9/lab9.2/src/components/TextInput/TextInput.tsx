import React from 'react';
import type { TextInputProps } from '../../types';


export const TextInput: React.FC<TextInputProps> = ({ onTextChange, placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={(e) => onTextChange(e.target.value)}
    />
  );
};