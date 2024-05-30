import React from 'react';
import classes from './TextEditor.module.css';


let last_stages =[];
const ToolBar = ({ setStyle }) => {
  
  function unDo(){
    if(last_stages.length > 1 ){
        last_stages.pop();
    
        switch(last_stages.at(-1).prop){
          case "font_size":
            console.log(last_stages)
            console.log("size");
            console.log(last_stages)
            setStyle(prev => ({ ...prev, fontSize: last_stages.at(-1).val }));
            break;
          case "font_family":
            console.log("fam");
            setStyle(prev => ({ ...prev, fontFamily: last_stages.at(-1).val }));
            break;
          case "color":
            setStyle(prev => ({ ...prev, color: last_stages.at(-1).val }));
            break;
          case "font_weight":
            console.log(last_stages);
            console.log("weight");
            console.log(last_stages);
            setStyle((prev)=>({...prev,fontWeight: last_stages.at(-1).val}));
          break;
          default:
        
       }
    }
  }

  function changeFontSize(e){ 
    setStyle(prev => {
      last_stages.push({prop:"font_size", val: prev.fontSize });
      return({ ...prev, fontSize: e.target.value })});
  }

  function changeFontFamily(e){
    setStyle(prev =>{ 
      last_stages.push({prop:"font_family",val:prev.fontFamily});
      return({ ...prev, fontFamily: e.target.value })});
  
  }

  function changeColor(e){
    setStyle(prev =>{
      last_stages.push({prop:"color",val:prev.color});
      return ({ ...prev, color: e.target.value })});
  }

  function changeBold(e){
    let temp = e.target.checked ?"bold":"normal";
    setStyle(prev=>{
      last_stages.push({prop:"font_weight",val:prev.fontWeight});
       return({...prev,fontWeight: temp})});
  } 
  return (
    <div className={classes.toolBar}>
      <button onClick={unDo}>UNDO</button>
        <select onChange={changeFontSize}>
          <option value="16px">16px</option>
          <option value="18px">18px</option>
          <option value="20px">20px</option>
          <option value="24px">24px</option>
          <option value="28px">28px</option>
          <option value="30px">30px</option>
        </select>
        <select onChange={changeFontFamily}>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
        </select>
        <input type="color" onMouseLeave={changeColor} />
      <label>
        Bold
        <input type ="checkbox" onChange={changeBold} />
      </label>
    </div>
  );
};

export default ToolBar;
