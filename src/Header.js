import React from 'react'
import logo from './dndLogo.png';

function Header() {
    return(
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h3>5th Edition API Search</h3>
        </header>
    )
}

export default Header