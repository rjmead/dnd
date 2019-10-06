import React from 'react'

class SearchBar extends React.Component{
    constructor() {
        super()
        this.state = {
            searchText: ""
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
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
                <button>Search!</button>
            </form>
        )
    }
}

export default SearchBar