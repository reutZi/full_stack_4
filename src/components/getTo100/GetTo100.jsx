import React, { useState, useEffect } from 'react';
import Records from './Records';
import Modal from './Modal';
import Registration from './Registration';
import classes from './GetTo100.module.css';
import GameBoard from './GameBoard';
import Buttons from './Buttons';
import SignUp from './SignUp';
import Profile from './Profile';

/**
 * Component for the GetTo100 game.
 * @param {Object} props - The component props.
 * @param {boolean} props.profilePage - Indicates if the profile page is active.
 * @param {boolean} props.newGame - Indicates if a new game is started.
 * @param {function} props.setNewGame - Function to set the new game state.
 * @param {boolean} props.openingScreen - Indicates if the opening screen is shown.
 * @param {function} props.setOpeningScreen - Function to set the opening screen state.
 * @param {function} props.setGameBoard - Function to set the game board state.
 * @param {boolean} props.gameBoard - Indicates if the game board is shown.
 * @param {function} props.setShowButtons - Function to set the show buttons state.
 * @param {boolean} props.showButtons - Indicates if the buttons are shown.
 * @param {function} props.setPlayers - Function to set the players state.
 * @param {Array} props.players - The list of players.
 * @returns {JSX.Element} The GetTo100 component.
 */
function GetTo100(props) {
    const {
        profilePage,
        newGame,
        setNewGame,
        openingScreen,
        setOpeningScreen,
        setGameBoard,
        gameBoard,
        setShowButtons,
        showButtons,
        setPlayers,
        players
    } = props;

    const [gameStarted, setGameStarted] = useState(false);
    const [users, setUsers] = useState([]);
    const [activePlayerIndex, setActivePlayerIndex] = useState(0);
    const [signUp, setSignUp] = useState(false);
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        loadUsers();
    }, []);

    /**
     * Load users from local storage.
     */
    const loadUsers = () => {
        const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
        setUsers(storedUsers);
    };

    /**
     * Save users to local storage.
     * @param {Array} updatedUsers - The updated list of users.
     */
    const saveUsers = (updatedUsers) => {
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        setUsers(updatedUsers);
    };

    /**
     * Add an ID to each player in the players array.
     */
    const addIdToPlayers = () => {
        setPlayers(players.map((player, index) => ({
            ...player,
            id: index
        })));
    };

    /**
     * Check if a username already exists.
     * @param {string} userName - The username to check.
     * @returns {boolean} True if the username is available, false otherwise.
     */
    const checkUserName = (userName) => {
        if (users.some((user) => user.userName === userName)) {
            alert("Username already exists. Please choose another one.");
            return false;
        }
        return true;
    };

    /**
     * Check if a password is valid.
     * @param {string} password - The password to check.
     * @param {string} passwordValid - The password to validate against.
     * @returns {boolean} True if the password is valid, false otherwise.
     */
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

    /**
     * Add a new user to the game.
     * @param {string} userName - The username of the new user.
     * @param {string} password - The password of the new user.
     * @param {string} passwordValid - The password to validate against.
     */
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

    /**
     * Submit the login form.
     * @param {string} userName - The username entered in the form.
     * @param {string} password - The password entered in the form.
     */
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

    /**
     * Open a new game.
     */
    const openNewGame = () => {
        setSignUp(false);
        setNewGame(true);
        setOpeningScreen(false);
    };

    /**
     * Handle the start game button click.
     */
    const handleStartGame = () => {
        setShowButtons(false);
        setGameStarted(true);
        addIdToPlayers();
    };

    /**
     * Handle the add player button click.
     */
    const handleAddPlayer = () => {
        setNewGame(true);
        setShowButtons(false);
    };

    /**
     * Move to the next turn.
     */
    const nextTurn = () => {
        setActivePlayerIndex((prevIndex) => {
            const index = players.findIndex(player => player.id === prevIndex);
            return index === players.length - 1 ? players[0].id : players[index + 1].id;
        });
    };

    /**
     * Add a score to a user.
     * @param {string} userName - The username of the user.
     * @param {number} score - The score to add.
     */
    const addScore = (userName, score) => {
        const updatedUsers = users.map(user => {
            if (user.userName === userName) {
                return { ...user, scores: [...user.scores, score] };
            }
            return user;
        });
        saveUsers(updatedUsers);
    };

    /**
     * Remove a player from the game.
     * @param {string} userName - The username of the player to remove.
     */
    const removePlayer = (userName) => {
        if (players.length === 1) {
            emptyBoard();
        } else {
            setPlayers(players.filter(player => player.userName !== userName));
        }
    };

    /**
     * Empty the game board and show the opening screen.
     */
    const emptyBoard = () => {
        setOpeningScreen(true);
        setGameBoard(false);
    };

    /**
     * Handle the sign up button click.
     */
    const handleSignUp = () => {
        setSignUp(true);
        setNewGame(false);
    };

    return (
        <>
            {newGame && (
                <Modal>
                    <div className={classes.game_grid}>
                        <Registration submit={submit} handleSignUp={handleSignUp} profilePage={profilePage} />
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
