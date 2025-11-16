import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Services from '../pages/Services'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Projects from '../pages/Projects'
import Team from '../pages/Team'

/**
 * AppRoutes - Central route definitions for the app.
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/team" element={<Team />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
