import './App.css';
import { useState } from 'react'

const [rangea, setRangeA] = useState("50");
const [rangeb, setRangeB] = useState("0");



function App() {
  return (
    <div className="App">
      <div id="max-sum-holder">
        <input type="number" value="50" onChange={value} />
      </div>

      <div id="range-a-holder">
        <input type="range" value="0" max={rangea} />
        <div id="range-a-value"></div>
      </div>
      <div id="range-b-holder">
        <input type="range" value="0" max={rangeb} />
        <div id="range-b-value"></div>
      </div>
      <div id="sum"></div>
    </div>
  );
}

export default App;
