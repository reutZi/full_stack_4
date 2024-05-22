import classes from './GetTo100.module.css';
import Game from './Game';

function GameBoard({players, gameStarted}){
    return (
        <ul className={classes.game_grid}>
            {players.map((player) => {
                return (
                    <Game userName={player.userName} gameStarted={gameStarted}/>
                );
            })}
        </ul>
    );
};

export default GameBoard;