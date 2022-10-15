import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa';


const Header = () => {
  return (
    <div className='header'>
        <Link to="/"><h2>All images</h2></Link>
        <Link  to= "/favorites" className="fas fa-heart fa-3x"></Link>
    </div>
  )
}

export default Header