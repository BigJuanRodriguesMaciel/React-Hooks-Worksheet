import './App.css'
import { BrowserRouter as TheRouter, Route, Routes } from 'react-router-dom'
import TheUseState from './components/TheUseState'
import TheUseEffect from './components/TheUseEffect'
import Gate from './components/Gate'
import TheUseRef from './components/TheUseRef'
import TheUseReducer from './components/TheUseReducer'
import TheUseReducer2 from './components/TheUseReducer2'
import TheUseContext from './components/TheUseContext'
import TheUseLayoutEffect from './components/TheUseLayoutEffect'
import TheUseCallback from './components/TheUseCallback'
import TheUseMemo from './components/TheUseMemo'
import ThemeContextProvider from './contexts/theme-context'

function App() {
  return (
    <>
        <TheRouter>
          <Routes>
            <Route path='/' element={<Gate/>} />
            <Route path='/use-state' element={<TheUseState/>} />
            <Route path='/use-effect' element={<TheUseEffect/>} />
            <Route path='/use-ref' element={<TheUseRef/>} />
            <Route path='/use-reducer' element={<TheUseReducer/>} />
            <Route path='/use-reducer/2' element={<TheUseReducer2/>} />
            <Route path='/use-context' element={
              <ThemeContextProvider>
                <TheUseContext/>
              </ThemeContextProvider>} 
            />
            <Route path='/use-memo' element={<TheUseMemo/>} />
            <Route path='/use-callback' element={<TheUseCallback/>} />
            <Route path='/use-layout-effect' element={<TheUseLayoutEffect/>} />
          </Routes>
        </TheRouter>
    </>
  )
}

export default App
