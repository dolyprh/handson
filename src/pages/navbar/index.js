import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <div className='sidebar'>
            <div>
                <img alt=''/>
            </div>
            <ul>
                <li>
                    <Link to="/" className='link'
                        color="primary"
                        underline="none"
                    >Home</Link>
                </li>
                <li>
                    <Link to="/search" className='link' 
                        color="primary"
                        underline="none"
                    >Seacrh</Link>
                </li>
                <li>
                    <Link to="/Trending" className='link'
                        color="primary"
                        underline="none"
                    >Trending</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
