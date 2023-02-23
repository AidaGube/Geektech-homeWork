import React from 'react'
import classes from './miniBtns.module.css'

const MiniBtns = ({ children, onClick, id }) => {
    return (
        <button onClick={() => onClick(id)} className={classes.miniBtn}>{children}</button>
    )
}

export default MiniBtns