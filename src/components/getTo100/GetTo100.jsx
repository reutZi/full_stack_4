import React, { useState, useEffect } from 'react';
import Game from './Game';
import Records from './Records';
import Modal from './Modal';
import Registration from './Registration';
import classes from './GetTo100.module.css';
import GameBoard from './GameBoard';
import Buttons from './Buttons';

function GetTo100() {
    const [newGame, setNewGame] = useState(false);
    const [openingScreen, setOpeningScreen] = useState(true);
    const [gameBoard, setGameBoard] = useState(false);
    const [showButtons, setShowButtons] = useState(false);
    const [gameStarted, setGameStarted] = useState(false); 
    const [users, setUsers] = useState([]);
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    function loadUsers() {
        const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
        setUsers(storedUsers);
    }

    function submit(userName, password) {
        const user = users.find(user => user.userName === userName);
        if (user) {
            if (user.password === password) {
                if (!players.includes(user)) {
                    setNewGame(false);
                    setGameBoard(true);
                    setShowButtons(true);
                    setPlayers([...players, user]);
                }else{
                    alert('This user is already in the game.');
                }
            } else {
                alert('Password is not correct, try again.');
            }
        } else {
            alert('This username does not exist.');
        }
    }

    function openNewGame() {
        setNewGame(true);
        setOpeningScreen(false);
    }

    function handleStartGame() {
        setShowButtons(true);
        setGameStarted(true);
    }

    function handleAddPlayer() {
        setNewGame(true);
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

            {showButtons && (<Buttons handleStartGame={handleStartGame} handleAddPlayer={handleAddPlayer} />)}

            {gameBoard && (<GameBoard players={players} gameStarted={gameStarted}/>)}
        </>
    );
}

export default GetTo100;