import React, { Component } from 'react'

import Utils from '../utils'

export default class ResultsContainer extends Component {
  render () {
    if ($.isEmptyObject(this.props.data)) {
      return (<i>Search for a song, artist, or album</i>)
    }

    const albums = Utils.getAlbums(this.props.data.albums)
    const artists = Utils.getArtists(this.props.data.artists)
    const tracks = Utils.getTracks(this.props.data.tracks)

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
