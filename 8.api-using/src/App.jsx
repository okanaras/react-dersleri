import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const BASE_URL = "http://localhost:3005";
function App() {
  //// Bu ornek async await kullanilmadan ki hali icindir.
  // const getUserById = (userID) => {
  //   axios.get(`${BASE_URL}/users/${userID}`)
  //     .then((response) => {
  //       console.log(response.data);
  //     }).catch((error) => {
  //       console.log("Hata: ", error);
  //     });
  // };


  const getAllUsers = async () => {
    const response = await axios.get(`${BASE_URL}/users`);
    console.log(response.data);
  };

  const getUserById = async (userID) => {
    const response = await axios.get(`${BASE_URL}/users/${userID}`);
    console.log(response.data);
  };

  const createUser = async (newUser) => {
    const donenCevap = await axios.post(`${BASE_URL}/users`, newUser);
    console.log('donenCevap : ', donenCevap.data);
  };

  const updateUser = async (userId, updatedUser) => {
    const response = await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
    console.log(response.data);
  };

  const deleteUserById = async (userId) => {
    const response = await axios.delete(`${BASE_URL}/users/${userId}`);
    console.log(response.data);
  };

  useEffect(() => {
    // getAllUsers();
    // getUserById(2);

    // const newUser = {
    //   "username": "Axios Post Istegi",
    //   "password": "axios"
    // };
    // createUser(newUser);

    // updateUser(2, {
    //   "username": "serkan",
    //   "password": "aras"
    // });

    deleteUserById(2);

  }, []);

  return (
    <div>

    </div>
  )
}

export default App
