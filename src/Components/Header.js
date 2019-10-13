import React from 'react'

function Header() {
    return(
        <header className="App-header">
            <img src={process.env.PUBLIC_URL + "/logoRed.png"} className="App-logo" alt="logo" />
        </header>
    )
}

export default Header