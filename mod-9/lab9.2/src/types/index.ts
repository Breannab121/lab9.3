export interface TextInputProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initialValue?: string;
}

export interface TextStatsProps {
  characterCount: number;
  wordCount: number;
  readingTime: number; // in minutes
}
 
export interface StatsDisplayProps {
  stats: TextStatsProps;
  showReadingTime?: boolean;
}

export interface CharacterCounterProps {
  minWords: number;
  maxWords: number;
  currentWordCount: number
  targetReadingTime?: number; // in minutes
}