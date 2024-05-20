import classes from './GetTo100.module.css';
import Registration from './Registration';
import Game from './Game';
import { useState } from 'react';

function GameBoard({players}){
    return (
        <ul>
            {players.map((player) => {
                return (
                    <Game userName={player.userName}/>
                );
            })}
        </ul>
    );
};

export default GameBoard;