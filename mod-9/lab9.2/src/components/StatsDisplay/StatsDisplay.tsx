import React from 'react';
import type {StatsDisplayProps } from '../../types';

export const StatsDisplay: React.FC<StatsDisplayProps> = ({stats, showReadingTime}) => {


    return (
        <div>
            <p>Characters: {stats.characterCount}</p>
            <p>Words: {stats.wordCount}</p>
            {showReadingTime && <p>Reading Time {stats.readingTime}</p>}
        </div>
    )
}

