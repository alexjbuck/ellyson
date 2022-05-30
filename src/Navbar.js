import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar-header">
        <nav className='navbar'>
            <ul className='navbar-nav'>
                <li className='navbar-item'>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <div className='navbar-container'>
                <ul className="navbar-nav ml-auto">
                    <li className='navbar-item'>
                        <Link to="/about">About</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/resources">Resources</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}
