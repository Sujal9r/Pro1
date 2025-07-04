import React from 'react'
import Navbar from '../../components/layout/Navbar/Navbar'
import {Pro1} from './Pro1'
import Slider from './Slider'
import { Pro2 } from './Pro2'
import Pro3 from './Pro3'
import Footer from '../../components/layout/Footer/Footer'
import Developer from './Developer'
import  Slider2  from './Slider2'
import Flipcard from './Flipcard'

export default function Landing() {

  return (
    <div>
    <Navbar/>
    <Pro1/>
    <Slider/>
    <Pro2/>
    <Pro3/>
    <Developer/>
    <Flipcard/>
    <Slider2/>
    <Footer/>
    </div>
    
  )
}
