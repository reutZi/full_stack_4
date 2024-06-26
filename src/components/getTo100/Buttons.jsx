import classes from './GetTo100.module.css';

function Buttons({handleStartGame, handleAddPlayer}){ //function to display the buttons
    return (
        <div className={classes.top_buttons}>
            <button onClick={handleStartGame}>Start Game</button>
            <button onClick={handleAddPlayer}>Add Player</button>
        </div>
    );
}

export default Buttons;