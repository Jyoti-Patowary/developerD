import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Landing from '@/components/LandingPage'
import Letstalk from '@/components/Letstalk'
import Navbar from '@/components/Navbar'
import Skills from '@/components/Skills'
import Portfolio from '@/components/portfolio'
import React from 'react'

function Main() {
  return (
   <>
      {/* <Navbar/> */}
      <Landing/>
      {/* <About/> */}
      <Experience/>
      <Portfolio/>
      <Skills/>
      <Letstalk/>
      <Contact/>
      <Footer/>
   </>
  )
}

export default Main