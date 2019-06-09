import React from 'react';
import './Match.css';

const match = props => {

  return (
    <div className="Match">
      <p onClick={props.click0}>{props.team1}</p>
      <p onClick={props.click1}>{props.team2}</p>
    </div>
  )
}

export default match;
