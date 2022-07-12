import React, { Component } from 'react'
import blogImg from '../../asset/images/w400h250-blog.svg'
import './Blog.style.css'

export default class Blog extends Component {
    render() {
        return (
            <div className="blog">
                <img src={blogImg} alt="blog" />
                <p>blog content.blog content.blog content.blog content.blog content.blog content.blog content.blog content.blog content.blog content.blog content.blog content.blog content.blog content.</p>
            </div>
        )
    }
}
