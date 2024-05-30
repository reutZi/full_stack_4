import classes from './TextEditor.module.css';


function TextShow({styles, text}){
        return (
            //style = {styles}
            <div className = {classes.textErea}   dangerouslySetInnerHTML={{ __html: text }}>
                </div> 
        )
}

export default TextShow;