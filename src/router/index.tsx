import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '@views/home'
import About from '@views/about'
import { Counter } from '@views/counter'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/counter" element={<Counter />} />
    </Routes>
  )
}

export default Router
