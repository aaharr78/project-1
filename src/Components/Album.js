import React, { Component } from 'react';
import DeleteButton from './DeleteButton';
import axios from 'axios';
import ArtistName from './ArtistName'
import ArtistDetails from './ArtistDetails'

class Album extends Component {

    deleteAlbum = (id) => {
        axios.delete(`/api/album/${id}`).then(results => {
            this.props.updateAlbum(results.data)
        })
    }
    render(){
        const { s } =this.props
        return(
            <div>
                <ArtistName patchAlbum ={this.props.patchAlbum} album={s}/>
                <ArtistDetails label="Title" value={s.title}/>
                <ArtistDetails label="Price $$$" value={s.decade}/>
                <DeleteButton id={s.id} deleteAlbum={this.deleteAlbum}/>
            </div>
        )
    }
}
export default Album