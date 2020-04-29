import React from 'react'
import Modal from './Modal'
import baseURL from '../../src/Constants'

class SearchResultItem extends React.Component{
    constructor() {
        super()
        this.state = {
            show: false,
            data: null
        }
    }

    showModal = () => {
        fetch(`${baseURL}${this.props.item.url}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    data: data,
                    show: true
                })
                console.log(this.state.data)
            })
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render(){
        return(
            <li>
                <button className="ui button" type="button" onClick={this.showModal}>{this.props.item.name}</button>
                <Modal show={this.state.show} handleClose={this.hideModal} data={this.state.data} />
            </li>
        )
    }
}

export default SearchResultItem