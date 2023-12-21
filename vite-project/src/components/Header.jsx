import React from 'react'
import logo from "../assets/images/Logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBell, faUserPlus, faPlay, faStar } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <>
    <div className='header'>
    <div className="navbar">
    <div className="container">
      <div className="row">
        <div className="col-2">
          <img src={logo} alt="" />
        </div>
        <div className="col-4">
          <ul>
            <li><a href="#!">Home</a></li>
            <li><a href="#!">TV Show</a></li>
            <li><a href="#!">Movies</a></li>
            <li><a href="#!">Series</a></li>
          </ul>
        </div>
        <div className="col-2">
        <ul>
          <li className='nav-search'><FontAwesomeIcon icon={faSearch}/></li>
          <li className='nav-search'><FontAwesomeIcon icon={faBell}/> </li>
          <li className='nav-search'><FontAwesomeIcon icon={faUserPlus}/> </li>
        </ul>
        </div>
      </div>
    </div>
    </div>
    <div className="head">
      <h1>Night Watch</h1>
      <p>2021<span>18+</span>9 Seconds<FontAwesomeIcon id='star' icon={faStar}/>8.8</p>
      <p id='lorem'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex unde incidunt sequi earum, laboriosam sapiente officia vel quidem maxime, possimus, animi nemo.</p>
      <div className="btn">
        <button><FontAwesomeIcon id='play' icon={faPlay}/>Watch</button>
        <button>More information</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default Header