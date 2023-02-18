import { useState } from 'react';
import IconXSVG from '../../res/IconXSVG';
import IconOSVG from '../../res/IconOSVG';
import './GameTile.css';

function GameTile(props) {
  const [isHovering, setIsHovering] = useState(false);
  
  function mouseEnter(e) {
    if(props.display === null){
      const gameTile = document.getElementById(`game-tile-${props.id}`);
      gameTile.children[0].style.animation = "orbulate 1s ease infinite";
      setIsHovering(true)
    }
 }

  function mouseExit(e) {
    const gameTile = document.getElementById(`game-tile-${props.id}`);
    gameTile.children[0].style.animation = ""
    setIsHovering(false)

  }
  return (
    <div className="game-tile"
      id={`game-tile-${props.id}`}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseExit}
      onClick={() => {
        if(!props.gameOver){
        props.setMark(props.id) 
        mouseExit()
        }}}
      >
        <div className="svgContainer"> 
          {(props.display === null) && (isHovering && !props.gameOver && (props.xTurn ? <IconXSVG svgIndex={`IconSVG-${props.id}`}/> : <IconOSVG svgIndex={`IconSVG-${props.id}`}/>))} 
          {(props.display !== null) && ((props.display === 'X') ? <IconXSVG svgIndex={`IconSVG-${props.id}`}/> : <IconOSVG svgIndex={`IconSVG-${props.id}`}/>)}
        </div>
      </div>
  )
}

export default GameTile;