import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <ul style={{ display: 'flex', listStyleType: ' none' }}>
            <li style={{ marginRight: "20px" }}>
                <NavLink className="link"  to='/'>Main Page</NavLink>
            </li>
            <li style={{ marginRight: "20px" }}>
                <NavLink className="link" to='/about'>About Page</NavLink>
            </li>
            <li style={{ marginRight: "20px" }}>
                <NavLink className="link" to='/contacts'>Contacts Page</NavLink>
            </li>
            <li style={{ marginRight: "20px" }}>
                <NavLink className="link" to='/user'>Users Page</NavLink>
            </li>
        </ul>
    )
}

export default NavBar