import React, { Component } from 'react'
import productImg from '../../asset/images/w200h200-product.svg'
import './Product.style.css'

export default class Product extends Component {
  render() {
    return (
        <div className="product">
            <img src={productImg} alt="product" />
            <h3>{this.props.name}</h3>
            <div className="market">{this.props.market}</div>
            <div className="price">Price: {this.props.price}</div>
        </div>
    )
  }
}
