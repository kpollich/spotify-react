import React, { Component } from 'react'

export default class Artist extends Component {
  render () {
    return (
      <div className="result">
        <img className="result-img" src={this.props.image} />
        <a href={this.props.url}>{this.props.name}</a>
        <span className="followers">{this.props.followers} followers</span>
      </div>
    )
  }
}
