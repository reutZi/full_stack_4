import React from 'react';
import classes from './TextEditor.module.css';

const ToolBar = ({ setStyle }) => {
  const changeFontSize = (e) => setStyle(prev => ({ ...prev, fontSize: e.target.value }));
  const changeFontFamily = (e) => setStyle(prev => ({ ...prev, fontFamily: e.target.value }));
  const changeColor = (e) => setStyle(prev => ({ ...prev, color: e.target.value }));

  function changeBold(e){
    setStyle((prev)=>{
      if(e.target.checked){
          return ({...prev,fontWeight: "bold"})}
        return ({...prev,fontWeight: "normal"})
      })
  } 
  return (
    <div className={classes.toolBar}>

      <label>
        Font Size:
        <select onChange={changeFontSize}>
          <option value="16px">16px</option>
          <option value="18px">18px</option>
          <option value="20px">20px</option>
          <option value="24px">24px</option>
          <option value="28px">28px</option>
          <option value="30px">30px</option>
        </select>
      </label>
      <label>
        Font Family:
        <select onChange={changeFontFamily}>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
        </select>
      </label>
      <label>
        Color:
        <input type="color" onChange={changeColor} />
      </label>
      <label>
        Bold
        <input type ="checkbox" onChange={changeBold} />
      </label>
    </div>
  );
};

export default ToolBar;
