
function DisplayStats({stats, showReadingTime=false}) {
  return (
    <div>
      <div>
        <div>Characters {stats.characterCpunt}</div>
      </div>
      <div>
        <div>Words {stats.wordCount}</div>
      </div>
      <div>
        <div>Reading Time {showReadingTime ? Stats.readingTime : "0:00"}</div>
        <div>Min: 25 | Max: 100</div>
      </div>
    </div>
  );
}

export default DisplayStats;