import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  const [getTo100, setGetTo100] = useState(false);
  const [profilePage, setProfilePage] = useState(false);
  const [newGame, setNewGame] = useState(false);
  const [openingScreen, setOpeningScreen] = useState(true);

  const handleClick = ()=>{
    setGetTo100(!getTo100);
  }

  return (
    <div className="App">
      <Header 
          title = {getTo100 ? "Get To 100" : "Text Editor"}
          button = {getTo100 ? "Text Editor" : "Get To 100"}
          handleClick = {handleClick}
          setProfilePage = {setProfilePage}
          setNewGame ={setNewGame}
          setOpeningScreen = {setOpeningScreen}
      />
      <Content name = {getTo100 ? "Get To 100" : "Text Editor"} 
                                  profilePage = {profilePage}
                                  newGame={newGame}
                                  setNewGame={setNewGame}
                                  openingScreen={openingScreen}
                                  setOpeningScreen={setOpeningScreen}/>
    </div>
  );
}

export default App;
