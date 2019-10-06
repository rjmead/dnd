import React from 'react'
import SearchResults from './SearchResults'

class SearchBar extends React.Component{
    constructor() {
        super()
        this.state = {
            searchText: "",
            prevSearches: [],
            searchTopic: "",
            isFetching: false,
            spellData: [{ "name": "Spell Data Incoming" }],
            equipData: [{ "name": "Equipment Data Incoming" }]
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // Make call to api to get data after it's mounted
    componentDidMount() {
        // spell data
        this.setState({isFetching: true})
        fetch("http://www.dnd5eapi.co/api/spells/")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    spellData: data.results,
                    isFetching: false
                })
            })

        // equipment data
        this.setState({isFetching: true})
        fetch("http://www.dnd5eapi.co/api/equipment/")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    equipData: data.results,
                    isFetching: false
                })
            })
    }

    // example of how using arrow functions in class methods doesn't require binding to call setState()
    handleChange = (e) => {
        const {name, value} = e.target

        this.setState({[name]: value})
    }

    // normal class methods require binding in the constructor to call setState()
    handleSubmit(e) {
        e.preventDefault()

        this.setState((prevState) => {
            // push new search
            prevState.prevSearches.push(this.state.searchText)
            // create a set so there are no duplicates
            const uniqueSet = new Set(prevState.prevSearches)
            // use spread operator on set to convert back to array
            return {
                searchText: "",
                prevSearches: [...uniqueSet]
            }
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="Search..."
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.handleChange}
                />
                <select name="searchTopic" onChange={this.handleChange} value={this.state.searchTopic}>
                    <option value="Search Topic">Search Topic</option>
                    <option value="spells">Spells</option>
                    <option value="equipment">Equipment</option>
                </select>
                <button>Search! (kinda pointless atm)</button>

                <br/>
                {/*Search Results Here:*/}
                <SearchResults
                    spellData={this.state.spellData}
                    equipData={this.state.equipData}
                    searchText={this.state.searchText}
                />

                <hr/>
                <h3>Debug Zone:</h3>
                {`Search Text: ${this.state.searchText}`}<br/>
                {`Previous Searches: ${this.state.prevSearches.join(",")}`}<br/>
                {`Search Topic: ${this.state.searchTopic}`}<br/>
                {`Fetching?: ${this.state.isFetching}`}<br/>
                <hr/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <p>end of page</p>
            </form>
        )
    }
}

export default SearchBar