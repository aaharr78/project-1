import React, { Component } from 'react'
import axios from 'axios';

class Create extends Component {
    constructor(){
        super()
        this.state = {

            name: '',
            title: '',
            decade: ''
        }
    }

    handleName = (e)=> {
        this.setState({name: e.target.value})
    }
    handleTitle = (e) => {
        this.setState({title: e.target.value})
    }
    handleDecade = (e) => {
        this.setState({decade: e.target.value})
    }

    addAlbum = () => {
        const {name , title, decade} = this.state
        const newAlbum = {name, title, decade}
        axios.post('/api/album', newAlbum).then(results => {
            this.props.updateAlbum(results.data)
        })
    }

    render(){
        return(
            <div>
                <input type="text" placeholder='Artist Name' value={this.state.name} onChange={this.handleName}/>
                <input type="text" placeholder='Album Title' value={this.state.Title} onChange={this.handleTitle}/>
                <input type="number" placeholder='Decade' value={this.state.decade} onChange={this.handleDecade}/>
                <button onClick={this.addAlbum}>Add New Artist</button>
            </div>
        )
    }
}
export default Create