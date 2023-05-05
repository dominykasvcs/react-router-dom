import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="navigation">
        <div className="logo">

        </div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
        </ul>
    </div>
  )
}

export default Nav