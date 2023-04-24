import React from 'react'
import { useNavigate } from 'react-router-dom'

const MainPage = () => {
    const navigate = useNavigate()
    const goToBack = () => {
        navigate(-1)
    }
    return (
        <>
            <div>MainPage</div>
            <button onClick={goToBack}>
                go to back
            </button>
        </>
    )
}

export default MainPage