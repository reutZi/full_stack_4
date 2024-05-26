import React, { useState, useEffect } from 'react';
import Records from './Records';
import Modal from './Modal';
import Registration from './Registration';
import classes from './GetTo100.module.css';
import GameBoard from './GameBoard';
import Buttons from './Buttons';
import SignUp from './SignUp';
import Profile from './Profile';
function GetTo100(props) {

    const { profilePage,
        newGame,
        setNewGame,
        openingScreen,
        setOpeningScreen,
        setGameBoard,
        gameBoard,
        setShowButtons,
        showButtons } = props;


    const [gameStarted, setGameStarted] = useState(false);
    const [users, setUsers] = useState([]);
    const [players, setPlayers] = useState([]);
    const [activePlayerIndex, setActivePlayerIndex] = useState(0);
    const [signUp, setSignUp] = useState(false);
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = () => {
        const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
        setUsers(storedUsers);
    };

    const saveUsers = (updatedUsers) => {
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        setUsers(updatedUsers);
    };

    const addIdToPlayers = () => {
        setPlayers(players.map((player, index) => ({
            ...player,
            id: index
        })));
    };

    const checkUserName = (userName) => {
        if (users.some((user) => user.userName === userName)) {
            alert("Username already exists. Please choose another one.");
            return false;
        }
        return true;
    };

    const checkPassword = (password, passwordValid) => {
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
    };

    const addUser = (userName, password, passwordValid) => {
        const user = { userName, password, scores: [] };
        if (checkUserName(user.userName) && checkPassword(user.password, passwordValid)) {
            setSignUp(false);
            setGameBoard(true);
            setShowButtons(true);
            const updatedUsers = [...users, user];
            setPlayers([...players, user]);
            saveUsers(updatedUsers);
        }
    };

    const submit = (userName, password) => {
        const user = users.find(user => user.userName === userName);
        if (user) {
            if (user.password === password) {
                if (profilePage) {
                    setNewGame(false);
                    setProfileData(<Profile userName={userName} scores={user.scores} />);
                    return;
                }
                if (!players.some(player => player.userName === userName)) {
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
    };

    const openNewGame = () => {
        setSignUp(false);
        setNewGame(true);
        setOpeningScreen(false);
    };

    const handleStartGame = () => {
        setShowButtons(false);
        setGameStarted(true);
        addIdToPlayers();
    };

    const handleAddPlayer = () => {
        setNewGame(true);
        setShowButtons(false);
    };

    const nextTurn = () => {
        setActivePlayerIndex((prevIndex) => {
            const index = players.findIndex(player => player.id === prevIndex);
            return index === players.length - 1 ? players[0].id : players[index + 1].id;
        });
    };

    const addScore = (userName, score) => {
        const updatedUsers = users.map(user => {
            if (user.userName === userName) {
                return { ...user, scores: [...user.scores, score] };
            }
            return user;
        });
        saveUsers(updatedUsers);
    };

    const removePlayer = (userName) => {
        if (players.length === 1) {
            emptyBoard();
        } else {
            setPlayers(players.filter(player => player.userName !== userName));
        }
    };

    const emptyBoard = () => {
        setOpeningScreen(true);
        setGameBoard(false);
    };

    const handleSignUp = () => {
        setSignUp(true);
        setNewGame(false);
    };

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

            {openingScreen && <Records openNewGame={openNewGame} />}

            {showButtons && <Buttons handleStartGame={handleStartGame} handleAddPlayer={handleAddPlayer} />}

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

            {profilePage && !newGame && profileData}
        </>
    );
}

export default GetTo100;
