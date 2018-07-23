import React from 'react'

function ArtistName(props){
    return (
        <h1 className= "artistName" onClick={() => props.patchAlbum(props.album)}>{props.album.name}</h1>
        )
}
export default ArtistName