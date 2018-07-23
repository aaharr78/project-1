import React from 'react'

function ArtistDetails(props){
    return (
        <h3 className= "artistDetails">{props.label}: {props.value}</h3>
        )
}
export default ArtistDetails