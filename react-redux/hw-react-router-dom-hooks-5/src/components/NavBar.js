import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <ul className='links'>
                <li> <NavLink to="/">Главная</NavLink></li>
                <li>  <NavLink to='/posts'>Посты</NavLink></li>
            </ul>
        </>
    )
}

export default NavBar