import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Blog from './components/Blog'
import Experience from './components/Experience'
import Recommendations from './components/Recommendations'
import CareerHighlights from './components/CareerHighlights'
import FloatingNav from './components/FloatingNav'

function App() {
  return (
    <div className="app">
      <Hero />
      <CareerHighlights />
      <Experience />
      <Blog />
      <Recommendations />
      <FloatingNav />
    </div>
  )
}

export default App
