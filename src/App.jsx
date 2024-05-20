import './App.css';
import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  let getTo100 = false;
  return (
    <div className="App">
      <Header 
          title = {getTo100 ? "Get To 100" : "Text Editor"}
          button = {getTo100 ? "Text Editor" : "Get To 100"}
      />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
