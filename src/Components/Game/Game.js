import React, { useState, useRef } from 'react';
import './Game.css';
import GameTile from '../GameTile/GameTile';
import LogoSVG from '../../res/LogoSVG';
import restartIcon from '../../res/icon-restart.svg';
import IconXSVG from '../../res/IconXSVG';
import IconOSVG from '../../res/IconOSVG';

function Game(props) {

  const [gameBoard, setGameBoard] = useState(new Array(9).fill(null))
  const [display, setDisplay] = useState(new Array(12).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const [isHovering, setIsHovering] = useState(new Array(9).fill(false));
  
  let humanPoints = 0;
  let cpuPoints = 0;
  let numberOfTies = 0;
  let gameTile = useRef(null);

  function setMark(xTurn,e) {
  }

  function mouseEnter(e) {
    gameTile.current = document.getElementById(e.target.id);
    gameTile.current.style.backgroundColor = "red"
    setIsHovering(isHovering => isHovering.splice(e.target.id,1,true))
 }

  function mouseExit(e) {
    gameTile.current = document.getElementById(e.target.id);
    gameTile.current.style.backgroundColor = ""
    setIsHovering(isHovering => isHovering.splice(e.target.id,1,false))
  }

  return (
    <div className='game-board'>
      <div className='info-header'>
        <LogoSVG id="game-logo"/>
        <div id="turn-indicator">
          <IconXSVG id="game-icon-x"/><p>TURN</p>
        </div>
        <div id="restart-container">
          <img src={ restartIcon } alt='restart button'></img>
        </div>
      </div>
      <div className='game-tiles'>
        {gameBoard.map((tile, index) => {
          return (
            <GameTile
            key={`game-tile-${index}`}
            id={`game-tile-${index}`} 
            display={ display[index] }
            onClick={ setMark(xTurn) } 
            isHovering={ isHovering[index] }
            mouseEnter={ mouseEnter }
            mouseExit={ mouseExit }
          />
          )
        })}
        {/* <GameTile 
          display={ display[0] }
          chosenMark={ gameBoard[0] } 
          onClick={ setMark(xTurn) } 
          isHovering={ isHovering[0] }
          mouseEnter={ mouseEnter }
          mouseExit={ mouseExit }
          />
        <GameTile 
          display={ display[1] }
          chosenMark={ gameBoard[1] } 
          onClick={ setMark(xTurn) } 
          isHovering={ isHovering[1] }
          mouseEnter={ mouseEnter }
          mouseExit={ mouseExit }
          />
        <GameTile 
          display={ display[2] }
          chosenMark={ gameBoard[2] } 
          onClick={ setMark(xTurn) } 
          isHovering={ isHovering[2] }
          mouseEnter={ mouseEnter }
          mouseExit={ mouseExit }
          />
        <GameTile id="3"
          display={ display[3] }
          chosenMark={ gameBoard[3] } 
          onClick={ setMark(xTurn) } 
          isHovering={ isHovering[3] }
          mouseEnter={ mouseEnter }
          mouseExit={ mouseExit }
          />
        <GameTile id="4"
          display={ display[4] }
          chosenMark={ gameBoard[4] } 
          onClick={ setMark(xTurn) } 
          isHovering={ isHovering[4] }
          mouseEnter={ mouseEnter }
          mouseExit={ mouseExit }
          />
        <GameTile id="5"
          display={ display[5] }
          chosenMark={ gameBoard[5] } 
          onClick={ setMark(xTurn) } 
          isHovering={ isHovering[5] }
          mouseEnter={ mouseEnter }
          mouseExit={ mouseExit }
          />
        <GameTile id="6"
          display={ display[6] }
          chosenMark={ gameBoard[6] } 
          onClick={ setMark(xTurn) } 
          isHovering={ isHovering[6] }
          mouseEnter={ mouseEnter }
          mouseExit={ mouseExit }
          />
        <GameTile id="7"
          display={ display[7] }
          chosenMark={ gameBoard[7] } 
          onClick={ setMark(xTurn) } 
          isHovering={ isHovering[7] }
          mouseEnter={ mouseEnter }
          mouseExit={ mouseExit }
          />
        <GameTile id="8"
          display={ display[8] }
          chosenMark={ gameBoard[8] } 
          onClick={ setMark(xTurn) } 
          isHovering={ isHovering[8] }
          mouseEnter={ mouseEnter }
          mouseExit={ mouseExit }
          /> */}
      </div>
      <div className='point-distribution'>
        <div id='x-points'><p>X (YOU)</p><h1>{humanPoints}</h1></div>
        <div id='number-of-ties'><p>TIES</p> <h1>{numberOfTies}</h1></div>
        <div id='o-points'><p>O (CPU)</p> <h1>{cpuPoints}</h1></div>
      </div>
    </div>
  )
}
export default Game;
