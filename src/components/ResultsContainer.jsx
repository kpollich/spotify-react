import React, { Component } from 'react'

import Album from './Album'
import Artist from './Artist'
import Track from './Track'
import Utils from '../utils'

export default class ResultsContainer extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    if ($.isEmptyObject(this.props.data)) {
      return (<i>Search for a song, artist, or album</i>)
    }

    const albums = Utils.getAlbums(this.props.data.albums).slice(10)
    const artists = Utils.getArtists(this.props.data.artists).slice(10)
    const tracks = Utils.getTracks(this.props.data.tracks).slice(10)

    return (
      <div className="results-container">
        <div>
          <h2>Albums</h2>
          {albums}
        </div>
        <div>
          <h2>Artists</h2>
          {artists}
        </div>
        <div>
          <h2>Tracks</h2>
          {tracks}
        </div>
      </div>
    )
  }
}
