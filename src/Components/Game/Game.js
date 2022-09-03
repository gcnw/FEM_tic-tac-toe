import React from 'react';
import './Game.css';
import xoIcon from '../../res/logo.svg'

function Game() {
  return (
    <div className='game-board'>
      <div className='info-header'>
        <img src={ xoIcon } alt='tic-tac-toe logo'></img>
      </div>
      <div className='game-tiles'>
        {/* Game Tiles */}
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
