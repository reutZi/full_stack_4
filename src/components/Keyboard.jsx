import React from 'react';
import classes from './TextEditor.module.css';
const Keyboard = ({ language , setText,text}) => {
  const keys = (language === 'en'?['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']:
  (language === 'he'? ['א','ב','ג','ד','ה','ו','ז','ח','ט','י','כ','ל','מ','נ','ס','ע','פ','צ','ק','ר','ש','ת']:
  (language === 'emoji'? ['😀','😁','😂','🤣','😃','😄','😅','😆','😉','😊','😋','😎','😍','😘','🥰']:
    "1234567890()-+=!@#$%&*/}{?.,;".split('')
  )));

  //const keys = language === 'en' ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('') :(language === 'he'? 'אבגדהוזחטיכלמנסעפצקרשת'.split('') : ['😀','😁','😂','🤣','😃','😄','😅','😆','😉','😊','😋','😎','😍','😘','🥰']);
  function handleButtonClick(e){
    setText(prevText => prevText + e.target.innerHTML)
  }

  function handleDelClick() {
    setText((prevText) => {
      if(prevText.endsWith("</br>"))
        {
          return prevText.slice(0, -"</br>".length);
        }
      return prevText.slice(0, -1)});
  }

  function handleEnterClick() {
    setText(prevText => prevText + "</br>");
}

function handleSpClick(){
  setText(prevText => prevText + "  ");
}

return (
  <div className={classes.Keys}>
    <button key="del" onClick ={handleDelClick}>Del</button>
    {keys.map(key => (
      <button key={key} onClick ={handleButtonClick}>{key}</button>
    ))}
    <div className= {classes.keyBottom}>
    <button key="space" onClick={handleSpClick} >Space</button>
    <button key="enter"  onClick={handleEnterClick}>Enter</button>
    </div>
  </div>
  );
};

export default Keyboard;
