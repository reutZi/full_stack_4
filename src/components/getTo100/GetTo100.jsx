import React, { useState } from 'react';
import Game from './Game';
import Records from './Records';
import Modal from './Modal';
import Registration from './Registration';
import classes from './GetTo100.module.css';
import GameBoard from './GameBoard';

function GetTo100() {
    const [newGame, setNewGame] = useState(false);
    const [openingScreen, setOpeningScreen] = useState(true);
    const [gameBoard, setGameBoard] = useState(false);
    const [users, setUsers] = useState([]);
    const [players, setPlayers] = useState([]);

    function loadUsers(){
        setUsers(JSON.parse(localStorage.getItem('users') || []));
        console.log("load" , users);
    }

    function submit(userName, password) {
        loadUsers();
        console.log(users);
        const user = users.find(user => user.userName === userName);
        if(user){
            if (user.password === password){
                setNewGame(false);
                setGameBoard(true);
            } else {
                alert('Password is not correct, try again.');
            }
        }else{
            alert('This username does not exist.');
        }
    }

    function openNewGame() {
        setNewGame(true);
        setOpeningScreen(false);
    }

    return (
        <>
            {newGame && (
                <Modal>
                    <div className={classes.game_grid}>
                        <Registration submit={submit} />
                    </div>
                </Modal>
            )}

            {openingScreen && (<Records openNewGame={openNewGame} />)}

            {gameBoard && (<GameBoard players={players}/>)}
        </>
    );
}

export default GetTo100;
