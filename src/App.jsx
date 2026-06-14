
import Home from './component/home'
import About from './component/about'
import Topnavbar from './component/topnavbar'
import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Store from './component/store'
import Productdetails from './component/productdetails'

function App() {


  return (
    <>

      <BrowserRouter>
        <Topnavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route
            path="/store/:id"
            element={<Productdetails />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
