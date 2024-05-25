function Header({title, button, handleClick, setProfilePage, setNewGame, setOpeningScreen}){

    const profilePage = () => {
        setOpeningScreen(false);
        setProfilePage(true);
        setNewGame(true);
    }

    let profileButton = (title === "Get To 100" && 
    <button className='header-button' onClick = {profilePage}>My Profile</button>);
   
    return (
        <header>
            <p className='header-title'>{title}</p>
            {profileButton}
            <button className='header-button' onClick = {handleClick}>{button}</button>
        </header>
    );
};

export default Header;