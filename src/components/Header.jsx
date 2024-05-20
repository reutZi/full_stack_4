function Header({title, button, handleClick}){
   
    return (
        <header>
            <p className='header-title'>{title}</p>
            <button className='header-button' onClick = {handleClick}>{button}</button>
        </header>
    );
};

export default Header;