import React from 'react'

import Album from '../components/Album'
import Artist from '../components/Artist'
import Track from '../components/Track'

export default class Utils {
  static getAlbums (albums) {
    return albums.items.map((album) => {
      return <Album
        url={album.external_urls.spotify}
        image={album.images[1]}
        name={album.name}
        key={album.id}
      />
    })
  }

  static getArtists (artists) {
    return artists.items.map((artist) => {
      return <Artist
        url={artist.external_urls.spotify}
        followers={artist.followers.total}
        genres={artist.genres}
        images={artist.images}
        name={artist.name}
        key={artist.id}
      />
    })
  }

  static getTracks (tracks) {
    return tracks.items.map((track) => {
      const album = {
        url: track.album.external_urls.spotify,
        images: track.album.images,
        name: track.album.name,
      }

      const artists = track.artists.map((artist) => {
        return {
          url: artist.external_urls.spotify,
          name: artist.name
        }
      })

      return <Track
        album={album}
        artists={artists}
        url={track.external_urls.spotify}
        name={track.name}
        key={track.id}
      />
    })
  }
}
