import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/theme-context'
import Gate from './Gate'

type Props = {}

export default function TheUseContext({}: Props) {
    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <>
            <div style={
                {
                    backgroundColor: theme === 'light' ? 'rgba(255, 255, 255, .2)' : 'rgba(0, 0, 0, .2)',
                    padding: 30,
                    borderRadius: 20,
                    margin: 20
                }
            }>
                <h1>Current Theme: {theme}</h1>
                <button onClick={() => toggleTheme()}>Toggle Theme</button>
            </div>
            <Gate/>
        </>
    )
}