import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    console.log('Her zaman calisir.');
  });

  useEffect(() => {
    console.log("Ilk kez render edildiginde calisir");
  }, []);

  useEffect(() => {
    console.log("Ilk kez render edildiginde ve firstName state degeri degistiginde calisir calisir");
  }, [firstName]);

  useEffect(() => {
    console.log("Ilk kez render edildiginde ve lastName state degeri degistiginde calisir calisir");
  }, [lastName]);

  return (
    <>
      <div><button onClick={() => setFirstName('Okan')}>Adi Degistir</button></div>
      <div><button onClick={() => setLastName('Aras')}>Soyadi Degistir</button></div>
    </>
  )
}

export default App
