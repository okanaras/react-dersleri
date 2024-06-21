import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const BASE_URL = "http://localhost:3005";
function App() {

  const getAllUsers = async () => {
    const response = await axios.get(`${BASE_URL}/users`);
    console.log(response.data);
  };

  const getUserById = async (userID) => {
    const response = await axios.get(`${BASE_URL}/users/${userID}`);
    console.log(response.data);
  };

  // const getUserById = (userID) => {
  //   axios.get(`${BASE_URL}/users/${userID}`)
  //     .then((response) => {
  //       console.log(response.data);
  //     }).catch((error) => {
  //       console.log("Hata: ", error);
  //     });
  // };


  useEffect(() => {
    // getAllUsers();
    getUserById(2);
  }, []);

  return (
    <div>

    </div>
  )
}

export default App
