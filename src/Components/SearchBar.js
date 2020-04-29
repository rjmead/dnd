import React from 'react'
import SearchResults from './SearchResults'
import baseURL from '../Constants'

class SearchBar extends React.Component {
    constructor() {
        super()
        this.state = {
            searchText: "",
            prevSearches: [],
            searchTopic: "",
            isFetching: false,
            spellData: [{"name": "Spell Data Incoming"}],
            equipData: [{"name": "Equipment Data Incoming"}],
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // Make call to api to get data after it's mounted
    componentDidMount() {
        console.log("fetching data from API")
        // spell data
        this.setState({isFetching: true})
        fetch(`${baseURL}/api/spells`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    spellData: data.results,
                    isFetching: false
                })
            })

        // equipment data
        this.setState({isFetching: true})
        fetch(`${baseURL}/api/equipment`)
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
        return (
            <div className="ui container">
                <div className="ui two column centered grid">
                    <form onSubmit={this.handleSubmit} className="SearchBar ui form column">
                        <div className=" fields">
                            <div className="seven wide field">
                                <select
                                    className="ui dropdown"
                                    name="searchTopic"
                                    onChange={this.handleChange}
                                    value={this.state.searchTopic}
                                >
                                    <option value="">Select a Topic</option>
                                    <option value="spells">Spells</option>
                                    <option value="equipment">Equipment</option>
                                </select>
                            </div>
                            <div className="nine wide field">
                                <div className="ui icon input">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        name="searchText"
                                        value={this.state.searchText}
                                        onChange={this.handleChange}
                                    />
                                    <i className="search icon"/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                {/* Divider needs a space to resolve lint warning */}
                <div className="ui divider">&nbsp;</div>
                {/*Search Results Here:*/}
                {this.state.searchTopic ?
                    <SearchResults
                        spellData={this.state.spellData}
                        equipData={this.state.equipData}
                        searchText={this.state.searchText}
                        searchTopic={this.state.searchTopic}
                    />
                    :
                    // Instructions
                    <div className="ui two column centered grid">
                        <div className="ten wide column">
                            <div className="ui large info message">
                                <div className="list">
                                    <div className="item"><i className="info circle icon">&nbsp;</i> You <b>must</b> select a topic (searching ALL will be a future feature)</div>
                                    <div className="item"><i className="info circle icon">&nbsp;</i> Use the search box to filter the results for each topic</div>
                                    <div className="item"><i className="info circle icon">&nbsp;</i> Click button to view modal window of details for each item</div>
                                </div>
                            </div>
                        </div>
                    </div>

                }
            </div>
        )
    }
}

export default SearchBar