import React from 'react'

function ArtistName(props){
    return (
        <h1 class= "artistName" onClick={() => props.patchAlbum(props.album)}>{props.album.name}</h1>
        )
}
export default ArtistName