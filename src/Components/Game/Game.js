import React from 'react';
import './Game.css';
import GameTile from '../GameTile/GameTile';
import LogoSVG from '../../res/LogoSVG';
import oIcon from '../../res/icon-o.svg';
import restartIcon from '../../res/icon-restart.svg';
import IconXSVG from '../../res/IconXSVG';

function Game() {
  let humanPoints = 0;
  let cpuPoints = 0;
  let numberOfTies = 0;
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
        <GameTile />
        <GameTile />
        <GameTile />
        <GameTile />
        <GameTile />
        <GameTile />
        <GameTile />
        <GameTile />
        <GameTile />
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
