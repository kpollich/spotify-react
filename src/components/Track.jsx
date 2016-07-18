import React, { Component } from 'react'

export default class Album extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
    <div className="album">
      <h3><a href={this.props.url}>{this.props.name}</a></h3>
    </div>
    )
  }
}
