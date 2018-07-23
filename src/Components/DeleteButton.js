import React from 'react'

function DeleteButton(props){
    return (
        <button className= "DeleteButton" onClick={() => props.deleteAlbum(props.id)}>Album Sold</button>
        )
}
export default DeleteButton