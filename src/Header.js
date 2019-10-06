import React from 'react'
import logo from './dndLogo.png';

function Header() {
    return(
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h3>Welcome to the DnD5e Api Search</h3>
        </header>
    )
}

export default Header