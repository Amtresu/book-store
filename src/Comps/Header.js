import React from 'react'
import { Link } from "react-router-dom";
import './style/header.css'

const Header = () =>{ 
    return( 
        <header>
            <h1 className='header-title'>Bookstore</h1>
            <nav>
                <ul className='nav-links'>
                    <li className='nav-link'><Link to ="/">Books</Link></li>
                    <li className='nav-link'><Link to ="/Category">Categories</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header