import React, { Component } from 'react'

export default class Artist extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const resultWithoutImage = (
    <div className="artist">
      <h3><a href={this.props.url}>{this.props.name}</a></h3>
    </div>
    )

    if (!this.props.images) {
      return resultWithoutImage
    }

    const image = this.props.images.filter((x) => x.height === 300 && x.width === 300)[0]

    if (!image) {
      return resultWithoutImage
    }

    return (
    <div className="artist">
      <h3><a href={this.props.url}>{this.props.name}</a></h3>
      <img src={image.url} />
    </div>
    )
  }
}
