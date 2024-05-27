import React, { useState, useEffect } from 'react';
import classes from './GetTo100.module.css';

/**
 * Game component for the GetTo100 game.
 * @param {Object} props - The component props.
 * @param {string} props.userName - The username of the player.
 * @param {boolean} props.gameStarted - Indicates if the game has started.
 * @param {boolean} props.isActive - Indicates if it's the player's turn.
 * @param {Function} props.nextTurn - Function to switch to the next player's turn.
 * @param {Function} props.addScore - Function to add the player's score.
 * @param {Function} props.removePlayer - Function to remove the player from the game.
 * @returns {JSX.Element} The Game component.
 */
function Game({ userName, gameStarted, isActive, nextTurn, addScore, removePlayer }) {
  /**
   * Generates a random number between 0 and 100.
   * @returns {number} The random number.
   */
  const getRandomNumber = () => Math.floor(Math.random() * 100);

  const [number, setNumber] = useState(getRandomNumber);
  const [moves, setMoves] = useState(0);
  const [hasWon, setHasWon] = useState(false);

  /**
   * Checks if the player has won the game.
   * @param {number} num - The current number.
   */
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

  /**
   * Handles the player's operation.
   * @param {string} operation - The operation to perform on the number.
   */
  const handleOperation = (operation) => {
    const newNumber = Math.floor(eval(`${number} ${operation}`));
    setNumber(newNumber);
    setMoves(prev => prev + 1);
    nextTurn();
  }

  /**
   * Handles the player choosing to continue playing.
   */
  const handleContinue = () => {
    setHasWon(false);
    setNumber(getRandomNumber);
    setMoves(0);
  };

  /**
   * Handles the player choosing to end the game.
   */
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
