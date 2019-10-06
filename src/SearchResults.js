import React from 'react'
import SearchResultItem from './SearchResultItem'

function SearchResults(props){
    let search = props.searchText.toLowerCase()

    function buildList(arr){
        // filter the array based on searchText
        let items = arr.filter(item => {
            return item.name.toLowerCase().indexOf(search) !== -1 ? item : null
        })

        // convert spells into an Array of presentable info
        return items.map(item => {
            return <SearchResultItem key={item.url} item={item} />
        })
    }

    let cnvSpells = buildList(props.spellData)
    let cnvEquip = buildList(props.equipData)

    return(
        <div>
            <h1>Search results for {props.searchTopic}:</h1>
            {props.searchTopic === "spells" ? cnvSpells : cnvEquip}
        </div>
    )
}

export default SearchResults