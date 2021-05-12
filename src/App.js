import React from 'react'

import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Interests from './components/Interests'
import Contact from './components/Contact'

import './styles/main.css'
import 'react-slideshow-image/dist/styles.css'


export default function App() {

  return <main>
    <Hero />
    <About />
    <Projects />
    {/* <Interests /> */}
    <Contact />
  </main>

}

