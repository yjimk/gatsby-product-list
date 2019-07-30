import React from "react"

// Set up initial state, values should be immediately overridden when provider initialised
const defaultState = {
  products: [],
  reorderProducts: () => {},
}

const ProductContext = React.createContext(defaultState)

export default ProductContext
