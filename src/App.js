import React from 'react'
import GlobalStyle from './globalStyles'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './Components/Themes'
import { Route, useLocation } from 'react-router'
import { Routes } from 'react-router'


//components
import Main from './Components/Main';
import MySkillsPage from './Components/MySkillsPage'
import AboutPage from './Components/AboutPage'
import BlogPage from './Components/BlogPage'
import WorkPage from './Components/WorkPage'
import { AnimatePresence } from 'framer-motion'
import SoundBar from './subComponents/SoundBar'


const App = () => {

  const location = useLocation();

  return (
    <>

    <GlobalStyle/>

    <ThemeProvider theme={lightTheme}>

      <SoundBar/>

      <AnimatePresence  >
      <Routes location={location} key={location.pathname} >
        <Route exact path='/' Component={Main}/>
        <Route exact path='/about' Component={AboutPage}/>
        <Route exact path='/blog' Component={BlogPage}/>
        <Route exact path='/work' Component={WorkPage}/>
        <Route exact path='/skills' Component={MySkillsPage}/>

        </Routes>
      </AnimatePresence>

      
      
      
     


    </ThemeProvider>

   
    
    </>
  )
}

export default App


