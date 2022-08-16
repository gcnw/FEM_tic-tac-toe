import React from 'react';
import './MarkSelector.css';
import oIcon from '../../res/icon-o.svg';
import xIcon from '../../res/icon-x.svg'

function MarkSelector() {
  return (
    <div className="mark-selector">
      <p>Mark Selection Happens Here</p>
      <img src={ xIcon }></img>
      <img src={ oIcon }></img>
    </div>
  )
}

export default MarkSelector;