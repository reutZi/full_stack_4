import classes from './GetTo100';

function Modal({ children , onClose }){
    return (
     <>
        <div className={classes.backdrop} onClick = {onClose}/>
        <dialog open className={classes.modal}> {children} </dialog>
     </>
    );
};

export default Modal;