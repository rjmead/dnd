import React from 'react'

class SearchBar extends React.Component{
    constructor() {
        super()
        this.state = {
            searchText: "",
            prevSearches: [],
            searchTopic: "",
            isFetching: false,
            data: {
                0: "test"
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // example of how using arrow functions in class methods doesn't require binding to call setState()
    handleChange = (e) => {
        const {name, value} = e.target

        this.setState({[name]: value})
    }

    // normal class methods require binding in the constructor to call setState()
    handleSubmit(e) {
        e.preventDefault()
        //
        this.setState({isFetching: true})
        fetch("http://www.dnd5eapi.co/api/spells/")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    data: data.results,
                    isFetching: false
                })
            })
        //
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
                <button>Search!</button>

                <br/>
                <br/>
                <br/>
                {JSON.stringify(this.state.data[0])}
                <br/>
                <br/>
                <br/>

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