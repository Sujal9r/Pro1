import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import {Pro1} from './Pro1'
import Slider from './Slider'
import { Pro2 } from './Pro2'
import  Footer  from '../Footer/Footer'
import { Developer } from '../Hiring/Developer'
import  Slider2  from './Slider2'
import Flipcard from './Flipcard'

export default function Landing() {

  return (
    <div>
    <Navbar/>
    <Pro1/>
    <Slider/>
    <Pro2/>
    <Developer/>
    <Flipcard/>
    <Slider2/>
    <Footer/>
    </div>
    
  )
}
