const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./controller')

const app = express()

app.use(bodyParser.json())

app.get('/api/album', controller.getAlbum)
app.post('/api/album', controller.addAlbum)
app.put('/api/album/:id', controller.updateAlbum)
app.delete('/api/album/:id', controller.deleteAlbum)

const PORT = 3001
app.listen(PORT, () => console.log('Hello', PORT))