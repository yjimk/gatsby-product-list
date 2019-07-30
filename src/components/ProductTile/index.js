import React from "react"

import "./style.css"

const ProductTile = ({
  isExclusive,
  isSale,
  price,
  productImage,
  productName,
  size,
}) => (
  <section className="product-tile">
    <div className="product-image">
      {/* If no image provided, display nothing, should be replaced with a placeholder */}
      {productImage && <img src={`/${productImage}`} alt={productName}></img>}
    </div>
    <div className="specials">
      {/* Item could be both on sale and exclusive */}
      {isExclusive === true && <div className="exclusive">Exclusive</div>}
      {isSale === true && <div className="sale">Sale</div>}
    </div>
    <div className="detail">
      <div className="name">{productName || ""}</div>
      <div className="price">{price || ""}</div>
      {/* 'Size' not in design, but probably should go here */}
    </div>
  </section>
)

export default ProductTile
