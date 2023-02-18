import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './GameSetup.css';
import LogoSVG from '../../res/LogoSVG';
import IconXSVG from '../../res/IconXSVG';
import IconOSVG from '../../res/IconOSVG';


function GameSetup(props) {
 
  let xDiv = useRef(null);
  let xMark = useRef(null);
  let oDiv = useRef(null);
  let oMark = useRef(null);
  
  useEffect(() => {
    xDiv.current = document.getElementById("x-mark");
    xMark.current = document.getElementById("game-setup-x");
    oDiv.current = document.getElementById("o-mark");
    oMark.current = document.getElementById("game-setup-o");
  }, []);

  function chooseX() {
    props.selectMark(true);   
    xDiv.current.style.boxShadow = "0 0 5px 5px #31c3bd";
    xMark.current.getElementsByTagName("path")[0].style.fill = "#31c3bd";
    oDiv.current.style.boxShadow = "";
    oMark.current.getElementsByTagName("path")[0].style.fill = "";
  }

  function chooseO() {
    props.selectMark(false);
    oDiv.current.style.boxShadow = "0 0 5px 5px #f2b137";
    oMark.current.getElementsByTagName("path")[0].style.fill = "#f2b137";
    xDiv.current.style.boxShadow = "";
    xMark.current.getElementsByTagName("path")[0].style.fill = "";
  }

  return (
    <div className="setup-container">
      <div className="top-icon-container">
        <LogoSVG />
      </div>
      <div className="pick-mark">
        <h6>PICK PLAYER 1'S MARK</h6>
        <div className='x-o-selection'>
          <button id="x-mark" onClick={ chooseX }>
            <IconXSVG svgIndex="game-setup" 
              />
          </button>
          <button id="o-mark" onClick={ chooseO }>
            <IconOSVG svgIndex="game-setup" />       
          </button>
        </div>
        <p>REMEMBER: X GOES FIRST</p>
      </div>
      <Link id="vs-cpu-button" to={{pathname:"/game"}} state={{opponent: 'CPU'}}>NEW GAME (VS CPU)</Link>
      <Link id="vs-human-button" to={{pathname:"/game"}} state={{opponent: 'PLAYER 2'}}>NEW GAME (VS PLAYER)</Link>
    </div>
  )
}

export default GameSetup;