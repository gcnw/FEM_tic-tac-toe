import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import './Game.css';
import GameTile from '../GameTile/GameTile';
import LogoSVG from '../../res/LogoSVG';
import restartIcon from '../../res/icon-restart.svg';
import IconXSVG from '../../res/IconXSVG';
import IconOSVG from '../../res/IconOSVG';

function Game(props) {

  const location = useLocation();
  const  {opponent}  = location.state;
  const [gameBoard, setGameBoard] = useState(new Array(9).fill(null))
  const [xTurn, setXTurn] = useState(props.xChoice);
  const [points, setPoints] = useState([0,0,0])
  const [gameOver, setGameOver] = useState(false); //PLAYER1,TIES,PLAYER2/CPU

  function setMark(target) {
    if(gameBoard[target] === null){
      gameBoard[target] = (xTurn) ? 'X' : 'O';
      setXTurn(!xTurn);
      const winner = checkForWin();
      if(winner !== null) {
        setGameOver(true);
        if(winner === props.xChoice){
          let winChange = points;
          winChange[0]++;
          setPoints(winChange);
        }
        else if(winner !== props.xChoice){
          let lossChange = points;
          lossChange[2]++;
          setPoints(lossChange);
        }
      }
      else if(!gameBoard.includes(null)){
        setGameOver(true);
        let tieChange = points;
        tieChange[1]++;
        setPoints(tieChange);
      }
    }    

  }
  
  function checkForWin() {
      if(
        (gameBoard[6] === gameBoard[4] && gameBoard[4] === gameBoard[2]) ||
        (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]) ||
        (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]) ||
        (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) ) {
          return gameBoard[4]}
      else if(
        (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) ||
        (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) ) {
          return gameBoard[0]}
      else if(
        (gameBoard[8] === gameBoard[5] && gameBoard[5] === gameBoard[2]) ||
        (gameBoard[8] === gameBoard[7] && gameBoard[7] === gameBoard[6])) {
          return gameBoard[8]}
      else return null;
  }   

  function newGame() {
    setGameBoard(new Array(9).fill(null));
    setGameOver(false);
    setXTurn(props.xChoice)
  }

  

  return (
    <div className='game-board'>
      <div className='info-header'>
        <LogoSVG id="game-logo"/>
        <div id="turn-indicator">
        { (xTurn 
            ? <IconXSVG svgIndex='game-icon'/> 
            : <IconOSVG svgIndex='game-icon'/>)
          }<p>TURN</p>
        </div>
        <div id="restart-container" onClick={ newGame }>
          <img src={ restartIcon } alt='restart button' ></img>
        </div>
      </div>
      <div className='game-tiles'>
        {gameBoard.map((tile, index) => {
          return (
            <GameTile
            key={index}
            id={index} 
            xTurn={ xTurn }
            display={ gameBoard[index] }
            setMark={ setMark } 
            gameOver={ gameOver }
          />
          )
        })}
      </div>
      <div className='point-distribution'>
        <div id='x-points'><p>{(props.xChoice === true ? 'X':'O')} (YOU)</p><h1>{points[0]}</h1></div>
        <div id='number-of-ties'><p>TIES</p> <h1>{points[1]}</h1></div>
        <div id='o-points'><p>{(props.xChoice === false ? 'X':'O')} ({opponent})</p> <h1>{points[2]}</h1></div>
      </div>
    </div>
  )
}
export default Game;
