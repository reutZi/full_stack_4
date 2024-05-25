import React, { useState, useEffect } from 'react';
import Records from './Records';
import Modal from './Modal';
import Registration from './Registration';
import classes from './GetTo100.module.css';
import GameBoard from './GameBoard';
import Buttons from './Buttons';
import SignUp from './SignUp';
import Profile from './Profile';

function GetTo100({profilePage, newGame, setNewGame, openingScreen, setOpeningScreen}) {
    const [gameBoard, setGameBoard] = useState(false);
    const [showButtons, setShowButtons] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [users, setUsers] = useState([]);
    const [players, setPlayers] = useState([]);
    const [activePlayerIndex, setActivePlayerIndex] = useState(0);
    const [signUp, setSignUp] = useState(false);
    var profileData;
   

    useEffect(() => {
        loadUsers();
    }, []);

    function loadUsers() {
        const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
        setUsers(storedUsers);
    }

    function saveUsers(updatedUsers) {
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        setUsers(updatedUsers);
    }

    function addIdToPlayers() {
        setPlayers(players.map((player, index) => ({
            ...player,
            id: index
        })));
    }

    function checkUserName(userName) {
        if (users && users.some((user) => user.userName === userName)) {
            alert("Username already exists. Please choose another one.");
            return false;
        }

        return true;
    }

    function checkPassword(password, passwordValid) {
        
        console.log('passwordValid: ', passwordValid);
        console.log('password: ', password);
        if (password !== passwordValid) {
            alert("Passwords do not match. Please try again.");
            return false;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return false;
        }

        if (!/^[a-zA-Z0-9]+$/.test(password)) {
            alert("Password can only contain letters and numbers.");
            return false;
        }

        return true;
    }

    function addUser(userName, password, passwordValid) {
        const user = { userName, password, scores: [] };

        if (checkUserName(user.userName) && checkPassword(user.password, passwordValid)) {
            setSignUp(false);
            setGameBoard(true);
            setShowButtons(true);
            setPlayers([...players, user]);
            setUsers([...users, user]);
            saveUsers([...users, user]);
        }
    }

    function submit(userName, password) {
        const user = users.find(user => user.userName === userName);
        if (user) {
            if (user.password === password) {
                if (!players.some(player => player.userName === userName)) {
                    if(profilePage){
                        setNewGame(false);
                        profileData = <Profile userName ={userName} scores = {user.scores}/>;
                        return;
                    }
                    setNewGame(false);
                    setGameBoard(true);
                    setShowButtons(true);
                    setPlayers([...players, user]);
                } else {
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
        setSignUp(false);
        setNewGame(true);
        setOpeningScreen(false);
    }

    function handleStartGame() {
        setShowButtons(false);
        setGameStarted(true);
        addIdToPlayers();
    }

    function handleAddPlayer() {
        setNewGame(true);
        setShowButtons(false);
    }

    function nextTurn() {
        setActivePlayerIndex((prevIndex) => {
            var index = players.findIndex(player => player.id === prevIndex);
            if (index === players.length - 1) {
                return players[0].id;
            }
            return players[index + 1].id;
        });
    }

    function addScore(userName, score) {
        const updatedUsers = users.map(user => {
            if (user.userName === userName) {
                return { ...user, scores: [...user.scores, score] };
            }
            return user;
        });
        saveUsers(updatedUsers);
    }

    function removePlayer(userName) {
        if (players.length === 1) {
            emptyBoard();
        }
        setPlayers(players.filter(player => player.userName !== userName));
    }

    function emptyBoard() {
        setOpeningScreen(true);
        setGameBoard(false);
    }

    function handleSignUp() {
        setSignUp(true);
        setNewGame(false);
    }

    return (
        <>
            {newGame && (
                <Modal>
                    <div className={classes.game_grid}>
                        <Registration submit={submit} handleSignUp={handleSignUp} />
                    </div>
                </Modal>
            )}

            {signUp && (
                <Modal>
                    <div className={classes.game_grid}>
                        <SignUp submit={addUser} openNewGame={openNewGame} />
                    </div>
                </Modal>
            )}

            {openingScreen && (<Records openNewGame={openNewGame} />)}

            {showButtons && (<Buttons handleStartGame={handleStartGame} handleAddPlayer={handleAddPlayer} />)}

            {gameBoard && (
                <GameBoard
                    players={players}
                    gameStarted={gameStarted}
                    activePlayerIndex={activePlayerIndex}
                    nextTurn={nextTurn}
                    addScore={addScore}
                    removePlayer={removePlayer}
                />
            )}

            {profilePage && !newGame && (profileData)}
        </>
    );
}

export default GetTo100;
