let album = [
    {
        id: 1,
        name: 'Nirvana',
        title: 'Nevermind',
        decade: 90
    }
]

let id = 2

module.exports = {
    getAlbum: ( req, res ) => {
        res.status(200).send(album)
    },
    addAlbum: ( req, res ) => {
        const { name, title, decade } = req.body

        const newAlbum = {
            id,
            name,
            title,
            decade
        }
        album.push(newAlbum)
        id++
        res.status(200).send(album)
    },
updateAlbum: (req, res) => {
    let { id } = req.params
    let { name, title, decade } = req.body
    let index = album.findIndex(s => s.id === +id)
    if(index !== -1) {
        album[index].name = name
        album[index].title = title
        album[index].decade = decade
    }
    res.status(200).send(album)
},

    deleteAlbum: (req, res) => {
        const {id} = req.params
        let index = album.findIndex(s => s.id === +id)

        if(index !== -1) {
            album.splice(index, 1)
        }
        res.status(200).send(album)
    }
}