import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  /// return den onceki kisimlara js kodlari yazilir.
  let a = 15;
  const firstName = "Enes";

  let vize1 = 60;
  let vize2 = 80;
  let final = 50;
  let sonuc = (vize1 * 0.3) + (vize2 * 0.3) + (final * 0.4);

  let isimler = ['Okan', 'Enes', 'Ali'];

  return (
    /// Burada ise hmtl kodlari ve yukarda tanimlanan degiskenler de jsx:{} seklinde yazilir
    <div>
      {/* <p>a degiskeninin degeri : {a}</p>
      <p>Musterinin adi : {firstName}</p> */}
      {/* <p>{sonuc > 70 ? 'Tebrikler Gectiniz' : 'Maalesef, kaldiniz.'}</p> */}
      {
        isimler.map((name, index) => (
          <p style={{ color: 'orange', border: '1px solid black' }} key={index}>{name}</p>
        ))
      }
    </div>
  )
}

export default App
