import React from 'react';
import './Player.css';

const Player = (props) => (
  <li className="Player">
    <span className="Player__name">{props.name}</span>
    <span className="Player__score">{props.score}</span>
    <span className="Player__button_plus" onClick={() => props.onPlayerScoreChange(1)}>+</span>
    <span className="Player__button_minus" onClick={() => props.onPlayerScoreChange(-1)}>-</span>
    <span className="Player__button_remove" onClick={() => props.onPlayerRemove()} >x</span>
  </li>
);

export default Player;