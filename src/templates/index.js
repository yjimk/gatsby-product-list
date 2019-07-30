import React, { useState } from "react"

import Header from "../components/Header"
import Products from "../components/Products"
import ProductContext from "../context/product"

import "./style.css"

const IndexPage = ({ pageContext: { products } }) => {
  // Use hooks to store a persistent state that can be modified and passed around the application
  const [productList, resetProductState] = useState(products)

  // Use React Context API function to update state from any consumer component
  const resetProducts = (newProducts = []) => resetProductState(newProducts)

  return (
    <ProductContext.Provider
      value={{
        products: productList,
        resetProducts,
      }}
    >
      <Header />
      <Products />
    </ProductContext.Provider>
  )
}

export default IndexPage
