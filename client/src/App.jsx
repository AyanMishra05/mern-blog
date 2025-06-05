import React from "react";
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Project from './pages/Projects'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

export default function App() {
  return( <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/sign-in" element={<SignIn/>} />
      </Routes>
  </BrowserRouter>
  )
}
