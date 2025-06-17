import DisplayStats from "../StatsDisplay/StatsDisplay";
import TextInput from "../TextInput/TextInput";
import { useState } from "../TextInput/TextInput";


function CharacterCounter() {

  const[text, setText] = useState("");

  const [stats,  setStats] = usestate ({
    characterCount: 0,
    wordCount: 0,
    readingTime: 0,
  })



  consthandleTextChange = (newText) =>  {
    setText(newText);
    setStats(prevStats => ({
      ...prevStats,
      characterCount: newText.Length
    }))
  }

  return (
    <div>
      <h1>Character Counter</h1>

      <TextInput obTextChange={handleTextChange}/>
      <DisplayStats stats={stats}/>
    </div>
  );
}

export default CharacterCounter;