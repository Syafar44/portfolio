import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'animate.css';

import Nav from './components/Nav'
import Background from './components/Background'

import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'


const App = () => {
  return (
    <Router>
      <Nav />
      <Background />
      <Routes>
        <Route path="/portfolio" element={<Hero />}/>
        <Route path="/portfolio/About" element={<About />}/>
        <Route path="/portfolio/Project" element={<Project />}/>
        <Route path="/portfolio/Contact" element={<Contact />}/>
      </Routes>
    </Router>
  )
}

export default App
