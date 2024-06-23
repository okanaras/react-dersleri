import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function Product({ product }) {
    const { id, name, price } = product;

    const navigate = useNavigate();
    const location = useLocation();

    const currentPath = location.pathname;
    const isDetailPage = currentPath === `/product-details/${id}`;
    // const isDetailPage = currentPath.includes("product-details");

    return (
        <div style={{ marginBottom: '40px', backgroundColor: 'lightseagreen' }}>
            <div>Urun Detayi</div>
            <h3>ISIM : {name}</h3>
            <h3>FIYAT : {price}</h3>

            {isDetailPage ? <button onClick={() => navigate(`/product`)}>GERI DON</button> :
                <button onClick={() => navigate(`/product-details/${id}`)}>DETAYI GOR</button>
            }
        </div>
    )
}

export default Product