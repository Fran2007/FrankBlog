import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ToggleTheme'
const Panel = ({ children }) => {

    const theme = useContext(ThemeContext)
    const className = "Panel-" + theme

    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default Panel