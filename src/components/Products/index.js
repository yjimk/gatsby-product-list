import React from "react"

import ProductContext from "../../context/product"
import ProductTile from "../ProductTile"

import "./style.css"

const Product = () => (
  // Consume the product array and listen for changes
  <ProductContext.Consumer>
    {({ products }) => (
      <div className="products">
        {/* Avoid type error, if falsy or not an array */}
        {Array.isArray(products) ? (
          products.map(product => (
            <ProductTile key={product.productName} {...product}></ProductTile>
          ))
        ) : (
          // Shouldn't happen for this case, but if the product array is empty, notify the user
          <div>No products found</div>
        )}
      </div>
    )}
  </ProductContext.Consumer>
)

export default Product
