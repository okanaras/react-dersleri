import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Contact from './pages/Contact';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';

// Routes Route

function App() {

  return (
    <>
      <Header />
      <Routes>
        {/* 2 tane props alir path ve element */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
        {/* eger ki route hicbirisiyle eslesmezse bu component cagrilacak */}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
