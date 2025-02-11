import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/Home'
import Lts from './components/Lts'
import Lfs from './components/Lfs'
import LS from './components/LS'
import Login from './components/Login'
import Signup from './components/Signup'
import Showlts from './components/Showlts'
export default function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lts" element={<Lts />} />
        <Route path="/lfs" element={<Lfs />} />
        <Route path="/ls" element={<LS />} />  
        <Route path="/login" element={<Login/>} />  
        <Route path="/signup" element={<Signup/>} />  
        <Route path="/Showlts" element={<Showlts/>} />  
      </Routes>
    </Router>
    
    </>
  )
}
