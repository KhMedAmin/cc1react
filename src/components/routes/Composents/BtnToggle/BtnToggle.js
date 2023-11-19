import React, {useContext} from 'react'
import {Context} from '../../context/langContext'
import './stylebtn.css'
export default function BtnToggle() {
    const {toggleTheme, theme} = useContext(Context)

    return (
        <button id='toggle-btn'
            onClick={toggleTheme}
            className={theme ? "btn-toggle dark-btn" : "btn-toggle"}>
            {theme ? "LIGHT" : "DARK"}
        </button>
    )
}

