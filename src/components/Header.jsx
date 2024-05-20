import React from 'react';

function Header({title, button}){
    return (
        <header>
            <p className='header-title'>{title}</p>
            <button className='header-button'>{button}</button>
        </header>
    );
};

export default Header;