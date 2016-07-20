import React, { Component } from 'react'

export default class Artist extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const image = this.props.images.filter((x) => x.height === 300 && x.width === 300)[0]
    const imageUrl = image ? image.url : '/spotify-logo.png'

    return (
      <div className="result">
        <img className="result-img" src={imageUrl} />
        <a href={this.props.url}>{this.props.name}</a>
      </div>
    )
  }
}
