import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products';
import Product from '../components/Product';

function ProductDetails() {

    const { id } = useParams();
    // console.log(id);
    return (
        <div>
            <h1>Urun Detaylari</h1>
            <hr />
            {
                products && products.map((product) => {
                    if (product.id == id) {
                        return <Product key={id} product={product} />
                    }
                })
            }
        </div>
    )
}

export default ProductDetails