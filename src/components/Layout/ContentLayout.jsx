import React, { Component } from 'react'
import './ContentLayout.style.css'

export default class ContentLayout extends Component {
  render() {
    return (
      <div className="content">
        { this.props.children }
      </div>
    )
  }
}
