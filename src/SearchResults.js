import React from 'react'

function SearchResults(props){
    //let spells = props.spellData
    //let equipment = props.equipData
    let search = props.searchText.toLowerCase()

    // filter the spells based on searchText
    let spells = props.spellData.filter(spell => {
        return spell.name.toLowerCase().indexOf(search) !== -1 ? spell : null
    })

    // convert spells into an Array of presentable info
    let cnvSpells = spells.map(spell => {
        return <li><b>{spell.name}</b> <a href={spell.url} target="_blank" rel="noopener noreferrer">Link</a></li>
    })

    return(
        <div>
            <h1>Search Results:</h1>
            {cnvSpells}
        </div>
    )
}

export default SearchResults