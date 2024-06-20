import React from 'react'

// function Product(props) {
function Product({ productName, price }) {
    // console.log(props);
    console.log({ productName, price });
    // const { productName, price } = props; //{ "productName": "Ayakkabi", "price": 3200 }
    return (
        <div>
            <div>URUN BILGILERI</div>
            <div>
                <div>Isim: {productName}</div>
                <div>Fiyat: {price}</div>
            </div>
        </div>
    )
}

export default Product