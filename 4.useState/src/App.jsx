import { useState } from 'react'
import './App.css'

function App() {

  // useState : hooks
  // degisken tanimliyoruz yukarda string tckn, string fName seklinde
  // php deki public string $name; dedigimiz degiskenlerdir React karsiligi useState hooks tur.
  // Ilk basta "import { useState } from 'react'" seklinde import edilmesi gereklidir

  // tanimlanma sekli
  // const kutu parantez icerisinde degisken, fonksiyon esittir useState('');
  // baslangic degeri useState icerisindeki tirnaklara yazilir

  const [firstName, setFirstName] = useState('Okan');
  const [lastName, setLastName] = useState('Aras');

  const [names, setNames] = useState(["okan", "enes", "ali"]);
  const [userInfo, setUserInfo] = useState({ username: 'OKAN', password: '1234' });
  const [show, setShow] = useState(false);

  const changeName = () => setFirstName('Mehmet');

  const [count, setCount] = useState(0);

  if (count == 15) {
    alert('Hackked by aRasTecH')
  }

  const arttir = () => {
    setCount(count + 1);
  };

  const azalt = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  console.log('comp render edildi');

  return (
    <>
      <div>
        <div>{count}</div>
        <div><button onClick={azalt}>Azalt</button><button onClick={arttir}>Arttir</button></div>
      </div>
      <hr />

      <div>
        {
          show ? <div>{userInfo.username} {userInfo.password}</div> : <div>Show Degeri False</div>
        }
      </div>
      <hr />

      <div>
        <div>{firstName}</div>
        {/* <div style={{ marginTop: '5px', }}><button onClick={() => { setFirstName("Ali") }}>Ismi Degistir</button></div> */}
        <div style={{ marginTop: '5px', }}><button onClick={changeName}>Ismi Degistir</button></div>
      </div>
      <hr />

      <div>
        {
          names.map((name, index) => (
            <div key={index}>{name}</div>
          ))
        }
      </div>
      <hr />

      <div>
        {userInfo.username} {userInfo.password}
      </div>
    </>
  )
}

export default App
