import React from 'react'
import { useNavigate } from 'react-router-dom';

function Product({ product }) {
    const { id, name, price } = product;

    const navigate = useNavigate();

    return (
        <div style={{ marginBottom: '40px', backgroundColor: 'lightseagreen' }}>
            <div>Urun Detayi</div>
            <h3>ISIM : {name}</h3>
            <h3>FIYAT : {price}</h3>

            <button onClick={() => navigate(`/product-details/${id}`)}>DETAYI GOR</button>
        </div>
    )
}

export default Product