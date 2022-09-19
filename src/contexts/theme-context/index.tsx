import { createContext, useState } from 'react'

export const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {}
})

const ThemeContextProvider = ({children}: any) => {

  const [theme, setTheme] = useState('dark')
  
  const toggleTheme = () => {
    if(theme === 'light') return setTheme('dark')
    return setTheme('light')
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>    
  )
}

export default ThemeContextProvider