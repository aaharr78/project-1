import React, { Component } from 'react'
import axios from 'axios';

class Create extends Component {
    constructor(){
        super()
        this.state = {

            name: '',
            title: '',
            decade: '',
            addUpdatedText: "Add new Album"
        }
    }
    componentDidMount(){
        this.props.onRef(this)
    }
    componentWillMount(){
        this.props.onRef(null)
    }
    setAlbum = album => {
        this.setState(album)
        this.setState({addUpdatedText: "Update Album info"})
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
        const {name , title, decade, id } = this.state
        const newAlbum = {name, title, decade}
        if (id === undefined ){
            axios.post('/api/album', newAlbum).then(results => {
                this.props.updateAlbum(results.data)      
            })  
        }else{
            axios.put(`/api/album/${id}`, newAlbum).then(results => {
                this.props.updateAlbum(results.data)
        })
    }
    this.setState({

        name: '',
        title: '',
        decade: '',
        addUpdatedText: 'Add new Album'
    })
        
    }

    render(){
        return(
            <div>
                <input className="AddNewArtist" type="text" placeholder='Artist Name' value={this.state.name} onChange={this.handleName}/>
                <input className="AddNewArtist" type="text" placeholder='Album Title' value={this.state.title} onChange={this.handleTitle}/>
                <input className="AddNewArtist" type="number" placeholder='Price' value={this.state.decade} onChange={this.handleDecade}/>
                <button className="AddNewAlbum" onClick={this.addAlbum}>{this.state.addUpdatedText}</button>
            </div>
        )
    }
}
export default Create