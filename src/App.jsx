import About from './components/About Me/AboutMe'
import Contact from './components/Contact/Contact'
import Cursor from './components/Cursor/Cursor'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Parallax from './components/Parallax/Parallax'
import Portfolio from './components/Portfolio/Portfolio'
import Skills from './components/Skiils/Skills'
import './main.scss'

function App() {

  return (
    <>
      <section id='homepage'>
        <Navbar />
        <Hero />
      </section>
      <section id='About'><Parallax type="AboutMe" /></section>
      <section><About /></section>
      <section><Skills /></section>
      <section id='portfolio'><Parallax type='WhatIDid' /></section>
      <Portfolio />
      <section id='contact'>
        <Contact />
      </section>
      <Cursor />
    </>
  )
}

export default App

