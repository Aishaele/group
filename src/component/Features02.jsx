import React from 'react'
import logo from "./img/logo.png"
import search from "./img/search.png"
import Picture from './Picture'
import styles from './Style/Feature02.css'



const Features02 = () => {
  return (
    <body>
        <div className='part_01'>
          
           <div className='Num'>
            <h1 > 02 </h1>
            <h1 className='style_h1'> Everything you need </h1>
            </div>
            <div className='style_01_writeup'>
                <p>
                Get all the infos you need to make living safer, easier and better. We aim at
                <br /> making life easier and better for our users 
                </p>
                <button> Get started</button>
            </div>
            <div className='select_page1'>
            <div className='places2'>
            <nav>
                    <div className='logo'>
                    <img src={logo} alt="" />
                    <h1> Weathery</h1>
                    </div>
                    <div className='search'>
                        <img src={search} alt="" />
                        <input type="text" placeholder='Choose a Location'/>
                        <button> Search </button>
                    </div>
                    <a href="/"> Weather settings</a>
                </nav>
    </div>
    <Picture/>
    </div>   
    </div>
      
    </body>
  )
}

export default Features02