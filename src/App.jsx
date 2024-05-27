import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  const [getTo100, setGetTo100] = useState(false);
  const [profilePage, setProfilePage] = useState(false);
  const [newGame, setNewGame] = useState(false);
  const [openingScreen, setOpeningScreen] = useState(true);
  const [gameBoard, setGameBoard] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const handleClick = ()=>{
    setGetTo100(!getTo100);
  }

  const openProfilePage = () => {
    setOpeningScreen(false);
    setProfilePage(true);
    setNewGame(true);
    setGameBoard(false);
    setShowButtons(false);
}

  const handleHomePage = () => {
    if(getTo100){
      setProfilePage(false);
      setOpeningScreen(true); 
      setNewGame(false);
      setGameBoard(false);
      setShowButtons(false);
    }
  }

  return (
    <div className="App">
      <Header 
          title = {getTo100 ? "Get To 100" : "Text Editor"}
          button = {getTo100 ? "Text Editor" : "Get To 100"}
          handleClick = {handleClick}
          profilePage={profilePage}
          handleHomePage={handleHomePage}
          openProfilePage={openProfilePage}
      />
      <Content name = {getTo100 ? "Get To 100" : "Text Editor"} 
                                  profilePage = {profilePage}
                                  newGame={newGame}
                                  setNewGame={setNewGame}
                                  openingScreen={openingScreen}
                                  setOpeningScreen={setOpeningScreen}
                                  setGameBoard={setGameBoard}
                                  gameBoard={gameBoard}
                                  setShowButtons={setShowButtons}
                                  showButtons={showButtons}/>
    </div>
  );
}

export default App;
