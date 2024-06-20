import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import { users } from './Login'
import Hello from './Hello'

function App() {

  console.log(users);

  return (
    <div>
      {/* <Login />
      <hr />
      <Login /> */}
      <Hello />
    </div>
  )
}

export default App
