import React from "react"

import ProductContext from "../../context/product"

import "./style.css"

const Header = () => (
  <header className="product-header">
    <h1>Women's Tops</h1>
    {/* The select box with be consuming and modifying the product array */}
    <ProductContext.Consumer>
      {({ products, resetProducts }) => {
        // Function passed for onChange event
        const orderProducts = (event = {}) => {
          if (!event.target || !event.target.value) {
            return
          }

          // Sort the products array and return a fresh copy immutably
          const newProducts = [...products].sort((a, b) =>
            a[event.target.value].localeCompare(b[event.target.value])
          )

          // Reset the products array and trigger update across all consumers
          return resetProducts(newProducts)
        }

        return (
          <select onChange={orderProducts}>
            <option>Filter by...</option>
            <option value="productName">Name</option>
            <option value="price">Price</option>
          </select>
        )
      }}
    </ProductContext.Consumer>
  </header>
)

export default Header
