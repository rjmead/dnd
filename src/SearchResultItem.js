import React from 'react'
import Modal from './Modal'

class SearchResultItem extends React.Component{
    constructor() {
        super()
        this.state = {
            show: false,
            data: null
        }
    }

    showModal = () => {
        fetch(this.props.item.url)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    data: data,
                    show: true
                })
            })
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render(){
        return(
            <li>
                <b>{this.props.item.name}</b>
                <button type="button" onClick={this.showModal}>Open Details</button>
                {/*<a href={this.props.item.url} target="_blank" rel="noopener noreferrer">Link</a>*/}
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    {JSON.stringify(this.state.data, null, 2)}
                </Modal>
            </li>
        )
    }
}

export default SearchResultItem