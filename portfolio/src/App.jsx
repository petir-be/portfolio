import { useState } from 'react'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Works from './components/Works'
import Contact from './components/Contact'  
import About from './components/About'
import './App.css'

function App() {

  return (
    <>
      <title>Kurt Ereño</title>
      <link rel="icon" type="image/png" href="./assets/favicon.ico" />
      <Navigation/>
      <Home/>
      <Works/>
      <About/>
      <Contact/>
    </>
  )
}

export default App
