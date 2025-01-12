import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, SignUp, SignIn } from './templates'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}

export default Router