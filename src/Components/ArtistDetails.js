import React from 'react'

function ArtistDetails(props){
    return (
        <p class= "artistDetails">{props.label}: {props.value}</p>
        )
}
export default ArtistDetails