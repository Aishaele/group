import React from 'react'
import logo from "./img/logo.png"
import search from "./img/search.png"
import icon from "./img/Icon.png"
import styles from './Style/Feature01.css'
// import Dropdown from 'react-bootstrap/Dropdown';

const Features01 = () => {
  return (
    <body>
        <div className='part_01'>
            <div className='Num'>
            <h1 > 01 </h1>
            <h1 className='style_h1'> Accessible for everyone</h1>
            </div>
            <div className='style_01_writeup'>
                <p>
                Our product is designed to serve all users with interactive and 
                 customized <br/> experirence, Users get to personalize the product however they like
                </p>
                <button> Get started</button>
            </div>
        </div>
        <div className='select_page'>
            <div className='places'>
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
                <div className='place_dropdown'> 
                    <img src={icon} alt="" />
                    <h2> Weathery Settings</h2>
                </div>
                
                <div className='weathery_setting'>
                    <div className='Lang_input'>
                    <label htmlFor="Language"> Language</label>
                    <input  type="text" placeholder='Choose preferred language' />
                    <hr />
                    <label htmlFor="Theme"> Theme</label>
                    <input type="text" placeholder='Select preffered mode' />
                    <hr />
                     <label className='help' htmlFor="Language"> Help</label>
                     <hr />
                    </div>
                    <div className='weathery_setting'>
                    <form action="">
                    <select name="place" id="places">
                            <option value="English">English <span> Default</span></option>
                            <option value="عربي <br"><span> Arabic </span>Arabic</option>
                            <option value="saab">Hrvatski <br /><span> Croatian</span></option>
                            <option value="opel">Netherlands <span>Dutch</span></option>
                            <option value="audi">Suomi <span> Finnish</span></option>
                            <option value=""> <li> Francais <br /><span> French </span></li></option>
                            <option value=""> Deutsch <br /><span> German</span></option>
                        </select>
                    </form>
                </div>
                    {/* <div className='Diff_lang'> 
                        <button className='btn btn-primary dropdown-toggle' 
                        type='button' data-toggle='dropdown'>English <p> 
                        Dafault</p> <span className='caret'></span>
                        </button>
                        <ul>
                            <li> English <br /><span> English</span></li>
                            <li> عربي <br /><span> Arabic</span></li>
                            <li> Hrvatski <br /><span> Croatian</span></li>
                            <li> Netherlands <br /><span>Dutch</span></li>
                            <li> Suomi <br /><span> Finnish</span></li>
                            <li> Francais <br /><span> French </span></li>
                            <li> Deutsch <br /><span> German</span></li>
                            <li className='li_color'> Deutsch</li>
                        </ul>
                    </div> */}
                </div>

            </div>
        </div>
    </body>
  )
}

export default Features01