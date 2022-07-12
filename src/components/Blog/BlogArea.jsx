import React, { Component } from 'react'
import Blog from './Blog'
import './BlogArea.style.css'

export default class BlogArea extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
        <div className="blogs-area">
            <h3>Blogs</h3>
            <div className="blogs">
                {
                    this.props.blogs && 
                    this.props.blogs.map(e => {
                        return <Blog key={'blog-'+e.id}></Blog>
                    })
                }
            </div>
        </div>
    )
  }
}
