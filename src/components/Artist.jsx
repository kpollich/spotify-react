import React, { Component } from 'react'

export default class Artist extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="result">
        <img className="result-img" src={this.props.image} />
        <a href={this.props.url}>{this.props.name}</a>
      </div>
    )
  }
}
