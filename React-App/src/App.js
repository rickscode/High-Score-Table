import './App.css';
import allCountryScores from "./data/scores"
import ScoreTables from "./ScoreTables"

function App() {
  return (
    <div className="App">
     {/*header component*/}
    <h1 className="Title">HIGH SCORES: INTERNATIONAL</h1>
    {/*pass array of data as props*/}
    <ScoreTables results={allCountryScores} />
    </div>
  );
}

export default App;
