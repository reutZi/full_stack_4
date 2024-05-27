function Header({title, button, handleClick, profilePage,handleHomePage, openProfilePage}){

    let profileButton = (title === "Get To 100" ? 
        (profilePage ? 
            <button className='header-button' onClick={handleHomePage}>Get To 100</button> :
            <button className='header-button' onClick={openProfilePage}>My Profile</button>) :
        null);

    return (
        <header>
            <p className='header-title' onClick={handleHomePage}>{title}</p>
            <div className="header-buttons-container">
            {profileButton}
            <button className='header-button' onClick = {handleClick}>{button}</button>
            </div>
        </header>
    );
};

export default Header;