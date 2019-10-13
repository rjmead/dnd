import React from 'react'

function Header() {
    return(
        <header className="App-header">
            <img src={process.env.PUBLIC_URL + "/dndLogo.png"} className="App-logo" alt="logo" />
            <h3>5th Edition API Search</h3>
        </header>
    )
}

export default Header