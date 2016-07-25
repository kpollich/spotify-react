import React, { Component } from 'react'

export default class Album extends Component {
  render () {
    return (
      <div className="result">
        <img className="result-img" src={this.props.image} />
        <a href={this.props.url}>{this.props.name}</a>
      </div>
    )
  }
}
