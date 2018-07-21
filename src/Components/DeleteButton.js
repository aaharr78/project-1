import React from 'react'

function DeleteButton(props){
    return (
        <button onClick={() => props.deleteAlbum(props.id)}>Delete Button</button>
        )
}
export default DeleteButton