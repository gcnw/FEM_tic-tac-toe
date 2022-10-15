import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "./App.css";
import GameSetup from './Components/GameSetup/GameSetup';
import Game from './Components/Game/Game'

function App() {
  const [xSelected, setXSelected] = useState(true);

  function isXSelected(mark) {
    setXSelected(mark);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ 
            <GameSetup 
              isXSelected={ isXSelected }
              xSelect={ xSelected }
              /> } />
          <Route path="game" element={ 
            <Game 
              xFirst={ xSelected }
            /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
