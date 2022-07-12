import React, { Component } from 'react'
import frameImg from '../../asset/images/w720h405-frame.svg'
import './Banner.style.css'

export default class BannerItem extends Component {
    render() {
        return (
            <li className="banner-item">
                <a href="#">
                    <img src={frameImg} alt=""/>
                </a>
            </li>
        )
    }
}
