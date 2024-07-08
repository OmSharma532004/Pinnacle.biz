import React from 'react'
import "./NewHome.scss"
// import {About, Footer,Skills, Work, Header} from '../../container/index'
import {Header, About, Work} from '../../container/index'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import About2 from "./Components/About/About"
import SuccessStories from './Components/Success/SuccessStories'

const Elevate = () => {
  return (
    <div className = "app">
      <Navbar/>
      <div className=' mt-[50px]'>

      </div>
      <Header />
      <About />
     
      <Work />
      <About2 />
      <SuccessStories/>

      <Footer />  
    </div>
  )
}

export default Elevate;