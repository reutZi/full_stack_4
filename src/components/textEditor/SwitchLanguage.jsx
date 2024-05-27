import React from 'react';
import classes from './TextEditor.module.css';

const SwitchLanguage = ({ setLanguage }) => {
  const SwitchLanguage = (e) => setLanguage(e.target.value);

  return (
    <div className ={classes.Language}>
      <button value="en" onClick={SwitchLanguage}>English</button>
      <button value="he" onClick={SwitchLanguage}>עברית</button>
      <button value="emoji" onClick={SwitchLanguage}>Emoji</button>
      <button value="123@#" onClick={SwitchLanguage}>123@# </button>
    </div>
  );
};

export default SwitchLanguage;
