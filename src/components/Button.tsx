
import React from "react"
import { useContext } from "react"
import { ThemeContext } from "./ToggleTheme"

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, className = "", onClick }) => {
    const theme = useContext(ThemeContext)
    const classNames = `${className} Button-` + theme

    return (
        <button className={classNames} onClick={onClick}>
            {children}
        </button>
    );
}

