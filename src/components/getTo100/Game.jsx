import classes from './GetTo100.module.css';
import { useState } from 'react';

function Game({userName}){
    const getRandomNumber = () => Math.floor(Math.random() * 100);

    const [number, setNumber] = useState(getRandomNumber);
    const [moves, setMoves] = useState(0);
  
    const handleAdd = () => {
      setNumber(prev => prev + 1);
      setMoves(prev => prev + 1);
    };
  
    const handleSubtract = () => {
      setNumber(prev => prev - 1);
      setMoves(prev => prev + 1);
    };
  
    const handleMultiply = () => {
      setNumber(prev => prev * 2);
      setMoves(prev => prev + 1);
    };
  
    const handleDivide = () => {
      setNumber(prev => Math.floor(prev / 2));
      setMoves(prev => prev + 1);
    };
  
    const handleReset = () => {
      setNumber(getRandomNumber);
      setMoves(0);
    };
  
    return (
      <div className={classes.card}>
        <h2>{userName}</h2>
        <h2>{number}</h2>
        <h2>Moves: {moves}</h2>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleSubtract}>-1</button>
        <button onClick={handleMultiply}>*2</button>
        <button onClick={handleDivide}>/2</button>
        <br />
        {number === 100 && <h2>Congratulations! You've reached 100 in {moves} moves.</h2>}
      </div>
    );
};

export default Game;