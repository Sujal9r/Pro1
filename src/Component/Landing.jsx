import React from 'react'
import { Header } from './Navbar'
import Pro1 from './Pro1'
import Slider from './Slider'
import { Pro2 } from './Pro2'
import { Footer } from './Footer'
import { Developer } from './Hiring/Developer'
import  Slider2  from './Slider2'
import Flipcard from './Flipcard'

export default function Landing() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
    <Header Redirect={()=>scrollToSection('developer')}/>
    <Pro1/>
    <Slider/>
    <Pro2/>
    <div id='developer'>
    <Developer/>
    </div>
    <Flipcard/>
    <Slider2/>
    <Footer/>
    </div>
    
  )
}
