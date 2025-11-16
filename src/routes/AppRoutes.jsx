import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Services from '../pages/Services'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Portfolio from '../pages/Portfolio'
// keep Projects if needed elsewhere; Portfolio is the primary showcase page

/**
 * AppRoutes - Central route definitions for the app.
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* fallback to home for unknown routes */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
