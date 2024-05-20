import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  const [getTo100, setGetTo100] = useState(false);
  const handleClick = ()=>{
    setGetTo100(!getTo100);
  }

  return (
    <div className="App">
      <Header 
          title = {getTo100 ? "Get To 100" : "Text Editor"}
          button = {getTo100 ? "Text Editor" : "Get To 100"}
          handleClick = {handleClick}
      />
      <Content name = {getTo100 ? "Get To 100" : "Text Editor"}/>
      <Footer />
    </div>
  );
}

export default App;
