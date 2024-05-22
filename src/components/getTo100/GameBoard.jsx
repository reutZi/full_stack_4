import React from 'react';
import classes from './GetTo100.module.css';
import Game from './Game';

function GameBoard({ players, gameStarted, activePlayerIndex, nextTurn, addScore, removePlayer}) {
    return (
        <ul className={classes.game_grid}>
            {players.map((player, index) => (
                <Game
                    key={player.id}
                    userName={player.userName}
                    gameStarted={gameStarted}
                    isActive={player.id === activePlayerIndex}
                    nextTurn={nextTurn}
                    addScore={addScore}
                    removePlayer={removePlayer}
                />
            ))}
        </ul>
    );
}

export default GameBoard;
