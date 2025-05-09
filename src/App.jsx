import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Personagens from './page/Personagens'
import Login from './page/Login'
import Profile from './page/Profile'
import Register from './page/Register'

function App() {
  return (
   <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personagens/:franquia/:id" element={<Personagens />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<h1 style={{ marginTop: '100px' }}>404 Page Not Found</h1>} />
      </Routes>
   </div>
  )
}

export default App