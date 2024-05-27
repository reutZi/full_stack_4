import classes from './TextEditor.module.css';
import Keyboard from './textEditor/Keyboard';
import SwitchLanguage from './textEditor/SwitchLanguage';
import React, { useState } from 'react';
import ToolBar from './textEditor/ToolBar';
import TextShow from './textEditor/TextShow';
function TextEditor(){
    const [language, setLanguage] = useState('en');
    const [style, setStyle] = useState({fontSize: '16px', fontFamily: 'Arial', color: '#000000', fontWeight: 'normal' });
    const [text, setText] = useState("");
    return (
        <>
    <TextShow styles = {style} text = {text}/> 
    <div className = {classes.Keyboard}>
        <SwitchLanguage setLanguage={setLanguage} />
        <Keyboard language={language} setText ={setText} text={text}/>
        <ToolBar setStyle={setStyle}/>
    </div>
     </>
    );
};

export default TextEditor;