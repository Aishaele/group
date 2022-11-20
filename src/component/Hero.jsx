import React from 'react'
import heroToolbar from "./img/heroToolbar.png"
import heroimg from "./img/heroimg.png"
import styles from "./Style/Hero.css"
const Hero = () => {
  return (
   <body>
    <div className='hero'>
    <div className='hero_writeup'>
        <h3 className='feature_line'> FEATURES</h3>
        <h1> Explore features <br/> of Weatherly </h1>
        <p>Stay informed about weather events and 
        <br /> protected with Weathery forecasts in real-time.</p>
        <div className='buttom_'>
            <button className='button'> Get started</button>
            <a className='dot_button' href="/"> View all features</a>
        </div>
    </div>
    <div className='feature_img'>
        <img src={heroToolbar} alt="" />
        <img src={heroimg} alt="" />
    </div>
    </div>
   </body>
  )
}

export default Hero