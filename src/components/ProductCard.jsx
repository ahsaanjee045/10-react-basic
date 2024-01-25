import React from 'react'

const ProductCard = ({product = {}}) => {
  return (
    <div>
        Product Name : {product.title}
        <img src={product.thumbnail} alt="" />
    </div>
  )
}

export default ProductCard