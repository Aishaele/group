import React from 'react'
import Icon1 from "./img/Icon (1).png"
import Icon2 from "./img/Icon (2).png"
import Icon4 from "./img/Vector (4).png"

const BoxMage1 = () => {
  return (
    <body>
      <div className='box-mage'>
        <div className='box'>
          <img src={Icon1} alt="" />
          <h4> Free</h4>
          <p> The Weathery app is free to use. <br /> it is easy to 
            navigate and seamless to use. 
            </p>
        </div>
        <div className='box'>
          <img src={Icon2} alt="" />
          <h4>Smart Notification alerts </h4>
          <p> Weathery precise alert notifications <br /> keep you 
            updated on recent weather changes  <br /> to help you prepare
            for a downpour <br /> or protect yourself <br /> from heat strokes 
            or high UV rays </p>
        </div>
        <div className='box'>
          <img src={Icon4} alt="" />
          <h4>Daily notifications </h4>
          <p> would you like to know <br /> how the weather will be 
          <br />in these exact moments, hours, <br /> or perhaps the 
          entire day? <br />Weathery notifies you of the <br />
           weather base on every weather change.  , 
            </p>
        </div>
      </div>
    </body>

  )
}

export default BoxMage1