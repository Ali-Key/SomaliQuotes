import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SomaliQuotes from './SomaliQuotes/SomaliQuotes'

import Header from './Header/Header'

import Home from './Pages/Home'
import Content from './Pages/Content'
import About from './Pages/About'



function App() {
  return (
    <>
    <Header />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/counten" element={<Content />} />

    </Routes>
    
    {/* <SomaliQuotes /> */}
    </>
  )
}

export default App