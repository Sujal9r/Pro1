import React from 'react'
import { Header } from './Navbar'
import { Pro1 } from './Pro1'
import Slider from './Slider'
import { Pro2 } from './Pro2'
import { Footer } from './Footer'
import { Developer } from './Developer'
import  Slider2  from './Slider2'

export default function Landing() {
  return (
    <div>
    <Header/>
    <Pro1/>
    <Slider/>
    <Pro2/>
    <Developer/>
    <Slider2/>
    <Footer/>
    </div>
  )
}
