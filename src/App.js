import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import GameSetup from './Components/GameSetup/GameSetup';
import Game from './Components/Game/Game'

function App() {
  const [chosenMark, setChosenMark] = useState('X');
  const [cpuOpp, setCpuOpp] = useState(null)

  

  function pickMark(mark) {
    setChosenMark(mark);
  }

  function pickOpp(opp) {
    setCpuOpp(opp)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ 
            <GameSetup 
              opponent={ cpuOpp }
              chooseOpponent={ pickOpp }
              xChoice={ chosenMark }
              selectMark={ pickMark }
              /> } />
          <Route path="/game" element={ 
            <Game 
              xChoice={ chosenMark }
            /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
