import React from 'react'
import ProductComp from '../components/Product';
import { products } from '../data/products';

function Product() {
    return (
        <div>
            {
                products && products.map((product) => (
                    <ProductComp key={product.id} product={product} />
                ))
            }
        </div>
    )
}

export default Product