import React, { Component } from 'react'

export default class Album extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
    <div className="album">
      <h3>
        <a href={this.props.url}>{this.props.name}</a> by <a href={this.props.artists[0].url}>{this.props.artists[0].name}</a>
      </h3>
    </div>
    )
  }
}
