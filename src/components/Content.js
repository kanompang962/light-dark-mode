import React, { useContext } from 'react'
import light from '../images/light.svg'
import dark from '../images/dark.svg'
import { ThemeContext } from '../App'

const Content = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <main className={theme === 'dark' ? 'dark' : 'light'}>
            <div>
                <h1>Dave developer Official</h1>
                <p>DarkMode Workshop</p>
            </div>
            <img src={theme === 'dark' ? dark : light} alt='logo' />
        </main>
    )
}

export default Content