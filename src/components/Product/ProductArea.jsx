import React, { Component } from 'react'
import Product from './Product'
import './ProductArea.style.css'

export default class ProductArea extends Component {
  render() {
    return (
        <div className="products-area">
            <h3>Products</h3>
            <div className="products">
                {
                    this.props.products.map(e => {
                        return <Product key={'product-'+e.id} name={e.name} market={e.market} price={e.price}></Product>
                    })
                }
            </div>
        </div>
    )
  }
}
