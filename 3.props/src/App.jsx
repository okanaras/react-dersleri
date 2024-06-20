import { useState } from 'react'

import './App.css'
import Product from './Product'
import Container from './Container';

function App() {
  const productName = "Buzdolabi";
  return (
    <>
      {/* <div>
        <Product productName="Ayakkabi" price={3200} />
        <hr />
        <Product productName="Pantolon" price={800} />
        <hr />
        <Product productName={productName} price={15000} />
        <hr />
        <hr />
        <hr />
      </div> */}

      <div>
        <Container>
          <Product productName="Telefon" price={20500} />
        </Container>
      </div>

    </>
  )
}

export default App
