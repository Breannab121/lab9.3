import React from 'react';
import type { CharacterCounterProps } from '../../types';


export const CharacterCounter: React.FC<CharacterCounterProps> = ({minWords, maxWords, currentWordCount, targetReadingTime}) => {

 const isMinReached = currentWordCount >= minWords;
  const isOverMax = currentWordCount > maxWords;

return (
<div>
      <p>Min: {currentWordCount} | Max: {maxWords}</p>
      {isMinReached && !isOverMax && <p style={{ color: 'green' }}>Minimum met</p>}
      {isOverMax && <p style={{ color: 'red' }}>Too many words</p>}
      {targetReadingTime && (
        <p>Target Reading Time: {targetReadingTime} min</p>
      )}
    </div>
  );
};
