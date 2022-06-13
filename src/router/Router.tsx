import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '@views/home/Home'
import About from '@views/about/About'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default Router
