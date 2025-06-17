import React from 'react';
import { AlertBoxProps } from '../../types';

export const AlertBox: React.FC<AlertBoxProps> = ({type, message, children}) => {
  return (
    <div>  
      <p>{type.toUpperCase()}: {message}</p>
      {children && <div>{children}</div>}
    </div>
  );
};