import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Album from './Components/Album';
import Create from './Components/Create';

class App extends Component {
  constructor(){
    super()
    this.state = {
      album: []
    }
  }

  componentDidMount(){
    axios.get('/api/album').then(results => {
      this.setState({album: results.data})
    })
  }

  updateAlbum = (album) => {
    this.setState({album})
  }

  render() {
    let albumMap = this.state.album.map(s => {
      return <Album key={s.id} updateAlbum={this.updateAlbum} s={s} />
    })
    return (
      <div className="App">
        <Create updateAlbum={this.updateAlbum}/>
        {albumMap}
      </div>
    );
  }
}

export default App;
