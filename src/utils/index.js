import React from 'react'

import Album from '../components/Album'
import Artist from '../components/Artist'
import Track from '../components/Track'

const spotifyLogoUrl = 'http://www.freeiconspng.com/uploads/spotify-icon-26.png'

// Contains methods for marshaling Spotify's responses into data
// we can use for our components
export default class Utils {
  static getAlbums (albums) {
    return albums.items.map((album) => {
      const image = album.images[0]
      const imageUrl = image ? image.url : spotifyLogoUrl

      return <Album
        url={album.external_urls.spotify}
        image={imageUrl}
        name={album.name}
        key={album.id}
      />
    })
  }

  static getArtists (artists) {
    return artists.items.map((artist) => {
      const image = artist.images[0]
      const imageUrl = image ? image.url : spotifyLogoUrl

      return <Artist
        url={artist.external_urls.spotify}
        followers={artist.followers.total}
        image={imageUrl}
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
