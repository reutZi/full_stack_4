import React from 'react';
import classes from './TextEditor.module.css';


const Keyboard = ({ language , setText,style}) => {
  
  const keys = (language === 'en'?['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']:
  (language === 'he'? ['א','ב','ג','ד','ה','ו','ז','ח','ט','י','כ','ל','מ','נ','ס','ע','פ','צ','ק','ר','ש','ת']:
  (language === 'emoji'? ['😀','😁','😂','🤣','😃','😄','😅','😆','😉','😊','😋','😎','😍','😘','🥰']:
    "1234567890()-+=!@#$%&*/}{?.,;".split('')
  )));

  function handleButtonClick(e){
    
    let color = style.color;
    let fontWeight = style.fontWeight;
    let fontFamily = style.fontFamily;
    let fontSize = style.fontSize;
    setText(prevText => prevText + `<span style="color:${color}; font-weight:${fontWeight}; font-family:${fontFamily}; font-size:${fontSize};">${e.target.innerHTML}</span>`);
    //setText(prevText => prevText + e.target.innerHTML)
  }


  function handleDelClick() {

    setText((text)=>{
      if(text.endsWith("</br>")){
        return text.slice(0, -"</br>".length);
      }
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = text;
  
      // Find all <span> elements
      const spans = tempDiv.querySelectorAll('span');
      if (spans.length > 0) {
          // Remove the last <span> element
          const lastSpan = spans[spans.length - 1];
          lastSpan.remove();
      }
      return tempDiv.innerHTML
    })
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
