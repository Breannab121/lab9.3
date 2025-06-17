//import { useState } from 'react'
import './App.css'
import { useState } from 'react';
import { StatsDisplay } from './components/StatsDisplay/StatsDisplay';
import { TextInput } from './components/TextInput/TextInput';
import { CharacterCounter } from './components/CharacterCounter/CharacterCounter';
function App() {

 const [inputText, setInputText] = useState('');

  // Calculate stats from the inputText
  const characterCount = inputText.length;
  const wordCount = inputText.trim() === '' ? 0 : inputText.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200); // assuming 200 WPM

  const stats = {
    characterCount,
    wordCount,
    readingTime,
  }
  return (
    <>
      <h1>Character Count</h1>
      <StatsDisplay
        stats={stats}
        showReadingTime={true} />

      <TextInput
        onTextChange={(text) => setInputText(text)}
        placeholder='Start typing your content here...' />
    <CharacterCounter
        minWords={25}
        maxWords={100}
        currentWordCount={wordCount} />
    </>

  )
}

export default App
