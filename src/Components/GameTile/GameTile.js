import './GameTile.css';

function GameTile(props) {
  return (
    <div className="game-tile"
      id={`game-tile-${props.id}`}
      onMouseEnter={props.mouseEnter}
      onMouseLeave={props.mouseExit}
      >
      <p>{  }</p>
    </div>
  )
}

export default GameTile;