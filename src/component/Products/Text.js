import React, { Component } from 'react'

export default class Text extends Component {
  render() {
    return (
      <>
        <div className="text">
          <h3>{this.props.tenSP}</h3>
        </div>
      </>
    )
  }
}
