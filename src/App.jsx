import React from 'react'
import Navbar from './components/navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Experiance from './components/Experiance'
import { Toaster } from 'react-hot-toast'
import Demo from './components/Demo'
function App() {
  return (
   <>
    {/* <div>App hellp hhzulfe</div> */}
  <div>
  <Navbar/>
    <Home/>
    <About/>
  <Portfolio/>
  {/* <Experiance/> */}
  <Contact/>
  <Footer/>
  <Demo/>
  
  </div>
  <Toaster/>
   </>
  )
}

export default App