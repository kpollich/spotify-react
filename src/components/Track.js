import React, { Component } from 'react'

export default class Album extends Component {
  render () {
    return (
      <div className="result-track">
        <a href={this.props.url}>{this.props.name}</a> by <a href={this.props.artists[0].url}>{this.props.artists[0].name}</a>
      </div>
    )
  }
}
