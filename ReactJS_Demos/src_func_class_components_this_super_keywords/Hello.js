


import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Hello extends Component {
  static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string
  }

  render() {
    return (
      <div>
        
        <h1>Id:{this.props.id}   Name: {this.props.name }</h1>

      </div>
    )
  }
}

