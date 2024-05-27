import React, { useState, useEffect } from 'react';
import classes from './GetTo100.module.css';

function Game({ userName, gameStarted, isActive, nextTurn, addScore, removePlayer}) {
  const getRandomNumber = () => Math.floor(Math.random() * 100);

  const [number, setNumber] = useState(getRandomNumber);
  const [moves, setMoves] = useState(0);
  const [hasWon, setHasWon] = useState(false);

  const win = (num) => {
    if (num === 100) {
      setHasWon(true);
      addScore(userName, moves);
      const userChoice = window.confirm("Congratulations! You won the game!!\n\nWhat would you like to do?\n\nClick OK to continue playing, or Cancel to end the game.");
      if (userChoice) {
        handleContinue();
      } else {
        handleEndGame();
      }
    }
  }

  useEffect(() => {
    if (!hasWon) {
      win(number);
    }
  }, [number, hasWon]); 

  const handleOperation = (operation) => {
    const newNumber = Math.floor(eval(`${number} ${operation}`));
    setNumber(newNumber);
    setMoves(prev => prev + 1);
    nextTurn();
  }

  const handleContinue = () => {
    setHasWon(false);
    setNumber(getRandomNumber);
    setMoves(0);
  };

  const handleEndGame = () => {
    removePlayer(userName);
  };

  const disabled = (!gameStarted || !isActive || hasWon);

  return (
    <div className={classes.card}>
      <h2>{userName}</h2>
      <h2>{number}</h2>
      <h2>Moves: {moves}</h2>
      <button onClick={() => handleOperation('+ 1')} disabled={disabled}>+1</button>
      <button onClick={() => handleOperation('- 1')} disabled={disabled}>-1</button>
      <button onClick={() => handleOperation('* 2')} disabled={disabled}>*2</button>
      <button onClick={() => handleOperation('/ 2')} disabled={disabled}>/2</button>
    </div>
  );
}

export default Game;
