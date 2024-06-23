import React from 'react'
import ProductComponent from '../components/Product';
import { products } from '../data/products';

function Product() {
    return (
        <div>
            <h1>URUNLER</h1>
            <hr />
            {
                products && products.map((product) => (
                    <ProductComponent key={product.id} product={product} />
                ))
            }
        </div>
    )
}

export default Product