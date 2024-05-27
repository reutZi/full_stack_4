import classes from './TextEditor.module.css';


function TextShow({styles, text}){
    console.log(styles.color)
        return (
            <div className = {classes.textErea} style = {styles}  dangerouslySetInnerHTML={{ __html: text }}>
                </div> 
        )
}

export default TextShow;