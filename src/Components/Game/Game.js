import React from 'react';
import './Game.css';
import GameTile from '../GameTile/GameTile';
import xoIcon from '../../res/logo.svg';
import xIcon from '../../res/icon-x.svg';
import oIcon from '../../res/icon-o.svg';
import restartIcon from '../../res/icon-restart.svg';

function Game() {
  return (
    <div className='game-board'>
      <div className='info-header'>
        <img src={ xoIcon } alt='tic-tac-toe logo'></img>
        <div id="turn-indicator">
          <img src={ xIcon } alt='x-icon'></img><p>TURN</p>
        </div>
        <img src={ restartIcon } alt='restart button'></img>
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
        <div id='x-points'></div>
        <div id='number-of-ties'></div>
        <div id='o-points'></div>
      </div>
    </div>
  )
}
export default Game;
